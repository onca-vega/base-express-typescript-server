import { Category, Channel } from "@/constants/enums";

class User {
  constructor(attributes: {
    name: string;
    email: string;
    phoneNumber: string;
    subscribed: Array<Category>;
    channels: Array<Channel>;
  }) {
    this.name = attributes.name;
    this.email = attributes.email;
    this.phoneNumber = attributes.phoneNumber;
    this.subscribed = attributes.subscribed;
    this.channels = attributes.channels;
  }

  id?: number;
  name: string;
  email: string;
  phoneNumber: string;
  subscribed: Array<Category>;
  channels: Array<Channel>;
}

export default User;
