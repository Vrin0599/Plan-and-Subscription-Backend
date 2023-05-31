/*
  Warnings:

  - You are about to drop the column `add_onId` on the `plans` table. All the data in the column will be lost.
  - You are about to drop the column `chargesId` on the `plans` table. All the data in the column will be lost.
  - You are about to drop the column `feature_groupId` on the `plans` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "plans" DROP CONSTRAINT "plans_add_onId_fkey";

-- DropForeignKey
ALTER TABLE "plans" DROP CONSTRAINT "plans_chargesId_fkey";

-- DropForeignKey
ALTER TABLE "plans" DROP CONSTRAINT "plans_feature_groupId_fkey";

-- AlterTable
ALTER TABLE "plans" DROP COLUMN "add_onId",
DROP COLUMN "chargesId",
DROP COLUMN "feature_groupId";
