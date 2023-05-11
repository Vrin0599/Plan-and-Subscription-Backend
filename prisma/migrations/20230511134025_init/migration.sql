CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE "company" (
  "id" uuid PRIMARY KEY DEFAULT (gen_random_uuid()),
  "name" varchar NOT NULL,
  "website" varchar,
  "logo" varchar,
  "email" varchar UNIQUE NOT NULL,
  "address_id" uuid,
  "delete" boolean DEFAULT false,
  "is_active" boolean DEFAULT false,
  "created_at" timestamp DEFAULT (CURRENT_TIMESTAMP),
  "updated_at" timestamp DEFAULT (CURRENT_TIMESTAMP),
  "created_by" uuid,
  "updated_by" uuid
);

CREATE TABLE "addrerss" (
  "id" uuid PRIMARY KEY DEFAULT (gen_random_uuid()),
  "name" varchar NOT NULL,
  "address_line" varchar,
  "city" varchar NOT NULL,
  "state" varchar NOT NULL,
  "country" varchar NOT NULL,
  "pincode" int NOT NULL,
  "email" varchar UNIQUE NOT NULL,
  "delete" boolean DEFAULT false,
  "is_active" boolean DEFAULT false,
  "created_at" timestamp DEFAULT (CURRENT_TIMESTAMP),
  "updated_at" timestamp DEFAULT (CURRENT_TIMESTAMP),
  "created_by" uuid,
  "updated_by" uuid
);

ALTER TABLE "company" ADD FOREIGN KEY ("address_id") REFERENCES "addrerss" ("id");
