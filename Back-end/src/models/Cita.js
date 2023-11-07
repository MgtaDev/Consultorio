// Relacion uno a muchos con el modelo cita, ya que un usuario puede reservar varias 
// citas pero una cita solo puede ser reservada por un usuario


const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Cita = sequelize.define('Cita', {
        id:{
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        fecha: {
          type: DataTypes.STRING,
          allowNull: false
        },
        hora: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        clienteId: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        medicoId: {
          type: DataTypes.INTEGER,
          allowNull: false
          },
        medico_name: {
          type: DataTypes.STRING,
          allowNull: false
          },
        cliente_name: {
          type: DataTypes.STRING,
          allowNull: false
          },
        estado: {
          type: DataTypes.STRING,
          allowNull: false
        },
        descripcion: {
          type: DataTypes.STRING,
          allowNull: false
        }
    
      },
      { tableName: 'cita',timestamps: false }
      );

      Cita.associate = function(models) {
        Cita.belongsTo(models.Cliente, {
          foreignKey: 'clienteId'
        });
        Cita.belongsTo(models.Medico, {
          foreignKey: 'medicoId'
        });
      };


  return Cita;
};
