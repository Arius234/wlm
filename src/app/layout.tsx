import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "700"], 
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WhoLikeMe | Site de Rencontre",
  description: "Trouvez qui vous aime en secret et créez des connexions inattendues.",
  openGraph: {
    title: "WhoLikeMe - Trouvez votre Crush Mystère",
    description: "Une nouvelle façon de découvrir qui vous aime en secret. Inscrivez-vous maintenant !",
    type: "website",
    url: "https://wholikeme.com",
    images: [
      {
        url: "/logo.png", 
        width: 1200,
        height: 630,
        alt: "WhoLikeMe Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
