const { sequelize } = require('./models');

async function main() {
  await sequelize.drop();
  await sequelize.sync();
}

main();
