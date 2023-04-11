import { LoginPayload, RegisterPayload } from "@/models";
import axiosClient from "./axios-client";

export const authApi = {
  login(payload: LoginPayload) {
    return axiosClient.post("/auth/local", payload);
  },
  register(payload: RegisterPayload) {
    return axiosClient.post("/auth/local/register", payload);
  },
  logout() {
    return axiosClient.post("/auth/local/logout");
  },
  getProfile() {
    return axiosClient.get("/profile");
  },
};
