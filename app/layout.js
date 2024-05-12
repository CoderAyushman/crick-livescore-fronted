import { Inter } from "next/font/google";
import "./globals.css";

import 'bootstrap/dist/css/bootstrap.css';
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "crick-info",
  description: "A hobby project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NavBar />
      <div  className="px-8 py-8 " >

      {children}
      </div>
      </body>
    </html>
  );
}
