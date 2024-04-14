import { Category, Channel } from "@/constants/enums";
import { User } from "@/models";

class Log {
  constructor(attributes: {
    createdAt: string;
    category: Category;
    channel: Channel;

    message: string;

    userId: number;
    userName: string;
    userEmail: string;
  }) {
    this.createdAt = attributes.createdAt;
    this.category = attributes.category;
    this.channel = attributes.channel;

    this.message = attributes.message;

    this.userId = attributes.userId;
    this.userName = attributes.userName;
    this.userEmail = attributes.userEmail;
  }

  createdAt: string;
  category: Category;
  channel: Channel;

  message: string;

  userId: number;
  userName: User["name"];
  userEmail: User["email"];
}

export default Log;
