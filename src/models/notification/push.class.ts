import { Channel } from "@/constants/enums";
import User from "@/models/user.class";
import Notification, {
  NotificationAttributes,
} from "@/models/notification/notification.class";

export default class PushNotification extends Notification {
  constructor(attributes: NotificationAttributes) {
    super(attributes);

    this.channel = Channel["PUSH"];
  }

  channel: Channel;
}
