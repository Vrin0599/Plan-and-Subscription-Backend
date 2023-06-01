-- CreateTable
CREATE TABLE "plan_feature_maping" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "plan_id" UUID NOT NULL,
    "feature_id" UUID NOT NULL,
    "limit_count" INTEGER NOT NULL,
    "is_active" BOOLEAN DEFAULT true,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "created_by" UUID,
    "updated_by" UUID,
    "is_deleted" BOOLEAN DEFAULT false,

    CONSTRAINT "plan_feature_maping_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "plan_feature_maping" ADD CONSTRAINT "plan_feature_maping_feature_id_fkey" FOREIGN KEY ("feature_id") REFERENCES "feature"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "plan_feature_maping" ADD CONSTRAINT "plan_feature_maping_plan_id_fkey" FOREIGN KEY ("plan_id") REFERENCES "plans"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
