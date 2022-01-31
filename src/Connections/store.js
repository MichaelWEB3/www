import axios from "axios";
import { baseUrl } from "./consts";
import User from "../Connections/user";

class Store {
  user = new User();

  async sendToKart(value) {
    const kart = localStorage.getItem("@kart");

    if (kart) {
      let arr = kart.split(",");
      arr.push(value);
      localStorage.setItem("@kart", arr);
    } else {
      let arr = [];
      arr.push(value);
      localStorage.setItem("@kart", arr);
    }
  }

  async getFromKart() {
    const kart = localStorage.getItem("@kart");

    if (kart) {
      const arr = kart.split(",");

      return arr;
    }
  }

  async removeFromKart(value) {
    const kart = localStorage.getItem("@kart");

    const arr = kart.split(",");

    const filtered = arr.filter((e) => {
      return e !== value;
    });

    localStorage.setItem("@kart", filtered);
  }

  async finishKart() {
    const kart = localStorage.getItem("@kart");

    const arr = kart.split(",");

    const url = `${baseUrl}/kart`;
    return await axios.post(url, arr, await this.user.headerConfig());
  }
}
export default Store;
