import axios from "axios";
import { baseUrl } from "./consts";
import User from "../Connections/user";

class ChannelUtils {
  user = new User();

  async createChannel(value) {
    const url = `${baseUrl}/channel`;
    return await axios.post(url, value, await this.user.headerConfig());
  }

  async getChannel(value) {
    let url = "";
    value
      ? (url = `${baseUrl}/channel/${value}`)
      : (url = `${baseUrl}/channel`);
    return await axios.get(url, await this.user.headerConfig());
  }

  async deleteChannel() {
    const url = `${baseUrl}/channel`;
    return await axios.delete(url, await this.user.headerConfig());
  }

  async channelTeaser(value, showUpload) {
    const url = `${baseUrl}/channel/teaser`;
    return await axios.post(url, value, {
      headers: { Authorization: `Bearer ${await this.user.getToken()}` },
      onUploadProgress: (e) => {
        const progress = parseInt(Math.round((e.loaded * 100) / e.total));
        showUpload(progress);
      },
    });
  }

  async channelThumbnail(value, showUpload) {
    const url = `${baseUrl}/channel/thumbnail`;
    return await axios.post(url, value, {
      headers: { Authorization: `Bearer ${await this.user.getToken()}` },
      onUploadProgress: (e) => {
        const progress = parseInt(Math.round((e.loaded * 100) / e.total));
        showUpload(progress);
      },
    });
  }

  async createTeaser(value, showUpload) {
    const url = `${baseUrl}/contents/teaser`;
    return await axios.post(url, value, {
      headers: { Authorization: `Bearer ${await this.user.getToken()}` },
      onUploadProgress: (e) => {
        const progress = parseInt(Math.round((e.loaded * 100) / e.total));
        showUpload(progress);
      },
    });
  }

  async updateTeaser(value, id, showUpload) {
    const url = `${baseUrl}/contents/teaser?id=${id}`;
    return await axios.post(url, value, {
      headers: { Authorization: `Bearer ${await this.user.getToken()}` },
      onUploadProgress: (e) => {
        const progress = parseInt(Math.round((e.loaded * 100) / e.total));
        showUpload(progress);
      },
    });
  }

  async createVideo(value, id, showUpload) {
    const url = `${baseUrl}/contents/upload?id=${id}`;
    return await axios.post(url, value, {
      headers: { Authorization: `Bearer ${await this.user.getToken()}` },
      onUploadProgress: (e) => {
        const progress = parseInt(Math.round((e.loaded * 100) / e.total));
        showUpload(progress);
      },
    });
  }

  async createBanner(value, id, showUpload) {
    const url = `${baseUrl}/contents/thumbnail?id=${id}`;
    return await axios.post(url, value, {
      headers: { Authorization: `Bearer ${await this.user.getToken()}` },
      onUploadProgress: (e) => {
        const progress = parseInt(Math.round((e.loaded * 100) / e.total));
        showUpload(progress);
      },
    });
  }

  async createShow(value, id) {
    const url = `${baseUrl}/contents/${id}`;
    return await axios.post(url, value, {
      headers: { Authorization: `Bearer ${await this.user.getToken()}` },
    });
  }

  async getContent(id) {
    let url = "";

    id
      ? (url = `${baseUrl}/contents?content_id=${id}`)
      : (url = `${baseUrl}/contents`);

    return await axios.get(url, await this.user.headerConfig());
  }

  async deleteContent(id) {
    const url = `${baseUrl}/contents/${id}`;
    return await axios.delete(url, await this.user.headerConfig());
  }

  async sendSession(value) {
    const url = `${baseUrl}/sections`;
    return await axios.post(url, value, await this.user.headerConfig());
  }
}

export default ChannelUtils;
