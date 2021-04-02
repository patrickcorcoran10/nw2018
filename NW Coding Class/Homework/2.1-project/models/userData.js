// Dependencies

module.exports = function (sequelize, DataTypes) {
var Member = sequelize.define("member", {
    restaurant_id: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      restaurant_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
      },
      restaurant_cost: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: false
      },
      restaurant_type: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
      },
      restaurant_image: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
      },
      restaurant_zip: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: false
      }, 
      restaurant_rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: false
      }
});

Member.associate = function(models) {

    Member.belongsTo(models.Login, {
        foreignKey: {
            allowNull: false
        }
    });
};

return Member;

Member.sync();

};

