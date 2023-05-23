import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { feature, featureId } from './feature';
import type { feature_group, feature_groupId } from './feature_group';

export interface add_onAttributes {
  id: string;
  name: string;
  description?: string;
  feature_group_id: string;
  feature_id: string;
  delete?: boolean;
  is_active?: boolean;
  created_at?: Date;
  updated_at?: Date;
  created_by?: string;
  updated_by?: string;
}

export type add_onPk = "id";
export type add_onId = add_on[add_onPk];
export type add_onOptionalAttributes = "id" | "description" | "delete" | "is_active" | "created_at" | "updated_at" | "created_by" | "updated_by";
export type add_onCreationAttributes = Optional<add_onAttributes, add_onOptionalAttributes>;

export class add_on extends Model<add_onAttributes, add_onCreationAttributes> implements add_onAttributes {
  id!: string;
  name!: string;
  description?: string;
  feature_group_id!: string;
  feature_id!: string;
  delete?: boolean;
  is_active?: boolean;
  created_at?: Date;
  updated_at?: Date;
  created_by?: string;
  updated_by?: string;

  // add_on belongsTo feature via feature_id
  feature!: feature;
  getFeature!: Sequelize.BelongsToGetAssociationMixin<feature>;
  setFeature!: Sequelize.BelongsToSetAssociationMixin<feature, featureId>;
  createFeature!: Sequelize.BelongsToCreateAssociationMixin<feature>;
  // add_on belongsTo feature_group via feature_group_id
  feature_group!: feature_group;
  getFeature_group!: Sequelize.BelongsToGetAssociationMixin<feature_group>;
  setFeature_group!: Sequelize.BelongsToSetAssociationMixin<feature_group, feature_groupId>;
  createFeature_group!: Sequelize.BelongsToCreateAssociationMixin<feature_group>;

  static initModel(sequelize: Sequelize.Sequelize): typeof add_on {
    return add_on.init({
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
    feature_group_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'feature_group',
        key: 'id'
      }
    },
    feature_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'feature',
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
    tableName: 'add_on',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "add_on_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
