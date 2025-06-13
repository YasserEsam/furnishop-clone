import type { Metadata } from "next";
import { Saira } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

// Import Swiper styles here
import 'swiper/css';
import 'swiper/css/navigation';

// Import Saira with CSS variable
const saira = Saira({
  variable: "--font-saira",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});


export const metadata: Metadata = {
  title: "FurniShop Clone - Next JS",
  description:
    "This app was created as part of a technical assessment for a job application. The task was to replicate a Figma design to demonstrate my front-end development skills, attention to detail, and ability to translate UI designs into functional components.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={saira.variable}>
      <body className="antialiased">
        <div className="min-h-screen">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
