/*
  Warnings:

  - Added the required column `createAt` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createAt` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createAt` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Comment" ADD COLUMN     "createAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "createAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "adress" TEXT,
ADD COLUMN     "createAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "dateOfbirth" TIMESTAMP(3),
ADD COLUMN     "introduce" TEXT,
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT,
ADD COLUMN     "sex" TEXT;
