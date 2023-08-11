import axios from 'axios';

class AuthService {
  basePath;

  constructor() {
    this.basePath = 'Accounts';
  }

  async register(email, code, languageID) {
    const content = { email, code, languageID };

    try {
      const response = await axios.post(`${this.basePath}/LoginWithCode`, content);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default new AuthService();
