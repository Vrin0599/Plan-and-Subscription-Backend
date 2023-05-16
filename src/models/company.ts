import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { addrerss, addrerssId } from './addrerss';

export interface companyAttributes {
  id: string;
  name: string;
  website?: string;
  logo?: string;
  address_id?: string;
  delete?: boolean;
  is_active?: boolean;
  created_at?: Date;
  updated_at?: Date;
  created_by?: string;
  updated_by?: string;
}

export type companyPk = "id";
export type companyId = company[companyPk];
export type companyOptionalAttributes = "id" | "website" | "logo" | "address_id" | "delete" | "is_active" | "created_at" | "updated_at" | "created_by" | "updated_by";
export type companyCreationAttributes = Optional<companyAttributes, companyOptionalAttributes>;

export class company extends Model<companyAttributes, companyCreationAttributes> implements companyAttributes {
  id!: string;
  name!: string;
  website?: string;
  logo?: string;
  address_id?: string;
  delete?: boolean;
  is_active?: boolean;
  created_at?: Date;
  updated_at?: Date;
  created_by?: string;
  updated_by?: string;

  // company belongsTo addrerss via address_id
  address!: addrerss;
  getAddress!: Sequelize.BelongsToGetAssociationMixin<addrerss>;
  setAddress!: Sequelize.BelongsToSetAssociationMixin<addrerss, addrerssId>;
  createAddress!: Sequelize.BelongsToCreateAssociationMixin<addrerss>;

  static initModel(sequelize: Sequelize.Sequelize): typeof company {
    return company.init({
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
    website: {
      type: DataTypes.STRING,
      allowNull: true
    },
    logo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    address_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'addrerss',
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
    tableName: 'company',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "company_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
