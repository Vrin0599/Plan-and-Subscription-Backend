/*
  Warnings:

  - You are about to drop the column `delete` on the `add_on` table. All the data in the column will be lost.
  - You are about to drop the column `delete` on the `address` table. All the data in the column will be lost.
  - You are about to drop the column `delete` on the `charges` table. All the data in the column will be lost.
  - You are about to drop the column `delete` on the `company` table. All the data in the column will be lost.
  - You are about to drop the column `delete` on the `feature` table. All the data in the column will be lost.
  - You are about to drop the column `delete` on the `feature_group` table. All the data in the column will be lost.
  - You are about to drop the column `delete` on the `feature_group_maping` table. All the data in the column will be lost.
  - You are about to drop the column `delete` on the `plan_add_on_mapping` table. All the data in the column will be lost.
  - You are about to drop the column `delete` on the `plan_charge_mapping` table. All the data in the column will be lost.
  - You are about to drop the column `delete` on the `plans` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "add_on" DROP COLUMN "delete",
ADD COLUMN     "is_deleted" BOOLEAN DEFAULT false;

-- AlterTable
ALTER TABLE "address" DROP COLUMN "delete",
ADD COLUMN     "is_deleted" BOOLEAN DEFAULT false;

-- AlterTable
ALTER TABLE "charges" DROP COLUMN "delete",
ADD COLUMN     "is_deleted" BOOLEAN DEFAULT false;

-- AlterTable
ALTER TABLE "company" DROP COLUMN "delete",
ADD COLUMN     "is_deleted" BOOLEAN DEFAULT false;

-- AlterTable
ALTER TABLE "feature" DROP COLUMN "delete",
ADD COLUMN     "is_deleted" BOOLEAN DEFAULT false;

-- AlterTable
ALTER TABLE "feature_group" DROP COLUMN "delete",
ADD COLUMN     "is_deleted" BOOLEAN DEFAULT false;

-- AlterTable
ALTER TABLE "feature_group_maping" DROP COLUMN "delete",
ADD COLUMN     "is_deleted" BOOLEAN DEFAULT false;

-- AlterTable
ALTER TABLE "plan_add_on_mapping" DROP COLUMN "delete",
ADD COLUMN     "is_deleted" BOOLEAN DEFAULT false;

-- AlterTable
ALTER TABLE "plan_charge_mapping" DROP COLUMN "delete",
ADD COLUMN     "is_deleted" BOOLEAN DEFAULT false;

-- AlterTable
ALTER TABLE "plans" DROP COLUMN "delete",
ADD COLUMN     "is_deleted" BOOLEAN DEFAULT false;
