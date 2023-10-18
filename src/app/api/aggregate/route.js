import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { async } from './../cart/route';


export async function POST(req,res){

    try{
        
        const prisma = new PrismaClient();
        const result = await prisma.product.aggregate({
            _avg: {price:true},
            _count: {id:true},
            _max: {price:true},
            _sum: {price:true}, 
            
        })

        return NextResponse.json({status:"success", data:result})

    }catch(e){
        return NextResponse.json({status:"Fail",data:e})
    }
}

export async function PUT(req,res){

    try{  
        const prisma = new PrismaClient();
        const result = await prisma.product.groupBy({
            by: ['firstName']
        })
        
        return NextResponse.json({status:"success", data:result})

    }catch(e){
        return NextResponse.json({status:"Fail",data:e})
    }
}