import { RESTDataSource } from '@apollo/datasource-rest';

export class TrackAPI extends RESTDataSource {
  // the zugzwang catalog is hosted on this server
  baseURL = 'https://odyssey-lift-off-rest-api.herokuapp.com/';

  getTracksForHome() {
    return this.get('tracks');
  }

  getModule(moduleId) {
    return this.get(`module/${moduleId}`)
  }

  getAuthor(authorId) {
    return this.get(`author/${authorId}`);
  }

  getTrack(trackId) {
    return this.get(`track/${trackId}`);
  }

  getTrackModules(trackId) {
    return this.get(`track/${trackId}/modules`);
  }
}
