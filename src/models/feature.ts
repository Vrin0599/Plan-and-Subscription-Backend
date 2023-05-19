import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { feature_group_maping, feature_group_mapingId } from './feature_group_maping';

export interface featureAttributes {
  id: string;
  name: string;
  delete?: boolean;
  is_active?: boolean;
  created_at?: Date;
  updated_at?: Date;
  created_by?: string;
  updated_by?: string;
}

export type featurePk = "id";
export type featureId = feature[featurePk];
export type featureOptionalAttributes = "id" | "delete" | "is_active" | "created_at" | "updated_at" | "created_by" | "updated_by";
export type featureCreationAttributes = Optional<featureAttributes, featureOptionalAttributes>;

export class feature extends Model<featureAttributes, featureCreationAttributes> implements featureAttributes {
  id!: string;
  name!: string;
  delete?: boolean;
  is_active?: boolean;
  created_at?: Date;
  updated_at?: Date;
  created_by?: string;
  updated_by?: string;

  // feature hasMany feature_group_maping via feature_id
  feature_group_mapings!: feature_group_maping[];
  getFeature_group_mapings!: Sequelize.HasManyGetAssociationsMixin<feature_group_maping>;
  setFeature_group_mapings!: Sequelize.HasManySetAssociationsMixin<feature_group_maping, feature_group_mapingId>;
  addFeature_group_maping!: Sequelize.HasManyAddAssociationMixin<feature_group_maping, feature_group_mapingId>;
  addFeature_group_mapings!: Sequelize.HasManyAddAssociationsMixin<feature_group_maping, feature_group_mapingId>;
  createFeature_group_maping!: Sequelize.HasManyCreateAssociationMixin<feature_group_maping>;
  removeFeature_group_maping!: Sequelize.HasManyRemoveAssociationMixin<feature_group_maping, feature_group_mapingId>;
  removeFeature_group_mapings!: Sequelize.HasManyRemoveAssociationsMixin<feature_group_maping, feature_group_mapingId>;
  hasFeature_group_maping!: Sequelize.HasManyHasAssociationMixin<feature_group_maping, feature_group_mapingId>;
  hasFeature_group_mapings!: Sequelize.HasManyHasAssociationsMixin<feature_group_maping, feature_group_mapingId>;
  countFeature_group_mapings!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof feature {
    return feature.init({
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
    tableName: 'feature',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "feature_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
