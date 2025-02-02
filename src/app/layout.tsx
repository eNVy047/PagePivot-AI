import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import { Toaster } from "react-hot-toast";
import MouseMoveEffect from "@/components/mouse-move-effect";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PagePivot AI",
  description: "AI-Powered PDF Text Genius",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <Providers>
    <html lang="en" className="dark">
    <body className={`${inter.className} bg-background text-foreground antialiased`}>
      <MouseMoveEffect />
      {children}
    </body>
    <Toaster />
  </html>
  </Providers>
  </ClerkProvider>
  );
}
