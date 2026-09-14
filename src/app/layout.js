import "./globals.css";
import vazirFont from "@/constants/localFonts";
import Header from "@/app/Header";
import {Toaster} from "react-hot-toast";
import Providers from "@/app/Providers";


export const metadata = {
    title: {
        template: "%s | NextShop",
        default:'MyLife'
    },
    description: "it is a lifeStyle application",
};

export default function RootLayout({ children }) {
    return (
        <html lang="fa" dir="rtl" className={`${vazirFont.variable} font-sans antialiased`}>
            <body>
                <Providers>
                    <Toaster/>
                    <Header/>
                    {children}
                </Providers>
            </body>
        </html>
    );
}
