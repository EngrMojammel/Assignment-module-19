import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(req,res){

    try{
        const prisma = new PrismaClient()

        const newUser = prisma.user.create({
            data: {
                firstName: "Md",
                middleName: "Mojo",
                lastName: "mmel",
                mobile: "01777777",
                email: "mo@email.com",
               password: "12345",
               admin: 123,
            }
        })

        const userList = prisma.user.findMany({
            where: {firstName: "aa"},
            select: {id: true}
        })

        const updateUser = prisma.user.update({
            where: {id: 3},
            data: {mobile: "1111111"}
        })

        const deleteUser = prisma.user.delete({
            where: {id: 2}
        })

        const result =await prisma.$transaction([newUser,userList,updateUser,deleteUser])


      
        return NextResponse.json({status:"Success", data:result})

    }catch(e){
        return NextResponse.json({status:"Fail", data: e})
    }
}