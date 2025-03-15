import prisma from "~/lib/prisma"

export default defineEventHandler(async event => {
    try {
        const body = await readBody(event)
        const id = getRouterParam(event, "id") as string

    const {title, github, link, image, content, skills} = body

    const project = await prisma.projects.update({
        where: {
            id: parseInt(id)
        },
        data: {
            title,
            github,
            link,
            image,
            content,
            skills,
        },
    })

    return {statusCode: 200}
    } catch (error: any) {
        return createError({statusCode: 500, statusMessage: error.message})
    }
})