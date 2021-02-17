import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service session;
  @service fastboot;

  model() {
    if (this.fastboot.isFastBoot) return;

    return this.session.initSession();
  }
}
