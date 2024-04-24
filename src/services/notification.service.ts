import { validate } from "class-validator";
import { Request, Response } from "express";
import { Category, Channel } from "@/constants/enums";
import { HttpUnprocessableContentError } from "@/utils/errors";
import { SubmissionDTO } from "@/dto";
import Notification from "@/models/notification/notification.class";
import UserRepository from "@/repositories/user.repository";
import NotificationRepository from "@/repositories/notification.repository";

export default class NotificationService {
  constructor() {
    this.userRepository = new UserRepository();
    this.notificationRepository = new NotificationRepository();
  }

  userRepository: UserRepository;
  notificationRepository: NotificationRepository;

  async postSubmission(inputs: {
    category?: string;
    message?: string;
  }): Promise<void> {
    const submission = new SubmissionDTO(inputs);
    const errors = await validate(submission);

    if (errors.length) {
      throw new HttpUnprocessableContentError(errors);
      return;
    }

    const now = new Date().toISOString();
    const users = this.userRepository.getUsersByCategory(
      submission.category as Category
    );

    for (const user of users) {
      for (const channel of user.channels) {
        const params = {
          createdAt: now,
          category: submission.category as Category,
          message: submission.message,

          userId: user.id as number,
          userName: user.name,
          userEmail: user.email,
        };

        switch (channel) {
          case Channel["EMAIL"]:
            this.notificationRepository.sendEmailNotification(params);
            break;
          case Channel["PUSH"]:
            this.notificationRepository.sendPushNotification(params);
            break;
          case Channel["SMS"]:
            this.notificationRepository.sendSMSNotification(params);
            break;
          default:
            console.warn(`No ${channel} Channel available`);
            break;
        }
      }
    }
  }

  getSortedNotifications(): Array<Notification> {
    return this.notificationRepository.getSortedNotifications();
  }
}
