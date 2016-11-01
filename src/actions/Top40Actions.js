import Top40Constants from '../constants/Top40Constants';
import BaseActions from './BaseActions';

let TOP40_API_URL = 'https://wckb0ftk67.execute-api.eu-west-1.amazonaws.com/dev/singles';
let ITUNES_BASE_URL = 'https://itunes.apple.com/search?';

module.exports = {
  getSingles: () => {
    BaseActions.get(TOP40_API_URL, Top40Constants.SINGLES_GET);
  },

  fetchTrackInfo: (track) => {
    let queryParams = {
      term: `${track.title} ${track.artist}`,
      country: 'US',
      media: 'music',
      entity: 'musicTrack',
      limit: 1
    };
    BaseActions.jsonp(ITUNES_BASE_URL, Top40Constants.TRACK_INFO, track.position, queryParams);
  }
};
