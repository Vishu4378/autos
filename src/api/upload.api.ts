import { client } from "./client";

export default class UplaodApi {
  static async uploadImage(formData: FormData) {
    const { data } = await client.post("/upload/image", formData);
    return data;
  }
}

export interface IUploadImage {
  imagePath: string;
  bucket: "profiles";
}
