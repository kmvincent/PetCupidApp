module.exports = function (sequelize, DataTypes) {
    PetsBuyers = sequelize.define('PetsBuyers', {
        id: {
            type:DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            unique: true
        },
        PetId: {
            type: DataTypes.INTEGER,
            references: {
                model: "Pets",
                key: "id",
            },
            allowNull: false
          },
          BuyerId: {
            type: DataTypes.INTEGER,
            references: {
                model: "Buyers",
                key: "id",
            },
            allowNull: false
          },
        // role: DataTypes.STRING
    });

    return PetsBuyers;
};