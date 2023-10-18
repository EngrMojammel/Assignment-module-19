import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(req,res){

    try{
        const prisma = new PrismaClient()

        const newCart = prisma.cart.create({
            data: {
                title : "bangla",
                sessionId : "12345",
                token : "123",
                status : "bangla",
                firstName : "qqq",
                middleName : "qqq",
                lastName : "qqq",
                mobile : "0188888",
                email : "qqq@email.com",
                city : "dhaka",
                country : "bangladesh",
            }
        })

        const cartList = prisma.cart.findMany({
            where: {firstName: "aa"},
            select: {id: true}
        })

        const updateCart = prisma.cart.update({
            where: {id: 3},
            data: {mobile: "1111111"}
        })

        const deleteCart = prisma.cart.delete({
            where: {id: 2}
        })

        const result =await prisma.$transaction([newCart,cartList,updateCart,deleteCart])


      
        return NextResponse.json({status:"Success", data:result})

    }catch(e){
        return NextResponse.json({status:"Fail", data: e})
    }
}