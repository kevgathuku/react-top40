import Top40Constants from '../constants/Top40Constants';
import BaseActions from './BaseActions';

let TOP40_API_URL = 'https://wckb0ftk67.execute-api.eu-west-1.amazonaws.com/dev/singles';

module.exports = {
  getSingles: () => {
    BaseActions.get(TOP40_API_URL, Top40Constants.SINGLES_GET);
  }
};
