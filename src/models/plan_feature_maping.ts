import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { feature, featureId } from './feature';
import type { plan, planId } from './plan';

export interface plan_feature_mapingAttributes {
  id: string;
  plan_id: string;
  feature_id: string;
  limit_count: number;
  is_active?: boolean;
  created_at?: Date;
  updated_at?: Date;
  created_by?: string;
  updated_by?: string;
  is_deleted?: boolean;
}

export type plan_feature_mapingPk = "id";
export type plan_feature_mapingId = plan_feature_maping[plan_feature_mapingPk];
export type plan_feature_mapingOptionalAttributes = "id" | "is_active" | "created_at" | "updated_at" | "created_by" | "updated_by" | "is_deleted";
export type plan_feature_mapingCreationAttributes = Optional<plan_feature_mapingAttributes, plan_feature_mapingOptionalAttributes>;

export class plan_feature_maping extends Model<plan_feature_mapingAttributes, plan_feature_mapingCreationAttributes> implements plan_feature_mapingAttributes {
  id!: string;
  plan_id!: string;
  feature_id!: string;
  limit_count!: number;
  is_active?: boolean;
  created_at?: Date;
  updated_at?: Date;
  created_by?: string;
  updated_by?: string;
  is_deleted?: boolean;

  // plan_feature_maping belongsTo feature via feature_id
  feature!: feature;
  getFeature!: Sequelize.BelongsToGetAssociationMixin<feature>;
  setFeature!: Sequelize.BelongsToSetAssociationMixin<feature, featureId>;
  createFeature!: Sequelize.BelongsToCreateAssociationMixin<feature>;
  // plan_feature_maping belongsTo plan via plan_id
  plan!: plan;
  getPlan!: Sequelize.BelongsToGetAssociationMixin<plan>;
  setPlan!: Sequelize.BelongsToSetAssociationMixin<plan, planId>;
  createPlan!: Sequelize.BelongsToCreateAssociationMixin<plan>;

  static initModel(sequelize: Sequelize.Sequelize): typeof plan_feature_maping {
    return plan_feature_maping.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    plan_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'plans',
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
    limit_count: {
      type: DataTypes.INTEGER,
      allowNull: false
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
    tableName: 'plan_feature_maping',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "plan_feature_maping_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
