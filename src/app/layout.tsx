import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import { Toaster } from "react-hot-toast";
import MouseMoveEffect from "@/components/mouse-move-effect";
import { ClerkProvider } from "@clerk/nextjs";
import AdComponent from "@/components/addcompon/page";

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
      <html lang="en" className="dark">
        <head>
          {/* ✅ Move script inside <head> */}
          <Script
            strategy="afterInteractive"
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2033131479941337"
            crossOrigin="anonymous"
          />
        </head>
        <body className={`${inter.className} bg-background text-foreground antialiased`}>
          <Providers>
            <MouseMoveEffect />
            {children}
            <AdComponent />
          </Providers>
        </body>
        <Toaster />
      </html>
    </ClerkProvider>
  );
}
