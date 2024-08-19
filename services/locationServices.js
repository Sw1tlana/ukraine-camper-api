import Camper from "../models/camper.js";

async function findCampersByLocation(location) {
  try {
    
    const regex = new RegExp(location.trim(), 'i');
    const campers = await Camper.find({ location: regex });

    return campers;
  } catch (error) {
    throw error;
  }
};

export default { findCampersByLocation };