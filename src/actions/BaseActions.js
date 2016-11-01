import Top40Dispatcher from '../dispatcher/Top40Dispatcher';
import request from 'superagent';
import jsonp from 'superagent-jsonp';

export default {
  get: (url, actionType, queryObject={}) => {
    request
      .get(url)
      .query(queryObject)
      .end((err, result) => {
        Top40Dispatcher.dispatch({
          actionType: actionType,
          data: result.body
        });
      });
  },

  jsonp: (url, actionType, queryObject={}) => {
    request
      .get(url)
      .use(jsonp)
      .query(queryObject)
      .end((err, result) => {
        // The result is sometimes null
        if (result) {
          Top40Dispatcher.dispatch({
            actionType: actionType,
            data: result
          });
        }
      });
  },

  delete: (url, data, actionType) => {
    request
      .delete(url)
      .end((err, result) => {
        Top40Dispatcher.dispatch({
          actionType: actionType,
          data: result.body
        });
      });
  },

  put: (url, data, actionType) => {
    request
      .get(url)
      .send(data)
      .end((err, result) => {
        Top40Dispatcher.dispatch({
          actionType: actionType,
          data: result.body
        });
      });
  },

  post: (url, data, actionType) => {
    request
      .post(url)
      .send(data)
      .end((err, result) => {
        Top40Dispatcher.dispatch({
          actionType: actionType,
          data: result.body
        });
      });
  }
};
