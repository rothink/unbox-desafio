import AbstractApi from "@/services/abstractApi";

class Veiculos extends AbstractApi {
  constructor(url) {
    super(url);
  }
}

export default new Veiculos("vehicles");
