import { Poppins } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "JS Tiger Assignment",
  description: "Made by Mukund Sutar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="drawer scroll-smooth lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

          <div className="drawer-content flex w-full flex-col items-center justify-center">
            {/* Page content here */}
            <Navbar />
            {children}
          </div>

          <div className="drawer-side z-50">
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
