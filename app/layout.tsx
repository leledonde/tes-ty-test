import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import { Mitr } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

const mitr = Mitr({
  subsets: ["thai"],
  weight: ["400"],
});

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <html lang="en" className={mitr.className}>
        <body>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
};

export default layout;
