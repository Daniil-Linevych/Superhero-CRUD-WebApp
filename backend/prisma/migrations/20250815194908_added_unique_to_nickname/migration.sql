/*
  Warnings:

  - A unique constraint covering the columns `[nickname]` on the table `superheroes` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "superheroes_nickname_key" ON "public"."superheroes"("nickname");
