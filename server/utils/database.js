import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('loginDB', 'root', '', {
    dialect: 'mysql',
    host: 'localhost',
});

export default sequelize;