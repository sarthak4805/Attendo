import StudentLayout from "@/components/ui/StudentLayout";

export default function StudentRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <StudentLayout>{children}</StudentLayout>;
}
