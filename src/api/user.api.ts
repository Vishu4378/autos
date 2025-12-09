import { client } from "./client";

export default class UserApi {
  static async getUser() {
    const { data } = await client.get("user-session");
    return data;
  }
}
