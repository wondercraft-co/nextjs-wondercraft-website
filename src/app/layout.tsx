import MainFooter from "@/components/molecules/MainFooter";
import MainHeader from "@/components/molecules/MainHeader";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wondercraft - Your marketing agency's dev team",
  description:
    "We help your branding, design, and creative firm produce an amazing digital product for your client. We want to help you shine!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-YRDCCW9LD2"
          id="tag_manage"
        ></Script>

        <Script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-YRDCCW9LD2');
        `,
          }}
        ></Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
