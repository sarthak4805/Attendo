// app/teacher/layout.ts
 import TeacherLayout from "@/components/ui/TeacherLayout";

export default function TeacherRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <TeacherLayout>{children}</TeacherLayout>;
}
