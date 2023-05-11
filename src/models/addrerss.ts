import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { company, companyId } from './company';

export interface addrerssAttributes {
  id: string;
  name: string;
  address_line?: string;
  city: string;
  state: string;
  country: string;
  pincode: number;
  email: string;
  delete?: boolean;
  is_active?: boolean;
  created_at?: Date;
  updated_at?: Date;
  created_by?: string;
  updated_by?: string;
}

export type addrerssPk = "id";
export type addrerssId = addrerss[addrerssPk];
export type addrerssOptionalAttributes = "id" | "address_line" | "delete" | "is_active" | "created_at" | "updated_at" | "created_by" | "updated_by";
export type addrerssCreationAttributes = Optional<addrerssAttributes, addrerssOptionalAttributes>;

export class addrerss extends Model<addrerssAttributes, addrerssCreationAttributes> implements addrerssAttributes {
  id!: string;
  name!: string;
  address_line?: string;
  city!: string;
  state!: string;
  country!: string;
  pincode!: number;
  email!: string;
  delete?: boolean;
  is_active?: boolean;
  created_at?: Date;
  updated_at?: Date;
  created_by?: string;
  updated_by?: string;

  // addrerss hasMany company via address_id
  companies!: company[];
  getCompanies!: Sequelize.HasManyGetAssociationsMixin<company>;
  setCompanies!: Sequelize.HasManySetAssociationsMixin<company, companyId>;
  addCompany!: Sequelize.HasManyAddAssociationMixin<company, companyId>;
  addCompanies!: Sequelize.HasManyAddAssociationsMixin<company, companyId>;
  createCompany!: Sequelize.HasManyCreateAssociationMixin<company>;
  removeCompany!: Sequelize.HasManyRemoveAssociationMixin<company, companyId>;
  removeCompanies!: Sequelize.HasManyRemoveAssociationsMixin<company, companyId>;
  hasCompany!: Sequelize.HasManyHasAssociationMixin<company, companyId>;
  hasCompanies!: Sequelize.HasManyHasAssociationsMixin<company, companyId>;
  countCompanies!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof addrerss {
    return addrerss.init({
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
    address_line: {
      type: DataTypes.STRING,
      allowNull: true
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pincode: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: "addrerss_email_key"
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
    tableName: 'addrerss',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "addrerss_email_key",
        unique: true,
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "addrerss_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
