import { Sequelize } from "sequelize";

export const db = new Sequelize('crud_db', 'root','',{
    host: 'localhost',
    dialect: 'mysql'
});

export const db2 = new Sequelize('crud_db', 'root','',{
    host: 'localhost',
    dialect: 'mysql'
});


