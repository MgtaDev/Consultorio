const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Admin = sequelize.define('Admin', {
        id:{
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        correo_electronico: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        contraseña: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        admin: {
          type: DataTypes.BOOLEAN,
          allowNull: true,
          defaultValue: true,
        },

      },
      { tableName: 'admin', timestamps: false }
      );

  return Admin;
};
