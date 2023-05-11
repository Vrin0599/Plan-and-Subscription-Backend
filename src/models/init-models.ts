import type { Sequelize } from "sequelize";
import { addrerss as _addrerss } from "./addrerss";
import type { addrerssAttributes, addrerssCreationAttributes } from "./addrerss";
import { company as _company } from "./company";
import type { companyAttributes, companyCreationAttributes } from "./company";

export {
  _addrerss as addrerss,
  _company as company,
};

export type {
  addrerssAttributes,
  addrerssCreationAttributes,
  companyAttributes,
  companyCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const addrerss = _addrerss.initModel(sequelize);
  const company = _company.initModel(sequelize);

  company.belongsTo(addrerss, { foreignKey: "address_id"});
  addrerss.hasMany(company, { foreignKey: "address_id"});

  return {
    addrerss: addrerss,
    company: company,
  };
}
