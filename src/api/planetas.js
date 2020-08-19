import AbstractApi from "@/services/abstractApi";

class Planetas extends AbstractApi {
  constructor(url) {
    super(url);
  }
}

export default new Planetas("planets");
