import { Request, Response } from "express";

import NotificationService from "@/services/notification.service";

export default class NotificationController {
  path = "/notification";

  get(req: Request, res: Response) {
    try {
      const notificationService = new NotificationService();
      const notifications = notificationService.getSortedNotifications();

      res.json(notifications);
    } catch (error: any) {
      res.status(error.status || 500).json(error.data || null);
    }
  }

  async post(req: Request, res: Response) {
    try {
      const notificationService = new NotificationService();
      await notificationService.postSubmission(req.body || {});

      res.status(201).json({
        message: "Notifications succesfully sent",
      });
    } catch (error: any) {
      res.status(error.status || 500).json(error.data || null);
    }
  }
}
