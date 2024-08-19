import Camper from "../models/camper.js";

async function getCampers(filter, page, limit) {
     try {
    const skip = (page - 1) * limit;
    const campers = await Camper.find(filter).skip(skip).limit(limit);

    const total = await Camper.countDocuments(filter);
    return {
      total,
      page,
      limit,
      campers,
    };
  } catch (error) {
       throw error;
  }    
};

async function getCamper(camperId) {
    try {
      const camper = await Camper.findById(camperId);
    
        return camper;
    } catch (error) {
        throw error;    
    }
};

async function favoriteCamper(id) {
    try {
        const camper = await Camper.findById(id);
        if (!camper) {
            return null;
        }
        camper.isFavorite = true; 
        await camper.save();
      
      return camper;
      
    } catch (error) {
      throw error;
    }
}

async function deleteFavoriteCamper(id) {

    try {
        const camper = await Camper.findById(id);
        if (!camper) {
            return null;
      }
      
      camper.isFavorite = false; 
      await camper.save();
      return camper;
      
    } catch (error) {
        throw error;
    }
  
};

export default {
  getCampers,
  getCamper,
  favoriteCamper,
  deleteFavoriteCamper
}