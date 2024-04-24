import { Category } from "@/constants/enums";
import User from "@/models/user.class";

export interface NotificationAttributes {
  createdAt: string;
  category: Category;

  message: string;

  userId: number;
  userName: string;
  userEmail: string;
}

export default class Notification {
  constructor(attributes: NotificationAttributes) {
    this.createdAt = attributes.createdAt;
    this.category = attributes.category;

    this.message = attributes.message;

    this.userId = attributes.userId;
    this.userName = attributes.userName;
    this.userEmail = attributes.userEmail;
  }

  createdAt: string;
  category: Category;

  userId: number;
  userName: User["name"];
  userEmail: User["email"];

  message: string;
}
