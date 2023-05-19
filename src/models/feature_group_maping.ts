import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { feature, featureId } from './feature';
import type { feature_group, feature_groupId } from './feature_group';

export interface feature_group_mapingAttributes {
  id: string;
  feature_group_id: string;
  feature_id: string;
  delete?: boolean;
  is_active?: boolean;
  created_at?: Date;
  updated_at?: Date;
  created_by?: string;
  updated_by?: string;
}

export type feature_group_mapingPk = "id";
export type feature_group_mapingId = feature_group_maping[feature_group_mapingPk];
export type feature_group_mapingOptionalAttributes = "id" | "delete" | "is_active" | "created_at" | "updated_at" | "created_by" | "updated_by";
export type feature_group_mapingCreationAttributes = Optional<feature_group_mapingAttributes, feature_group_mapingOptionalAttributes>;

export class feature_group_maping extends Model<feature_group_mapingAttributes, feature_group_mapingCreationAttributes> implements feature_group_mapingAttributes {
  id!: string;
  feature_group_id!: string;
  feature_id!: string;
  delete?: boolean;
  is_active?: boolean;
  created_at?: Date;
  updated_at?: Date;
  created_by?: string;
  updated_by?: string;

  // feature_group_maping belongsTo feature via feature_id
  feature!: feature;
  getFeature!: Sequelize.BelongsToGetAssociationMixin<feature>;
  setFeature!: Sequelize.BelongsToSetAssociationMixin<feature, featureId>;
  createFeature!: Sequelize.BelongsToCreateAssociationMixin<feature>;
  // feature_group_maping belongsTo feature_group via feature_group_id
  feature_group!: feature_group;
  getFeature_group!: Sequelize.BelongsToGetAssociationMixin<feature_group>;
  setFeature_group!: Sequelize.BelongsToSetAssociationMixin<feature_group, feature_groupId>;
  createFeature_group!: Sequelize.BelongsToCreateAssociationMixin<feature_group>;

  static initModel(sequelize: Sequelize.Sequelize): typeof feature_group_maping {
    return feature_group_maping.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
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
      defaultValue: false
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
    tableName: 'feature_group_maping',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "feature_group_maping_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
