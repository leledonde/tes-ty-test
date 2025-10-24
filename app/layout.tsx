import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import { Mitr } from "next/font/google";
import Providers from "./providers";

const mitr = Mitr({
  subsets: ["thai"],
  weight: ["400"],
});

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={mitr.className}>
      <body>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
};

export default layout;
