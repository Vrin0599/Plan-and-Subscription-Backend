import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { add_on, add_onId } from './add_on';
import type { charge, chargeId } from './charge';
import type { feature_group, feature_groupId } from './feature_group';
import type { plan_add_on_mapping, plan_add_on_mappingId } from './plan_add_on_mapping';
import type { plan_charge_mapping, plan_charge_mappingId } from './plan_charge_mapping';

export interface planAttributes {
  id: string;
  name: string;
  description?: string;
  is_recomended?: boolean;
  is_metered_billing?: boolean;
  delete?: boolean;
  is_active?: boolean;
  created_at?: Date;
  updated_at?: Date;
  created_by?: string;
  updated_by?: string;
  add_onId?: string;
  billing_cycles: string;
  billing_period?: string[];
  chargesId?: string;
  feature_groupId?: string;
  is_flat_fee?: boolean;
  is_per_user?: boolean;
  is_plan_public?: boolean;
  price: object;
}

export type planPk = "id";
export type planId = plan[planPk];
export type planOptionalAttributes = "id" | "description" | "is_recomended" | "is_metered_billing" | "delete" | "is_active" | "created_at" | "updated_at" | "created_by" | "updated_by" | "add_onId" | "billing_period" | "chargesId" | "feature_groupId" | "is_flat_fee" | "is_per_user" | "is_plan_public";
export type planCreationAttributes = Optional<planAttributes, planOptionalAttributes>;

export class plan extends Model<planAttributes, planCreationAttributes> implements planAttributes {
  id!: string;
  name!: string;
  description?: string;
  is_recomended?: boolean;
  is_metered_billing?: boolean;
  delete?: boolean;
  is_active?: boolean;
  created_at?: Date;
  updated_at?: Date;
  created_by?: string;
  updated_by?: string;
  add_onId?: string;
  billing_cycles!: string;
  billing_period?: string[];
  chargesId?: string;
  feature_groupId?: string;
  is_flat_fee?: boolean;
  is_per_user?: boolean;
  is_plan_public?: boolean;
  price!: object;

  // plan belongsTo add_on via add_onId
  add_on!: add_on;
  getAdd_on!: Sequelize.BelongsToGetAssociationMixin<add_on>;
  setAdd_on!: Sequelize.BelongsToSetAssociationMixin<add_on, add_onId>;
  createAdd_on!: Sequelize.BelongsToCreateAssociationMixin<add_on>;
  // plan belongsTo charge via chargesId
  charge!: charge;
  getCharge!: Sequelize.BelongsToGetAssociationMixin<charge>;
  setCharge!: Sequelize.BelongsToSetAssociationMixin<charge, chargeId>;
  createCharge!: Sequelize.BelongsToCreateAssociationMixin<charge>;
  // plan belongsTo feature_group via feature_groupId
  feature_group!: feature_group;
  getFeature_group!: Sequelize.BelongsToGetAssociationMixin<feature_group>;
  setFeature_group!: Sequelize.BelongsToSetAssociationMixin<feature_group, feature_groupId>;
  createFeature_group!: Sequelize.BelongsToCreateAssociationMixin<feature_group>;
  // plan hasMany plan_add_on_mapping via plan_id
  plan_add_on_mappings!: plan_add_on_mapping[];
  getPlan_add_on_mappings!: Sequelize.HasManyGetAssociationsMixin<plan_add_on_mapping>;
  setPlan_add_on_mappings!: Sequelize.HasManySetAssociationsMixin<plan_add_on_mapping, plan_add_on_mappingId>;
  addPlan_add_on_mapping!: Sequelize.HasManyAddAssociationMixin<plan_add_on_mapping, plan_add_on_mappingId>;
  addPlan_add_on_mappings!: Sequelize.HasManyAddAssociationsMixin<plan_add_on_mapping, plan_add_on_mappingId>;
  createPlan_add_on_mapping!: Sequelize.HasManyCreateAssociationMixin<plan_add_on_mapping>;
  removePlan_add_on_mapping!: Sequelize.HasManyRemoveAssociationMixin<plan_add_on_mapping, plan_add_on_mappingId>;
  removePlan_add_on_mappings!: Sequelize.HasManyRemoveAssociationsMixin<plan_add_on_mapping, plan_add_on_mappingId>;
  hasPlan_add_on_mapping!: Sequelize.HasManyHasAssociationMixin<plan_add_on_mapping, plan_add_on_mappingId>;
  hasPlan_add_on_mappings!: Sequelize.HasManyHasAssociationsMixin<plan_add_on_mapping, plan_add_on_mappingId>;
  countPlan_add_on_mappings!: Sequelize.HasManyCountAssociationsMixin;
  // plan hasMany plan_charge_mapping via plan_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof plan {
    return plan.init({
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
    is_recomended: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    is_metered_billing: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    delete: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
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
    add_onId: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'add_on',
        key: 'id'
      }
    },
    billing_cycles: {
      type: DataTypes.STRING,
      allowNull: false
    },
    billing_period: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true
    },
    chargesId: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'charges',
        key: 'id'
      }
    },
    feature_groupId: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'feature_group',
        key: 'id'
      }
    },
    is_flat_fee: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    is_per_user: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    is_plan_public: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    price: {
      type: DataTypes.JSONB,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'plans',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "plans_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
