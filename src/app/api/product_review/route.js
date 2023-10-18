import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(req,res){

    try{
        const prisma = new PrismaClient()

        const newProduct_review = prisma.product_review.create({
            data: {
                title: "12345",
                rating: "123",
                content: "2222"
            }
        })

        const product_reviewList = prisma.product_review.findMany({
            where: {title: "11"},
            select: {id: true}
        })

        const updateProduct_review  = prisma.product_review.update({
            where: {id: 3},
            data: {content: "1111111"}
        })

        const deleteProduct_review = prisma.product_review.delete({
            where: {id: 2}
        })

        const result =await prisma.$transaction([newProduct_review ,product_reviewList,updateProduct_review,deleteProduct_review ])


      
        return NextResponse.json({status:"Success", data:result})

    }catch(e){
        return NextResponse.json({status:"Fail", data: e})
    }
}