import "../../styles/globals.css";
import vazirFont from "@/constants/localFonts";
import Header from "@/app/Header";
import {Toaster} from "react-hot-toast";
import Providers from "@/app/Providers";


export const metadata = {
    title: {
        template: "%s | NextShop",
        default:'Next Shop',
    },
    description: "it is a shop application with next.js",
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
