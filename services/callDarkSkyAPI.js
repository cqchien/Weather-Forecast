const axios = require("axios");

const DARKSKY_HOST = "https://api.darksky.net/forecast";
const DARKSKY_KEY = "f73b9ff2f578f9d0f49370e2260d293d";

const callDarkSkyAPI = async (lat, lng) => {
  try {
    const DarkSkyAPI = `${DARKSKY_HOST}/${DARKSKY_KEY}/${lat},${lng}`;
    let results = await axios.get(DarkSkyAPI);
    return results.data;
  } catch (error) {
    return error;
  }
};
 module.exports = {
   callDarkSkyAPI
 }
