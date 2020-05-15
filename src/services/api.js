import axios from 'axios';
import md5 from 'md5';
import { toast } from 'react-toastify';

const api = axios.create({
  baseURL: 'https://gateway.marvel.com:443/v1/public',
});

class Heroes {
  constructor() {
    this.timestamp = Number(new Date());
    this.publicKey = '3188e31e20f58598e6092f23c96ea3d1';
    this.privateKey = '1e3f01d0a43d1993b305911ec15531a2bb638f30';
    this.hash = md5(this.timestamp + this.privateKey + this.publicKey);
  }

  getAllHeroes = async (page) => {
    try {
      const response = await api.get(
        `/characters?ts=${this.timestamp}&apikey=${this.publicKey}&hash=${this.hash}`,
        {
          params: {
            limit: '20',
            offset: page,
          },
        }
      );
      return response.data.data.results;
    } catch (err) {
      toast.error('Ocorreu um erro, tente novamente mais tarde.');
      throw err;
    }
  };

  getCharactersName = async (nameStartsWith) => {
    try {
      const response = await api.get(
        `/characters?ts=${this.timestamp}&apikey=${this.publicKey}&hash=${this.hash}`,
        {
          params: {
            nameStartsWith,
          },
        }
      );
      return response.data.data.results;
    } catch (err) {
      toast.error('Ocorreu um erro, tente novamente mais tarde.');
      throw err;
    }
  };
}

export default new Heroes();
