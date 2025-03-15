import prisma from "~/lib/prisma"

export default defineEventHandler(async (event) => {
try {
    const id  =  getRouterParam(event, "id") as string

    const project = await prisma.projects.findUnique({
        where: {
            id: parseInt(id)
        }
    })

    if (!project) {
        return createError({ statusCode: 404, statusMessage: "Project not found" })
    }

    return {
        statusCode: 200,
        data: project
    }
} catch (error) {
    return createError({ statusCode: 500, statusMessage: "Project not found" })
}
})