import axios from "axios";
import { baseUrl } from "./consts";

class User {
  async Register(value) {
    const url = `${baseUrl}/signup`;
    return await axios.post(url, value);
  }

  async Login(value) {
    const url = `${baseUrl}/signin`;

    return await axios.post(url, value);
  }

  async Google(token) {
    const url = `${baseUrl}/google/signin`;
    return await axios.post(url, token);
  }

  async Facebook(token) {
    const url = `${baseUrl}/facebook/signin`;
    return await axios.post(url, token);
  }

  async me() {
    const url = `${baseUrl}/me`;
    return await axios.get(url, await this.headerConfig());
  }

  isLogged() {
    const token = this.getToken();
    if (!token) {
      return false;
    } else {
      return true;
    }
  }

  signOut() {
    localStorage.removeItem("@user");
    return true;
  }

  getUser() {
    const user = JSON.parse(localStorage.getItem("@user"));
    return user;
  }

  async getServerUser() {
    const url = `${baseUrl}/me`;
    const options = await this.headerConfig();

    try {
      const { data } = await axios.get(url, options);
      return data;
    } catch (e) {
      throw e;
    }
  }

  getToken() {
    let user = this.getUser();
    if (user) {
      let token = user.token;
      return token;
    } else {
      return null;
    }
  }

  async headerConfig() {
    const token = this.getToken();
    return {
      headers: { Authorization: `Bearer ${token}` },
    };
  }

  async tokenVerify() {
    const user = await this.getUser();
    const token = user.token;
    return token;
  }

  async userHasChannel() {
    const received = await this.me();

    if (received.data.channel) {
      return true;
    } else {
      return false;
    }
  }

  async ableToCreateChannel() {
    const received = await this.me();

    const channelId = received.data.channel.key;

    if (received.data.role === "superadmin" || received.data.role === "admin" || received.data.role === "partner") {
      return { status: true, channel: channelId };
    } else {
      return false;
    }
  }
}
export default User;
