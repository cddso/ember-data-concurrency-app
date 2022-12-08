import RESTAdapter from '@ember-data/adapter/rest';

export default class ApplicationAdapter extends RESTAdapter {
  host = 'https://jsonplaceholder.typicode.com';

  handleResponse(store, primaryModelClass, payload, id, requestType) {
    payload = { todos: payload };
    return super.handleResponse(
      store,
      primaryModelClass,
      payload,
      id,
      requestType
    );
  }
}
