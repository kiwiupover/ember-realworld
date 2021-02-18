import Route from '@ember/routing/route';

export default class IndexRoute extends Route {

  model() {
    return this.store.query('article', {
      limit: 10,
      offset: 0,
    });
  }

  queryParams = {
    feed: {
      refreshModel: true,
    },
    page: {
      refreshModel: true,
    },
    tag: {
      refreshModel: true,
    },
  };
}
