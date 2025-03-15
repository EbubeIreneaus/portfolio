import prisma from "~/lib/prisma"

export default defineEventHandler(async event => {
    try {
        const body = await readBody(event)

    const {title, github, link, image, content, skills, category} = body

    const project = await prisma.projects.create({
        data: {
            title,
            github,
            link,
            image,
            content,
            skills,
            category
        },
    })

    return {statusCode: 201}
    } catch (error: any) {
        return createError({statusCode: 500, statusMessage: error.message})
    }
})