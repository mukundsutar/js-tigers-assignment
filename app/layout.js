import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JS Tiger Assignment",
  description: "Made by Mukund Sutar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex w-full flex-col items-center justify-center">
            {/* Page content here */}
            <Navbar />
            {children}
          </div>

          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <Sidebar />
          </div>
        </div>
      </body>
    </html>
  );
}
