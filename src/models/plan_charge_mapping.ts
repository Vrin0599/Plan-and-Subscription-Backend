import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { charge, chargeId } from './charge';
import type { plan, planId } from './plan';

export interface plan_charge_mappingAttributes {
  id: string;
  price: number;
  charge_id: string;
  plan_id: string;
  is_active?: boolean;
  created_at?: Date;
  updated_at?: Date;
  created_by?: string;
  updated_by?: string;
  is_deleted?: boolean;
}

export type plan_charge_mappingPk = "id";
export type plan_charge_mappingId = plan_charge_mapping[plan_charge_mappingPk];
export type plan_charge_mappingOptionalAttributes = "id" | "is_active" | "created_at" | "updated_at" | "created_by" | "updated_by" | "is_deleted";
export type plan_charge_mappingCreationAttributes = Optional<plan_charge_mappingAttributes, plan_charge_mappingOptionalAttributes>;

export class plan_charge_mapping extends Model<plan_charge_mappingAttributes, plan_charge_mappingCreationAttributes> implements plan_charge_mappingAttributes {
  id!: string;
  price!: number;
  charge_id!: string;
  plan_id!: string;
  is_active?: boolean;
  created_at?: Date;
  updated_at?: Date;
  created_by?: string;
  updated_by?: string;
  is_deleted?: boolean;

  // plan_charge_mapping belongsTo charge via charge_id
  charge!: charge;
  getCharge!: Sequelize.BelongsToGetAssociationMixin<charge>;
  setCharge!: Sequelize.BelongsToSetAssociationMixin<charge, chargeId>;
  createCharge!: Sequelize.BelongsToCreateAssociationMixin<charge>;
  // plan_charge_mapping belongsTo plan via plan_id
  plan!: plan;
  getPlan!: Sequelize.BelongsToGetAssociationMixin<plan>;
  setPlan!: Sequelize.BelongsToSetAssociationMixin<plan, planId>;
  createPlan!: Sequelize.BelongsToCreateAssociationMixin<plan>;

  static initModel(sequelize: Sequelize.Sequelize): typeof plan_charge_mapping {
    return plan_charge_mapping.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    charge_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'charges',
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
    tableName: 'plan_charge_mapping',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "plan_charge_mapping_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
