import Camper from "../models/camper.js";

async function getCampers(filter, page, limit) {
     try {
    const skip = (page - 1) * limit;
    const contacts = await Camper.find(filter).skip(skip).limit(limit);

    const total = await Camper.countDocuments(filter);
    return {
      total,
      page,
      limit,
      contacts,
    };
  } catch (error) {
       throw error;
  }    
};

async function getCamper(camperId, ownerId) {
    try {
        const camper = await Camper.findOne({ _id: camperId, owner: ownerId });
        return camper;
    } catch (error) {
        throw error;    
    }
};


export default {
    getCampers,
    getCamper
}