import Sequelize, { Model } from 'sequelize';

class Plan extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        duration: Sequelize.INTEGER,
        price: Sequelize.FLOAT,
        totals: Sequelize.FLOAT,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}
export default Plan;
