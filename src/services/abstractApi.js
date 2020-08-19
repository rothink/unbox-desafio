import axios from "axios";

export default class AbstractApi {
  /**
   * Método construtor
   * @param url
   */
  constructor(url) {
    this.url = url;
  }

  async getAll(filter = []) {
    try {
      return await axios
        .get(`${this.url}?${filter}`)
        .then(res => {
          return {
            status: true,
            data: res.data
          };
        })
        .catch(err => {
          return {
            status: false,
            error: err.message
          };
        });
    } catch (error) {
      return error;
    }
  }

  async getOne(id) {
    try {
      return await axios
        .get(`${this.url}/${id}`)
        .then(res => {
          return {
            status: true,
            data: res.data
          };
        })
        .catch(err => {
          return {
            status: false,
            error: err.message
          };
        });
    } catch (error) {
      return error;
    }
  }
}
