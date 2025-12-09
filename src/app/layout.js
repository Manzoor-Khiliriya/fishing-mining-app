import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { Geist, Geist_Mono } from "next/font/google";
import CategoryBar from "@/app/components/CategoryBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: "Fishing & Marine Store",
  description: "Fishing and marine equipment showcase website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-ocean-light flex flex-col min-h-screen ${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <CategoryBar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
