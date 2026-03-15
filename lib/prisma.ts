import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";

declare global {
  var prisma: any;
}

export const prisma =
  global.prisma ??
  new PrismaClient().$extends(withAccelerate());

if (process.env.NODE_ENV !== "production") global.prisma = prisma;