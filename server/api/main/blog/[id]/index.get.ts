import prisma from "~/lib/prisma";

export default defineCachedEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, "id") as string;
    const blog = await prisma.blog.findUnique({
      where: {
        id: parseInt(id),
      }
    });

    return blog;
  } catch (error: any) {
    return createError({ statusCode: 500, statusMessage: error?.message });
  }
});
