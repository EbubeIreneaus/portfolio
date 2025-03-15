import prisma from "~/lib/prisma";

export default defineEventHandler(async event => {
    try {
        const id = getRouterParam(event, 'id') as string;

        const blog = await prisma.blog.findUnique({
            where: {
                id: parseInt(id)
            }
        })

        return blog
    } catch (error) {
        return null
    }
})