import AbstractApi from "@/services/abstractApi";

class Pessoas extends AbstractApi {
  constructor(url) {
    super(url);
  }
}

export default new Pessoas("people");
