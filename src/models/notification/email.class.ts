import { Channel } from "@/constants/enums";
import User from "@/models/user.class";
import Notification, {
  NotificationAttributes,
} from "@/models/notification/notification.class";

export default class EmailNotification extends Notification {
  constructor(attributes: NotificationAttributes) {
    super(attributes);

    this.channel = Channel["EMAIL"];
  }

  channel: Channel;
}
