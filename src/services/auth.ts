import { myAxios } from "./helper";

export async function LoginRequest(email: string, password: string) {
  try {
      const request = await myAxios.post('/auth/login', { email, password });
      return request.data;
  } catch (error) {
      return null;
  }
}