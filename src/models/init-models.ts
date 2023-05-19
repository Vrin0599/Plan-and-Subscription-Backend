import type { Sequelize } from "sequelize";
import { address as _address } from "./address";
import type { addressAttributes, addressCreationAttributes } from "./address";
import { company as _company } from "./company";
import type { companyAttributes, companyCreationAttributes } from "./company";
import { feature as _feature } from "./feature";
import type { featureAttributes, featureCreationAttributes } from "./feature";
import { feature_group as _feature_group } from "./feature_group";
import type { feature_groupAttributes, feature_groupCreationAttributes } from "./feature_group";
import { feature_group_maping as _feature_group_maping } from "./feature_group_maping";
import type { feature_group_mapingAttributes, feature_group_mapingCreationAttributes } from "./feature_group_maping";

export {
  _address as address,
  _company as company,
  _feature as feature,
  _feature_group as feature_group,
  _feature_group_maping as feature_group_maping,
};

export type {
  addressAttributes,
  addressCreationAttributes,
  companyAttributes,
  companyCreationAttributes,
  featureAttributes,
  featureCreationAttributes,
  feature_groupAttributes,
  feature_groupCreationAttributes,
  feature_group_mapingAttributes,
  feature_group_mapingCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const address = _address.initModel(sequelize);
  const company = _company.initModel(sequelize);
  const feature = _feature.initModel(sequelize);
  const feature_group = _feature_group.initModel(sequelize);
  const feature_group_maping = _feature_group_maping.initModel(sequelize);

  company.belongsTo(address, { foreignKey: "address_id"});
  address.hasMany(company, { foreignKey: "address_id"});
  feature_group_maping.belongsTo(feature, { foreignKey: "feature_id"});
  feature.hasMany(feature_group_maping, { foreignKey: "feature_id"});
  feature_group_maping.belongsTo(feature_group, { foreignKey: "feature_group_id"});
  feature_group.hasMany(feature_group_maping, { foreignKey: "feature_group_id"});

  return {
    address: address,
    company: company,
    feature: feature,
    feature_group: feature_group,
    feature_group_maping: feature_group_maping,
  };
}
