const findAll = async (Model, params) => Model.findAll({ attributes: params });
const findByPk = async (Model, pk, params) => Model.findByPk(pk, { attributes: params });

module.exports = { findAll, findByPk };
