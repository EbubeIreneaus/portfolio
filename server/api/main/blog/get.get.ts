import prisma from "~/lib/prisma"

export default defineCachedEventHandler(async event => {
    try {
        const blogs = await prisma.blog.findMany({
            where:{
                published: true
            }
        })
    } catch (error) {
        
    }
})