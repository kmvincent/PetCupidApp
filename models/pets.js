// Creating sequelize model for pet that adopters want to save for later
module.exports = function (sequelize, DataTypes) {
    var Pet = sequelize.define("Pet", {
        // pet finder id stored here
        pf_id: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        }
    });
// Creating association between pets and adopters through the interest table
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
