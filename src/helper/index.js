export default {
  /**
   * Retorna apenas o ID
   * @param url
   * @returns {string}
   */
  getIdByUrl(url) {
    url = url.substring(0, url.length - 1);
    return url.substring(url.lastIndexOf("/") + 1);
  },
  /**
   * Arruma a url nesse formato
   * url/&page=2
   * @param data
   * @returns {string}
   */
  getFilterURL(data) {
    let url = "";
    if (data) {
      Object.keys(data).forEach(function(key) {
        if (data[key]) {
          url += data[key] ? "&" + key + "=" + encodeURI(data[key]) : "";
        }
      });
    }
    return url;
  },
  /**
   * Orderna o array pelo nome
   * @param arr
   * @returns {*}
   */
  sortArrayObject(arr) {
    return arr.sort((a, b) => {
      const nomeA = a.name.toUpperCase();
      const nomeB = b.name.toUpperCase();
      if (nomeA === nomeB) {
        return 0;
      } else if (nomeA < nomeB) {
        return -1;
      } else {
        return 1;
      }
    });
  },
  /**
   * Faz o filtro pelo search
   * @param filter
   * @param arr
   * @returns {*}
   */
  filterArrayObject(filter, arr) {
    if (filter) {
      return arr.filter(el => {
        const nomeA = el.name.toUpperCase();
        const nomeB = filter.name.toUpperCase();
        return nomeA.includes(nomeB);
      });
    }
    return arr;
  }
};
