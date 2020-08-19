import AbstractApi from "@/services/abstractApi";

class Filmes extends AbstractApi {
  constructor(url) {
    super(url);
  }
}

export default new Filmes("films");
