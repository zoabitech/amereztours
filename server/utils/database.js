import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('amereztours', 'root', '', {
    dialect: 'mariadb',
    host: 'localhost',
});

// try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
// } catch (error) {
//     console.error('Unable to connect to the database:', error);
// }

export default sequelize;