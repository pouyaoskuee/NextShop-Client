import {NextResponse} from "next/server";
import middlewareAuth from "@/utils/middlewareAuth";

export default async function proxy(req, res) {
    const pathName = req.nextUrl.pathname;


    if (pathName.startsWith('/profile')) {
        const user = await middlewareAuth(req);

        if (!user) {
            return NextResponse.redirect(new URL('/auth' , req.url));
        }

    }

    if (pathName.startsWith('/admin')) {
        const user = await middlewareAuth(req);

        if (!user) {
            return NextResponse.redirect(new URL('/auth' , req.url));
        }
        if (user.role !== 'ADMIN') {
            return NextResponse.redirect(new URL('/' , req.url));

        }

    }




}

const config = {
    matcher:['/admin/:path*' , '/profile'],
}