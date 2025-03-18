import type { Metadata } from "next";
import "@repo/config/styles";
import Nav from "./components/Nav";

export const metadata: Metadata = {
  title: "Arth",
  description:
    "The only website you need to achieve complete financial literacy. Arth, where financial education is the believed to be the foundation for a secure future.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
