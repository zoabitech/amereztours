import { Sequelize } from 'Sequelize';

import sequelize from '../utils/database.js';
import Image from '../models/image.js'
const attraction = sequelize.define('attractions', {
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
    guests: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    start_Date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
    },
    end_Date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
    },
}, {
    timestamps: false
});

export default attraction;

attraction.hasMany(Image, { as: "images" })

Image.belongsTo(attraction, {
    foreignKey: "attractionId",
    as: "attraction"
})