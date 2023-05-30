/*
  Warnings:

  - You are about to drop the column `add_on_id` on the `plans` table. All the data in the column will be lost.
  - You are about to drop the column `charge_id` on the `plans` table. All the data in the column will be lost.
  - You are about to drop the column `feature_group_id` on the `plans` table. All the data in the column will be lost.
  - You are about to drop the column `pricing` on the `plans` table. All the data in the column will be lost.
  - Added the required column `billing_cycles` to the `plans` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `plans` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "plans" DROP CONSTRAINT "plans_add_on_id_fkey";

-- DropForeignKey
ALTER TABLE "plans" DROP CONSTRAINT "plans_charge_id_fkey";

-- DropForeignKey
ALTER TABLE "plans" DROP CONSTRAINT "plans_feature_group_id_fkey";

-- AlterTable
ALTER TABLE "plans" DROP COLUMN "add_on_id",
DROP COLUMN "charge_id",
DROP COLUMN "feature_group_id",
DROP COLUMN "pricing",
ADD COLUMN     "add_onId" UUID,
ADD COLUMN     "billing_cycles" VARCHAR NOT NULL,
ADD COLUMN     "billing_period" VARCHAR[],
ADD COLUMN     "chargesId" UUID,
ADD COLUMN     "feature_groupId" UUID,
ADD COLUMN     "is_flat_fee" BOOLEAN DEFAULT false,
ADD COLUMN     "is_per_user" BOOLEAN DEFAULT false,
ADD COLUMN     "is_plan_public" BOOLEAN DEFAULT false,
ADD COLUMN     "price" JSONB NOT NULL;

-- CreateTable
CREATE TABLE "plan_add_on_mapping" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "price" JSONB NOT NULL,
    "limit_count" INTEGER,
    "add_on_id" UUID NOT NULL,
    "plan_id" UUID NOT NULL,
    "delete" BOOLEAN DEFAULT false,
    "is_active" BOOLEAN DEFAULT true,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "created_by" UUID,
    "updated_by" UUID,

    CONSTRAINT "plan_add_on_mapping_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "plan_charge_mapping" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "price" DOUBLE PRECISION NOT NULL,
    "charge_id" UUID NOT NULL,
    "plan_id" UUID NOT NULL,
    "delete" BOOLEAN DEFAULT false,
    "is_active" BOOLEAN DEFAULT true,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "created_by" UUID,
    "updated_by" UUID,

    CONSTRAINT "plan_charge_mapping_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "plans" ADD CONSTRAINT "plans_feature_groupId_fkey" FOREIGN KEY ("feature_groupId") REFERENCES "feature_group"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "plans" ADD CONSTRAINT "plans_add_onId_fkey" FOREIGN KEY ("add_onId") REFERENCES "add_on"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "plans" ADD CONSTRAINT "plans_chargesId_fkey" FOREIGN KEY ("chargesId") REFERENCES "charges"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "plan_add_on_mapping" ADD CONSTRAINT "plan_add_on_mapping_add_on_id_fkey" FOREIGN KEY ("add_on_id") REFERENCES "add_on"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "plan_add_on_mapping" ADD CONSTRAINT "plan_add_on_mapping_plan_id_fkey" FOREIGN KEY ("plan_id") REFERENCES "plans"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "plan_charge_mapping" ADD CONSTRAINT "plan_charge_mapping_charge_id_fkey" FOREIGN KEY ("charge_id") REFERENCES "charges"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "plan_charge_mapping" ADD CONSTRAINT "plan_charge_mapping_plan_id_fkey" FOREIGN KEY ("plan_id") REFERENCES "plans"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
