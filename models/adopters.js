module.exports = function (sequelize, DataTypes) {
  var Adopter = sequelize.define("Adopter", {
    adopter_first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    },
    adopter_last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    },
    adopter_email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    },
    adopter_password: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 140]
      }
    },
  });

  Adopter.associate = function (models) {
    Adopter.belongsToMany(models.Pet,
      {
        through: {
            model: models.Interest,
            unique: false
        },
        foreignKey: 'AdopterId'
    })
  };
  return Adopter;
};