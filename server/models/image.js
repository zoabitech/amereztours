import { Sequelize } from 'Sequelize';
import sequelize from '../utils/database.js';

const Image = sequelize.define('images', {
    id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    link: {
        allowNull: false,
        type: Sequelize.STRING
    },
    attractionId: {
        allowNull: true,
        type: Sequelize.INTEGER
    },
    vehicleId: {
        allowNull: true,
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false
}
);

export default Image;

