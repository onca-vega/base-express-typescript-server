import fs from "fs";
import notifications from "@/mocks/notifications.json";
import Notification, {
  NotificationAttributes,
} from "@/models/notification/notification.class";
import EmailNotification from "@/models/notification/email.class";
import PushNotification from "@/models/notification/push.class";
import SMSNotification from "@/models/notification/sms.class";

export default class NotificationRepository {
  getNotifications(): Array<Notification> {
    return notifications as Array<Notification>;
  }

  getSortedNotifications(): Array<Notification> {
    return this.getNotifications().sort((a, b) => {
      const aTime = new Date(a.createdAt).getTime();
      const bTime = new Date(b.createdAt).getTime();

      if (aTime > bTime) {
        return -1;
      } else if (aTime < bTime) {
        return 1;
      } else if (a.userId > b.userId) {
        return 1;
      } else {
        return -1;
      }
    });
  }

  sendEmailNotification(attributes: NotificationAttributes): EmailNotification {
    const emailNotification = new EmailNotification(attributes);

    const notifications = this.getNotifications();
    notifications.push(emailNotification);

    this.updateNotifications(notifications);

    return emailNotification;
  }

  sendPushNotification(attributes: NotificationAttributes): PushNotification {
    const emailNotification = new PushNotification(attributes);

    const notifications = this.getNotifications();
    notifications.push(emailNotification);

    this.updateNotifications(notifications);

    return emailNotification;
  }

  sendSMSNotification(attributes: NotificationAttributes): SMSNotification {
    const emailNotification = new SMSNotification(attributes);

    const notifications = this.getNotifications();
    notifications.push(emailNotification);

    this.updateNotifications(notifications);

    return emailNotification;
  }

  private updateNotifications(notifications: Array<Notification>) {
    fs.writeFileSync(
      "./src/mocks/notifications.json",
      JSON.stringify(notifications),
      "utf8"
    );
  }
}
