import prisma from "~/lib/prisma";

export default defineCachedEventHandler(async (event) => {
  try {
    const projects = await prisma.projects.findMany();
    return { statusCode: 200, data: projects };
  } catch (error: any) {
    return createError({ statusCode: 500, statusMessage: error.message });
  }
});
