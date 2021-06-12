const axios = require('axios')
const { apiKey: api_key, superGetUrl } = require('../../config');
const qs = require("qs");

const postURL = async (data) => {
  const params = qs.stringify({ ...data, api_key})
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }
  return axios.post(superGetUrl, params, config)
};
module.exports = {
  postURL,
}