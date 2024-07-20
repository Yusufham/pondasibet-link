import {Sequelize} from "sequelize";
import {db, db2} from "../config/Database.js";

const {DataTypes} = Sequelize;

export const User = db.define('users',{
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING
},{
    freezeTableName:true
});

export const User2 = db2.define('users2',{
    name2: DataTypes.STRING,
    email2: DataTypes.STRING,
    gender2: DataTypes.STRING
},{
    freezeTableName:true
});



(async()=>{
    await db.sync();
})();

(async()=>{
    await db2.sync();
})();
