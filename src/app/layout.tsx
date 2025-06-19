import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mars~ ✨ | A Dreamy Discord Bot",
  description: "A versatile Discord bot that understands natural language and brings magic to your server~ >///<",
  openGraph: {
    title: "Mars~ ✨ | A Dreamy Discord Bot",
    description: "A versatile Discord bot that understands natural language and brings magic to your server~ >///<",
    url: "https://mars-bot.com/",
    images: ["/star.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "https://mars-bot.com/",
    title: "Mars~ ✨ | A Dreamy Discord Bot",
    description: "A versatile Discord bot that understands natural language and brings magic to your server~ >///<",
    images: ["/star.png"],
  },
  icons: {
    icon: "/star.png",
  },
  themeColor: "#fbbcff",
  viewport: "width=device-width, initial-scale=1, viewport-fit=cover, user-scalable=no",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
