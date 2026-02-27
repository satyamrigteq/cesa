import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CESA | Children Education Support Arts",
  description: "Support children's education, food, and shelter through the sale of their artwork.",
  icons: {
    icon: "/assets/images/cesa_favicon_monogram.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.variable} font-sans antialiased bg-background text-foreground tracking-tight`}>
        {children}
      </body>
    </html>
  );
}
