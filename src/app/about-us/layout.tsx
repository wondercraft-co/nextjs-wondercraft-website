import MainHeader from "@/components/molecules/MainHeader";

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MainHeader theme="light" />
      <main className="">{children}</main>
    </>
  );
}
