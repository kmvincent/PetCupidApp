module.exports = function (sequelize, DataTypes) {
    var Pet = sequelize.define("Pet", {
        pf_id: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        }
    });

    Pet.associate = function (models) {
        Pet.belongsToMany(models.Adopter,
            {
                through: {
                    model: models.Interest,
                    unique: false
                },
                foreignKey: 'PetId'
            })
    };
    return Pet;
};
