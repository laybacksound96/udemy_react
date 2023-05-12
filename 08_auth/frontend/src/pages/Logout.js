import { redirect } from "react-router-dom";

export function deleteToken() {
  localStorage.removeItem("token");
  localStorage.removeItem("expiration");
  return redirect("/");
}
