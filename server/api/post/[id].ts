import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  try {
    const { id } = event.context.params;

    const post = await prisma.post.findUnique({
      where: {
        id,
      },
      include: {
        user: true,
      },
    });

    return post;
  } catch (error) {
    console.log(error);
    return error;
  }
});
