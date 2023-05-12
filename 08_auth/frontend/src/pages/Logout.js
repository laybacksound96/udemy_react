import { redirect } from "react-router-dom";

export function deleteToken() {
  localStorage.removeItem("token");
  return redirect("/");
}
