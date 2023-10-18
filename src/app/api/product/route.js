import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(req,res){

    try{
        const prisma = new PrismaClient()

        const newProduct = prisma.order.create({
            data: {
                firstName: "qqq",
                metaTitle: "qqq",
                slug: "qqq",
                summary: "qqq",
                price: 10000,
                discount: 100
            }
        })

        const productList = prisma.product.findMany({
            where: {firstName: "aa"},
            select: {id: true}
        })

        const updateProduct  = prisma.product.update({
            where: {id: 3},
            data: {slug: "1111111"}
        })

        const deleteProduct  = prisma.productr.delete({
            where: {id: 2}
        })

        const result =await prisma.$transaction([newProduct ,productList,updateProduct,deleteProduct ])


      
        return NextResponse.json({status:"Success", data:result})

    }catch(e){
        return NextResponse.json({status:"Fail", data: e})
    }
}