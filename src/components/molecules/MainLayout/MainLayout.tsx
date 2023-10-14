import MainFooter from "@/components/molecules/MainFooter";
import MainHeader from "@/components/molecules/MainHeader";
interface IMainLayoutProps {
  children: React.ReactNode;
  theme?: "light" | "dark";
}

export default function MainLayout({
  children,
  theme = "dark",
}: IMainLayoutProps) {
  return (
    <>
      <MainHeader theme={theme} />
      <main className="">{children}</main>
      <MainFooter />
    </>
  );
}
