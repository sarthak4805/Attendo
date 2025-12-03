import { redirect } from "next/navigation"

export default function TeachersIndex() {
  redirect("/teachers/dashboard")
  return null
}
