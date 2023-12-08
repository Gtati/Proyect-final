import { Sequelize } from 'sequelize-typescript';

export const sequelize = new Sequelize ({
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '1234',
    database: 'bd_carlos'
});