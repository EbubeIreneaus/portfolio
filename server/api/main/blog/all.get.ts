import prisma from "~/lib/prisma"

export default defineCachedEventHandler(async event => {
    
    const query = getQuery(event)

    try {
        const blogs = await prisma.blog.findMany({
            
        })

        if(query.mini){
            return blogs
        }

        return blogs
        
    } catch (error: any) {
        return createError({statusCode: 500, statusMessage: error?.message})
    }
})