const axios = require("axios");

const GOOGLE_HOST = "https://maps.googleapis.com/maps/api/geocode/json";
const GOOGLE_KEY = "AIzaSyDBunJ4GXNEC3KJlpoGJO-iB--CjPv4o-s";

const callGeoAPI = async (address) => {
  try {
    const googleAPI = `${GOOGLE_HOST}?key=${GOOGLE_KEY}&address=${address}`;
    let result = await axios.get(googleAPI);
    if (result.data.status === "ZERO_RESULTS") {
      return {
        status: 400,
        message: "Address not found"
      };
    }
    return result.data;
  } catch (error) {
    return error;
  }
};
module.exports = {
  callGeoAPI
};
