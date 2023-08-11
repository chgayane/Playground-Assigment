import { request } from './RequestService';

class FetchService {
  constructor() {
    this.baseUrl = '/api';
  }

  async get(path, params = {}, token = '') {
    return request(`${this.baseUrl}/${path}`, 'GET', params, token);
  }

  async post(path, body, params, token = '') {
    return request(`${this.baseUrl}/${path}`, 'POST', params, token, body);
  }

  async delete(path, params = {}, token = '') {
    return request(`${this.baseUrl}/${path}`, 'DELETE', params, token);
  }

  async put(path, body, params = {}, token = '') {
    return request(`${this.baseUrl}/${path}`, 'PUT', params, token, body);
  }
}

export default new FetchService();
