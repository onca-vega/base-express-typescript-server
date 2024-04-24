import users from "@/mocks/users.json";
import { Category } from "@/constants/enums";
import User from "@/models/user.class";

export default class UserRepository {
  getUsers(): Array<User> {
    return users as Array<User>;
  }

  getUsersByCategory(category: Category): Array<User> {
    return this.getUsers().filter((user) => user.subscribed.includes(category));
  }
}
