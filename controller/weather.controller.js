const { callGeoAPI } = require("../services/callGeoAPI");
const { callDarkSkyAPI } = require("../services/callDarkSkyAPI");

const showInfo = async (address) => {
  try {
    let infor = await callGeoAPI(`${address}`);
    let { results } = infor;
    if (typeof results == "undefined") {
      throw {
        status: 400,
        message: "Address not found"
      };
    }
    let addressDetail = results[0].formatted_address;
    let lat = results[0].geometry.location.lat; // Lattitude
    let lng = results[0].geometry.location.lng; // Longitude
    let data = await callDarkSkyAPI(lat, lng);
    let { summary, temperature, icon } = data.currently;
    return {
      addressDetail,
      summary,
      temperature,
      icon,
      success: true
    };
  } catch (error) {
    let { status, message } = error;
    if (status !== 400) {
      return {
        status: 500,
        message: "Cannot connect to API"
      };
    }
    console.log(error);
    return { status, message };
  }
};
module.exports = {
  showInfo
};
