// Creating interest table that saves instances of adopters "saving" pets
module.exports = function (sequelize, DataTypes) {
    Interest = sequelize.define('Interest', {
        PetId: {
            type: DataTypes.INTEGER,
            allowNull: false
          },
          AdopterId: {
            type: DataTypes.INTEGER,
            allowNull: false
          },
    });

    return Interest;
};