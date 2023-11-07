// Este modelo tiene una relación muchos a uno tanto con el modelo Usuario 
// como con el modelo Médico.

const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Cliente = sequelize.define('Cliente', {
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
        telefono: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        correo_electronico: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        direccion: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        activa: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: true,
        },
        cedula_identidad: {
          type: DataTypes.STRING,
          allowNull: false
        },



      },
      { tableName: 'cliente',timestamps: false }
      );

      Cliente.associate = function(models) {
        Cliente.hasMany(models.Cita, {
          foreignKey: 'clienteId'
        });
      };

  return Cliente;
};
