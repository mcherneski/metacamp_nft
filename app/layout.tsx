import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from '@/app/providers'
import '@rainbow-me/rainbowkit/styles.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MetaCamp 2024 NFT",
  description: "Mint your MetaCamp 2024 Attendance NFT!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className={inter.className}>
          <Providers>
            {children}
          </Providers>
        </body>
    </html>
  );
}
