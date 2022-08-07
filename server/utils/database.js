import { Sequelize } from 'sequelize';

// connection with oline database
// const sequelize = new Sequelize('user4617DB', 'user4617DB_user', '12345678', {
//     dialect: 'mariadb',
//     host: 'petacil.org',
// });


//connection with localhost database
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