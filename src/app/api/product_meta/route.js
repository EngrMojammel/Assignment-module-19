import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(req,res){

    try{
        const prisma = new PrismaClient()

        const newProduct_meta = prisma.product_meta.create({
            data: {
                key: "123",
                content: "12345"
            }
        })

        const product_metaList = prisma.product_meta.findMany({
            where: {key: "11"},
            select: {id: true}
        })

        const updateProduct_meta  = prisma.product_meta.update({
            where: {id: 3},
            data: {content: "1111111"}
        })

        const deleteProduct_meta = prisma.product_meta.delete({
            where: {id: 2}
        })

        const result =await prisma.$transaction([newProduct_meta ,product_metaList,updateProduct_meta,deleteProduct_meta ])


      
        return NextResponse.json({status:"Success", data:result})

    }catch(e){
        return NextResponse.json({status:"Fail", data: e})
    }
}