import type { Sequelize } from "sequelize";
import { add_on as _add_on } from "./add_on";
import type { add_onAttributes, add_onCreationAttributes } from "./add_on";
import { address as _address } from "./address";
import type { addressAttributes, addressCreationAttributes } from "./address";
import { charge as _charge } from "./charge";
import type { chargeAttributes, chargeCreationAttributes } from "./charge";
import { company as _company } from "./company";
import type { companyAttributes, companyCreationAttributes } from "./company";
import { feature as _feature } from "./feature";
import type { featureAttributes, featureCreationAttributes } from "./feature";
import { feature_group as _feature_group } from "./feature_group";
import type { feature_groupAttributes, feature_groupCreationAttributes } from "./feature_group";
import { feature_group_maping as _feature_group_maping } from "./feature_group_maping";
import type { feature_group_mapingAttributes, feature_group_mapingCreationAttributes } from "./feature_group_maping";

export {
  _add_on as add_on,
  _address as address,
  _charge as charge,
  _company as company,
  _feature as feature,
  _feature_group as feature_group,
  _feature_group_maping as feature_group_maping,
};

export type {
  add_onAttributes,
  add_onCreationAttributes,
  addressAttributes,
  addressCreationAttributes,
  chargeAttributes,
  chargeCreationAttributes,
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
  const add_on = _add_on.initModel(sequelize);
  const address = _address.initModel(sequelize);
  const charge = _charge.initModel(sequelize);
  const company = _company.initModel(sequelize);
  const feature = _feature.initModel(sequelize);
  const feature_group = _feature_group.initModel(sequelize);
  const feature_group_maping = _feature_group_maping.initModel(sequelize);

  company.belongsTo(address, { foreignKey: "address_id"});
  address.hasMany(company, { foreignKey: "address_id"});
  add_on.belongsTo(feature, { foreignKey: "feature_id"});
  feature.hasMany(add_on, { foreignKey: "feature_id"});
  feature_group_maping.belongsTo(feature, { foreignKey: "feature_id"});
  feature.hasMany(feature_group_maping, { foreignKey: "feature_id"});
  add_on.belongsTo(feature_group, { foreignKey: "feature_group_id"});
  feature_group.hasMany(add_on, { foreignKey: "feature_group_id"});
  feature_group_maping.belongsTo(feature_group, { foreignKey: "feature_group_id"});
  feature_group.hasMany(feature_group_maping, { foreignKey: "feature_group_id"});

  return {
    add_on: add_on,
    address: address,
    charge: charge,
    company: company,
    feature: feature,
    feature_group: feature_group,
    feature_group_maping: feature_group_maping,
  };
}
