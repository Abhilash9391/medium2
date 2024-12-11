import {Hono} from 'hono'
export const  blogRouter = new Hono<{
    Bindings : {
      DATABASE_URL : string,
      varriables : {
        userid : string
      }
    }
  }>();
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign ,verify} from 'hono/jwt'

blogRouter.use('/*',async (c,next)=>{
    const authHeader = c.req.header("authorization")||"";
    const user = await  verify(authHeader,"mysecret");
    if(user){
        //@ts-ignore
        c.set("userid",user.id);
         await next();

    }
    else{
        c.status(411);
            return c.json({message : "you are not logged in "})

        

    }

})

blogRouter.post('/', async (c) => {
    const body =  await c.req.json()
    //@ts-ignore
    const authorId = c.get('userid')
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
   try{
     const blog = await prisma.post.create({
         data: {
             title: body.title,
             content: body.content,
             //@ts-ignore
             authorId: authorId,
         }
     })
     return c.json({blogid : blog.id})
     

   }
   catch(e){

    c.status(411)
    return c.text("invalid")
   }

    
  })
blogRouter.put('/', async (c) => {
    const body =  await c.req.json()
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try{
        const blog = prisma.post.update({
            where : {id : body.id},
            data : {
                title : body.title,
                content : body.content
            }
        }
        
        )
        
            
            return c.text("updated!")
    }
    catch(e){
        return c.text("invalid update")
    }
  })




  // add pagiantion that is to return only some blogs
  blogRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const blogs = await prisma.post.findMany
    return c.json({blogs})





  })
  blogRouter.get('/:id', async (c) => {

    const id =  await c.req.param("id")
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try{
        const blog = await prisma.post.findFirst({
            where : {id : id},
            
        }
        
        )
        return c.json({blog})
        
            
            
    }
    catch(e){
        c.status(411);
        return c.text("cannot fetch the blog")
    }
    
  })
