import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(req,res){

    try{
        const prisma = new PrismaClient()

        const newOrder = prisma.order.create({
            data: {
                title: "123",
                token: "123",
                subTotal: 10000,
                itemDiscount: 100,
                tax: 100,
                total:10000,
                discount: 100,
                grandTotal: 100000,
                firstName: "qq",
                middleName: "qq",
                lastName: "qq",
                mobile: "123456789",
                email: "qq@email.com",
                city: "qqqqq",
                country: "qqqqqq",
            }
        })

        const orderList = prisma.order.findMany({
            where: {title: "aa"},
            select: {id: true}
        })

        const updateOrder  = prisma.order.update({
            where: {id: 3},
            data: {slug: "1111111"}
        })

        const deleteOrder  = prisma.order.delete({
            where: {id: 2}
        })

        const result =await prisma.$transaction([newOrder ,orderList,updateOrder  ,deleteOrder ])


      
        return NextResponse.json({status:"Success", data:result})

    }catch(e){
        return NextResponse.json({status:"Fail", data: e})
    }
}