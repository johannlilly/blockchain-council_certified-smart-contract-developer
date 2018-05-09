var Migrations = artifacts.require("./todo.sol");

module.exports = function(deployer) {
  deployer.deploy(ToDo);
};
