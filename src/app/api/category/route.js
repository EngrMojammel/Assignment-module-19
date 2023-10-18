import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(req,res){

    try{
        const prisma = new PrismaClient()

        const newCategory = prisma.category.create({
            data: {
                title: "qqq",
                metaTitle: "qqq",
                slug: "qqq",
                content: "qqq",
            }
        })

        const categoryList = prisma.category.findMany({
            where: {title: "aa"},
            select: {id: true}
        })

        const updateCategory  = prisma.category.update({
            where: {id: 3},
            data: {slug: "1111111"}
        })

        const deleteCategory  = prisma.category.delete({
            where: {id: 2}
        })

        const result =await prisma.$transaction([newCategory ,categoryList,updateCategory ,deleteCategory ])


      
        return NextResponse.json({status:"Success", data:result})

    }catch(e){
        return NextResponse.json({status:"Fail", data: e})
    }
}