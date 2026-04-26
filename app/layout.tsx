import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TechRock | Web Apps und Browser Extensions",
  description:
    "TechRock entwickelt eigene Web Apps und Browser Extensions mit TypeScript, Node, React, Angular, Firebase und KI.",
  icons: {
    icon: "/mountain.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
