module.exports = function (sequelize, DataTypes) {
    Interest = sequelize.define('Interest', {
        // id: {
        //     type:DataTypes.INTEGER,
        //     primaryKey: true,
        //     allowNull: false,
        //     autoIncrement: true,
        //     unique: true
        // },
        PetId: {
            type: DataTypes.INTEGER,
            // references: {
            //     model: "Pets",
            //     key: "id",
            // },
            allowNull: false
          },
          AdopterId: {
            type: DataTypes.INTEGER,
            // references: {
            //     model: "Adopter",
            //     key: "id",
            // },
            allowNull: false
          },
    });

    return Interest;
};