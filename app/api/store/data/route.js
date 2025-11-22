import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        const {searchParams} = new URL(request.url)
        const username = searchParams.get('username').toLowerCase();
        if (!username) {
            return NextResponse.json({ error: "Username required" }, { status: 400 });
        }

        const store = await prisma.store.findFirst({
            where: {
                username, isActive: true
            },
            include: {Product: {include: {rating: true}}}
        })
        if (!store) {
            return NextResponse.json({ error: "Store not found" }, { status: 404 });
        }
        return NextResponse.json({ store });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: error.code || error.message }, { status: 400 });
    }
}