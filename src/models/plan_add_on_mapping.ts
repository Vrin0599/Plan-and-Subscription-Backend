import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { add_on, add_onId } from './add_on';
import type { plan, planId } from './plan';

export interface plan_add_on_mappingAttributes {
  id: string;
  price: object;
  limit_count?: number;
  add_on_id: string;
  plan_id: string;
  is_active?: boolean;
  created_at?: Date;
  updated_at?: Date;
  created_by?: string;
  updated_by?: string;
  is_deleted?: boolean;
}

export type plan_add_on_mappingPk = "id";
export type plan_add_on_mappingId = plan_add_on_mapping[plan_add_on_mappingPk];
export type plan_add_on_mappingOptionalAttributes = "id" | "limit_count" | "is_active" | "created_at" | "updated_at" | "created_by" | "updated_by" | "is_deleted";
export type plan_add_on_mappingCreationAttributes = Optional<plan_add_on_mappingAttributes, plan_add_on_mappingOptionalAttributes>;

export class plan_add_on_mapping extends Model<plan_add_on_mappingAttributes, plan_add_on_mappingCreationAttributes> implements plan_add_on_mappingAttributes {
  id!: string;
  price!: object;
  limit_count?: number;
  add_on_id!: string;
  plan_id!: string;
  is_active?: boolean;
  created_at?: Date;
  updated_at?: Date;
  created_by?: string;
  updated_by?: string;
  is_deleted?: boolean;

  // plan_add_on_mapping belongsTo add_on via add_on_id
  add_on!: add_on;
  getAdd_on!: Sequelize.BelongsToGetAssociationMixin<add_on>;
  setAdd_on!: Sequelize.BelongsToSetAssociationMixin<add_on, add_onId>;
  createAdd_on!: Sequelize.BelongsToCreateAssociationMixin<add_on>;
  // plan_add_on_mapping belongsTo plan via plan_id
  plan!: plan;
  getPlan!: Sequelize.BelongsToGetAssociationMixin<plan>;
  setPlan!: Sequelize.BelongsToSetAssociationMixin<plan, planId>;
  createPlan!: Sequelize.BelongsToCreateAssociationMixin<plan>;

  static initModel(sequelize: Sequelize.Sequelize): typeof plan_add_on_mapping {
    return plan_add_on_mapping.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    price: {
      type: DataTypes.JSONB,
      allowNull: false
    },
    limit_count: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    add_on_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'add_on',
        key: 'id'
      }
    },
    plan_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'plans',
        key: 'id'
      }
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    created_by: {
      type: DataTypes.UUID,
      allowNull: true
    },
    updated_by: {
      type: DataTypes.UUID,
      allowNull: true
    },
    is_deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'plan_add_on_mapping',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "plan_add_on_mapping_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
