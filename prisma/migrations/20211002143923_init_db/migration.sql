-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "tags" TEXT[],
ADD COLUMN     "video" TEXT;

-- CreateTable
CREATE TABLE "Emoji" (
    "id" SERIAL NOT NULL,
    "emoji" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL,
    "postId" INTEGER NOT NULL,

    CONSTRAINT "Emoji_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Emoji" ADD CONSTRAINT "Emoji_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Emoji" ADD CONSTRAINT "Emoji_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
