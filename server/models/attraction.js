import { Sequelize } from 'sequelize';

import sequelize from '../utils/database.js';

const Attraction = sequelize.define('attractions', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    location: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    gusts: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    avg_rating: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    images: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    start_Date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
    },
    end_Date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
    }
});

export default Attraction;