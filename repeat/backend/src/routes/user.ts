import {Hono} from 'hono'
export const  userRouter = new Hono<{
    Bindings : {
      DATABASE_URL : string
    }
  }>();
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'
//@ts-ignore

  
  

userRouter.post('/signup', async (c) => {
    const body = await c.req.json();
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  
  try{
    const user =  await prisma.user.create({
      data : {
        email : body.email,
        password : body.password,
        name : body.name
      }
    })
    const jwt = await sign({id : user.id},"mysecret");
      return c.json({jwt})
  
  }
  catch(e){
    c.status(411);
    return c.text("invalid credentials");
  
  }
  
  
  })
  userRouter.post('/signin', async (c) => {
    const body = await c.req.json();
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  try{
    const user =  await prisma.user.findFirst({
      where : {
        email : body.email,
        password : body.password,
        
      }
    })
    if(!user){
      c.status(403)
     return c.text("invalid")
  
   }
    
    const jwt = await sign({id : user.id},"mysecret");
      return c.json({jwt})
  
  }
  catch(e){
    c.status(411);
    return c.text("invalid credentials");
  
  }
  
  })