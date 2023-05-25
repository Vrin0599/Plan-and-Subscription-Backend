-- CreateTable
CREATE TABLE "plans" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" VARCHAR NOT NULL,
    "description" VARCHAR,
    "pricing" UUID NOT NULL,
    "is_recomended" BOOLEAN DEFAULT false,
    "is_metered_billing" BOOLEAN DEFAULT false,
    "feature_group_id" UUID NOT NULL,
    "add_on_id" UUID NOT NULL,
    "charge_id" UUID NOT NULL,
    "delete" BOOLEAN DEFAULT false,
    "is_active" BOOLEAN DEFAULT true,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "created_by" UUID,
    "updated_by" UUID,

    CONSTRAINT "plans_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "plans" ADD CONSTRAINT "plans_feature_group_id_fkey" FOREIGN KEY ("feature_group_id") REFERENCES "feature_group"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "plans" ADD CONSTRAINT "plans_add_on_id_fkey" FOREIGN KEY ("add_on_id") REFERENCES "add_on"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "plans" ADD CONSTRAINT "plans_charge_id_fkey" FOREIGN KEY ("charge_id") REFERENCES "charges"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
