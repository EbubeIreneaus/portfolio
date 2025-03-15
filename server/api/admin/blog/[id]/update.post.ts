import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { title, content, desc, image, published } = body;
    const id = getRouterParam(event, "id") as string;

    await prisma.blog.update({
      where: {
        id: parseInt(id),
      },
      data: {
        title,
        content,
        desc,
        image,
        published,
      },
    });

    return { statusCode: 200 };
  } catch (error: any) {
    return createError({
      statusCode: 500,
      statusMessage: error.message,
    });
  }
});
