module.exports = function(sequelize, DataTypes) {
    var Buyer = sequelize.define("Buyer", {
      buyer_first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 140]
        }
      },
      buyer_last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 140]
        }
      },
      buyer_email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 140]
        }
      },
      buyer_password: {
        type: DataTypes.STRING,
        validate: {
          len: [1, 140]
        }
      },
    });
    
    // creating a many to many association...I think sequelize will create the join table for us called petBuyers...more info  https://gist.github.com/elliette/20ddc4e827efd9d62bc98752e7a62610
    Buyer.associate = function (models) {
        Buyer.belongsToMany(models.Pet, {
            through: models.PetsBuyers
        });
    };
    return Buyer;
  };