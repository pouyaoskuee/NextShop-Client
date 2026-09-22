import vazirFont from "@/constants/localFonts";
import "../../styles/globals.css";
import { Toaster } from "react-hot-toast";
import SideBar from "./profile/SideBar";
import Providers from "@/app/Providers";

export const metadata = {
  title: "پروفایل کاربر",
  description: "پروفایل کاربر",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" className={`${vazirFont.variable} font-sans antialiased`}>
      <body>
        <Providers>
          <Toaster />
          <div className="grid grid-cols-5 bg-white h-screen">
            <div className="col-span-1 bg-gray-100 overflow-y-auto p-4">
              <SideBar />
            </div>
            <div className="col-span-4 overflow-y-auto p-4">{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
