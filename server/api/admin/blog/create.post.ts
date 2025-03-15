import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { title, content, desc, image, published } = body;

    await prisma.blog.create({
      data: {
        title,
        content,
        desc,
        image,
        published,
      },
    });

    return { statusCode: 201 };
  } catch (error: any) {
    return createError({
      statusCode: 500,
      statusMessage: error.message,
    });
  }
});
