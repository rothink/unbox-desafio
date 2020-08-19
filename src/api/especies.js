import AbstractApi from "@/services/abstractApi";

class Especies extends AbstractApi {
  constructor(url) {
    super(url);
  }
}

export default new Especies("species");
