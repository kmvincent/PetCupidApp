module.exports = function (sequelize, DataTypes) {
    var Pet = sequelize.define("Pet", {
        animal_type: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        },
        animal_breed: {
            type: DataTypes.STRING,
            validate: {
                len: [1, 140]
            }
        },
        animal_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        },
        animal_sex: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 6]
            }
        },
        animal_size: {
            type: DataTypes.STRING,
            validate: {
                len: [1, 140]
            }
        },
    });
// creating a many to many association...I think sequelize will create the join table for us called petBuyers...more info  https://gist.github.com/elliette/20ddc4e827efd9d62bc98752e7a62610
    Pet.associate = function (models) {
        Pet.belongsToMany(models.Buyer, {
            through: PetBuyer
        });
    };
    return Pet;
};