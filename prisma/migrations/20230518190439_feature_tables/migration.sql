/*
  Warnings:

  - You are about to drop the `addrerss` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "company" DROP CONSTRAINT "company_address_id_fkey";

-- DropTable
DROP TABLE "addrerss";

-- CreateTable
CREATE TABLE "address" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "address_line" VARCHAR,
    "city" VARCHAR NOT NULL,
    "state" VARCHAR NOT NULL,
    "country" VARCHAR NOT NULL,
    "pincode" INTEGER NOT NULL,
    "delete" BOOLEAN DEFAULT false,
    "is_active" BOOLEAN DEFAULT false,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "created_by" UUID,
    "updated_by" UUID,

    CONSTRAINT "address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "feature" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" VARCHAR NOT NULL,
    "delete" BOOLEAN DEFAULT false,
    "is_active" BOOLEAN DEFAULT false,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "created_by" UUID,
    "updated_by" UUID,

    CONSTRAINT "feature_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "feature_group" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" VARCHAR NOT NULL,
    "description" VARCHAR,
    "delete" BOOLEAN DEFAULT false,
    "is_active" BOOLEAN DEFAULT false,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "created_by" UUID,
    "updated_by" UUID,

    CONSTRAINT "feature_group_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "feature_group_maping" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "feature_group_id" UUID NOT NULL,
    "feature_id" UUID NOT NULL,
    "delete" BOOLEAN DEFAULT false,
    "is_active" BOOLEAN DEFAULT false,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "created_by" UUID,
    "updated_by" UUID,

    CONSTRAINT "feature_group_maping_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "company" ADD CONSTRAINT "company_address_id_fkey" FOREIGN KEY ("address_id") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "feature_group_maping" ADD CONSTRAINT "feature_group_maping_feature_id_fkey" FOREIGN KEY ("feature_id") REFERENCES "feature"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "feature_group_maping" ADD CONSTRAINT "feature_group_maping_feature_group_id_fkey" FOREIGN KEY ("feature_group_id") REFERENCES "feature_group"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
