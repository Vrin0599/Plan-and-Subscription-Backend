-- CreateTable
CREATE TABLE "add_on" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" VARCHAR NOT NULL,
    "description" VARCHAR,
    "feature_group_id" UUID NOT NULL,
    "feature_id" UUID NOT NULL,
    "delete" BOOLEAN DEFAULT false,
    "is_active" BOOLEAN DEFAULT true,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "created_by" UUID,
    "updated_by" UUID,

    CONSTRAINT "add_on_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "add_on" ADD CONSTRAINT "add_on_feature_id_fkey" FOREIGN KEY ("feature_id") REFERENCES "feature"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "add_on" ADD CONSTRAINT "add_on_feature_group_id_fkey" FOREIGN KEY ("feature_group_id") REFERENCES "feature_group"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
