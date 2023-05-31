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
import { plan_add_on_mapping as _plan_add_on_mapping } from "./plan_add_on_mapping";
import type { plan_add_on_mappingAttributes, plan_add_on_mappingCreationAttributes } from "./plan_add_on_mapping";
import { plan_charge_mapping as _plan_charge_mapping } from "./plan_charge_mapping";
import type { plan_charge_mappingAttributes, plan_charge_mappingCreationAttributes } from "./plan_charge_mapping";
import { plan as _plan } from "./plan";
import type { planAttributes, planCreationAttributes } from "./plan";

export {
  _add_on as add_on,
  _address as address,
  _charge as charge,
  _company as company,
  _feature as feature,
  _feature_group as feature_group,
  _feature_group_maping as feature_group_maping,
  _plan_add_on_mapping as plan_add_on_mapping,
  _plan_charge_mapping as plan_charge_mapping,
  _plan as plan,
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
  plan_add_on_mappingAttributes,
  plan_add_on_mappingCreationAttributes,
  plan_charge_mappingAttributes,
  plan_charge_mappingCreationAttributes,
  planAttributes,
  planCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const add_on = _add_on.initModel(sequelize);
  const address = _address.initModel(sequelize);
  const charge = _charge.initModel(sequelize);
  const company = _company.initModel(sequelize);
  const feature = _feature.initModel(sequelize);
  const feature_group = _feature_group.initModel(sequelize);
  const feature_group_maping = _feature_group_maping.initModel(sequelize);
  const plan_add_on_mapping = _plan_add_on_mapping.initModel(sequelize);
  const plan_charge_mapping = _plan_charge_mapping.initModel(sequelize);
  const plan = _plan.initModel(sequelize);

  plan_add_on_mapping.belongsTo(add_on, { foreignKey: "add_on_id"});
  add_on.hasMany(plan_add_on_mapping, { foreignKey: "add_on_id"});
  company.belongsTo(address, { foreignKey: "address_id"});
  address.hasMany(company, { foreignKey: "address_id"});
  plan_charge_mapping.belongsTo(charge, { foreignKey: "charge_id"});
  charge.hasMany(plan_charge_mapping, { foreignKey: "charge_id"});
  add_on.belongsTo(feature, { foreignKey: "feature_id"});
  feature.hasMany(add_on, { foreignKey: "feature_id"});
  feature_group_maping.belongsTo(feature, { foreignKey: "feature_id"});
  feature.hasMany(feature_group_maping, { foreignKey: "feature_id"});
  add_on.belongsTo(feature_group, { foreignKey: "feature_group_id"});
  feature_group.hasMany(add_on, { foreignKey: "feature_group_id"});
  feature_group_maping.belongsTo(feature_group, { foreignKey: "feature_group_id"});
  feature_group.hasMany(feature_group_maping, { foreignKey: "feature_group_id"});
  plan_add_on_mapping.belongsTo(plan, { foreignKey: "plan_id"});
  plan.hasMany(plan_add_on_mapping, { foreignKey: "plan_id"});
  plan_charge_mapping.belongsTo(plan, { foreignKey: "plan_id"});
  plan.hasMany(plan_charge_mapping, { foreignKey: "plan_id"});

  return {
    add_on: add_on,
    address: address,
    charge: charge,
    company: company,
    feature: feature,
    feature_group: feature_group,
    feature_group_maping: feature_group_maping,
    plan_add_on_mapping: plan_add_on_mapping,
    plan_charge_mapping: plan_charge_mapping,
    plan: plan,
  };
}
