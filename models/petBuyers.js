module.exports = function (sequelize, DataTypes) {
    PetBuyer = sequelize.define('PetBuyer', {
        role: DataTypes.STRING
    });

    return PetBuyer;
};