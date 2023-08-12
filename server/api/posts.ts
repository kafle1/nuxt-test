import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  try {
    let posts = await prisma.post.findMany({
      include: {
        user: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    //seed db if there are no posts
    if (posts.length === 0) {
      await prisma.user.create({
        data: {
          username: "test",
          email: "kafleniraj@gmail.com",
          avatar:
            "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=2000",
          posts: {
            create: [
              {
                title: "My first post",
                content: "Hello world!",
                id: "ccb658dc-a0fc-42fb-9485-31cdaf8e0490",
              },
              {
                title: "My second post",
                content: "Hello world!",
                id: "ccb658dc-a0fc-42fb-9485-31cdaf8e0491",
              },
            ],
          },
        },
      });

      posts = await prisma.post.findMany({
        include: {
          user: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
    }

    return posts;
  } catch (error) {
    console.error(error);
    return error;
  }
});
