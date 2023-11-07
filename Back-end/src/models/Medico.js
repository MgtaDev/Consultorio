const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Medico = sequelize.define('Medico', {
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
        especialidad: {
          type: DataTypes.STRING,
          allowNull: false
        },
        activa: {
          type: DataTypes.BOOLEAN,
          allowNull: false
        }
    
      },
      { tableName: 'medico',timestamps: false }
      );
      Medico.associate = function(models) {
        Medico.hasMany(models.Cita, {
          foreignKey: 'medicoId'
        });
      };

  return Medico;
};
