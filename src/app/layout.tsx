import "~/styles/globals.css";

import { type Metadata } from "next";

import { ClerkProvider } from "@clerk/nextjs";
import TopNav from "./_components/topnav";

export const metadata: Metadata = {
  title: "T3 Gallery",
  description: "t3 gallery desc",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en" className="scroll-smooth antialiased">
        <body className="flex flex-col gap-4">
          <TopNav />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
