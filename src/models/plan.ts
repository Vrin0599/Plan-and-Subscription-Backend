import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { add_on, add_onId } from './add_on';
import type { charge, chargeId } from './charge';
import type { feature_group, feature_groupId } from './feature_group';

export interface planAttributes {
  id: string;
  name: string;
  description?: string;
  pricing: string;
  is_recomended?: boolean;
  is_metered_billing?: boolean;
  feature_group_id: string;
  add_on_id: string;
  charge_id: string;
  delete?: boolean;
  is_active?: boolean;
  created_at?: Date;
  updated_at?: Date;
  created_by?: string;
  updated_by?: string;
}

export type planPk = "id";
export type planId = plan[planPk];
export type planOptionalAttributes = "id" | "description" | "is_recomended" | "is_metered_billing" | "delete" | "is_active" | "created_at" | "updated_at" | "created_by" | "updated_by";
export type planCreationAttributes = Optional<planAttributes, planOptionalAttributes>;

export class plan extends Model<planAttributes, planCreationAttributes> implements planAttributes {
  id!: string;
  name!: string;
  description?: string;
  pricing!: string;
  is_recomended?: boolean;
  is_metered_billing?: boolean;
  feature_group_id!: string;
  add_on_id!: string;
  charge_id!: string;
  delete?: boolean;
  is_active?: boolean;
  created_at?: Date;
  updated_at?: Date;
  created_by?: string;
  updated_by?: string;

  // plan belongsTo add_on via add_on_id
  add_on!: add_on;
  getAdd_on!: Sequelize.BelongsToGetAssociationMixin<add_on>;
  setAdd_on!: Sequelize.BelongsToSetAssociationMixin<add_on, add_onId>;
  createAdd_on!: Sequelize.BelongsToCreateAssociationMixin<add_on>;
  // plan belongsTo charge via charge_id
  charge!: charge;
  getCharge!: Sequelize.BelongsToGetAssociationMixin<charge>;
  setCharge!: Sequelize.BelongsToSetAssociationMixin<charge, chargeId>;
  createCharge!: Sequelize.BelongsToCreateAssociationMixin<charge>;
  // plan belongsTo feature_group via feature_group_id
  feature_group!: feature_group;
  getFeature_group!: Sequelize.BelongsToGetAssociationMixin<feature_group>;
  setFeature_group!: Sequelize.BelongsToSetAssociationMixin<feature_group, feature_groupId>;
  createFeature_group!: Sequelize.BelongsToCreateAssociationMixin<feature_group>;

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
    pricing: {
      type: DataTypes.STRING,
      allowNull: false
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
    feature_group_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'feature_group',
        key: 'id'
      }
    },
    add_on_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'add_on',
        key: 'id'
      }
    },
    charge_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'charges',
        key: 'id'
      }
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
