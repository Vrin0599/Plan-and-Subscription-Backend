import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { plan_charge_mapping, plan_charge_mappingId } from './plan_charge_mapping';

export interface chargeAttributes {
  id: string;
  name: string;
  description?: string;
  is_active?: boolean;
  created_at?: Date;
  updated_at?: Date;
  created_by?: string;
  updated_by?: string;
  is_deleted?: boolean;
}

export type chargePk = "id";
export type chargeId = charge[chargePk];
export type chargeOptionalAttributes = "id" | "description" | "is_active" | "created_at" | "updated_at" | "created_by" | "updated_by" | "is_deleted";
export type chargeCreationAttributes = Optional<chargeAttributes, chargeOptionalAttributes>;

export class charge extends Model<chargeAttributes, chargeCreationAttributes> implements chargeAttributes {
  id!: string;
  name!: string;
  description?: string;
  is_active?: boolean;
  created_at?: Date;
  updated_at?: Date;
  created_by?: string;
  updated_by?: string;
  is_deleted?: boolean;

  // charge hasMany plan_charge_mapping via charge_id
  plan_charge_mappings!: plan_charge_mapping[];
  getPlan_charge_mappings!: Sequelize.HasManyGetAssociationsMixin<plan_charge_mapping>;
  setPlan_charge_mappings!: Sequelize.HasManySetAssociationsMixin<plan_charge_mapping, plan_charge_mappingId>;
  addPlan_charge_mapping!: Sequelize.HasManyAddAssociationMixin<plan_charge_mapping, plan_charge_mappingId>;
  addPlan_charge_mappings!: Sequelize.HasManyAddAssociationsMixin<plan_charge_mapping, plan_charge_mappingId>;
  createPlan_charge_mapping!: Sequelize.HasManyCreateAssociationMixin<plan_charge_mapping>;
  removePlan_charge_mapping!: Sequelize.HasManyRemoveAssociationMixin<plan_charge_mapping, plan_charge_mappingId>;
  removePlan_charge_mappings!: Sequelize.HasManyRemoveAssociationsMixin<plan_charge_mapping, plan_charge_mappingId>;
  hasPlan_charge_mapping!: Sequelize.HasManyHasAssociationMixin<plan_charge_mapping, plan_charge_mappingId>;
  hasPlan_charge_mappings!: Sequelize.HasManyHasAssociationsMixin<plan_charge_mapping, plan_charge_mappingId>;
  countPlan_charge_mappings!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof charge {
    return charge.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
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
    tableName: 'charges',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "charges_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
