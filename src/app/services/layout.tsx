import MainHeader from "@/components/molecules/MainHeader";

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MainHeader theme="dark" />
      <main className="">{children}</main>
    </>
  );
}
