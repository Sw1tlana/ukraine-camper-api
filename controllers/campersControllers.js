import camperServices from "../services/camperServices.js";
import { isValidObjectId } from "mongoose";

async function getAllCampers(req, res, next) {
    let { page = 1, limit = 20, favorite } = req.query;
    
    page = parseInt(page, 10);
    limit = parseInt(limit, 10);

    const filter = {};

    camperServices
    .getCampers(filter, page, limit)
    .then((data) => {
    res.status(200).json(data);
    })
    .catch((err) => next(err));
};
  
async function getOneCamper(req, res, next) {
    const { id } = req.prams;

    camperServices
        .getCamper(id, req.body.id)
        .then((camper) => {
            if (camper === null) {
                return res.status(404).json({ message: "Not found" });
            }
              res.status(200).json(contact);
        })
     .catch((err) => next(err));
};

    


export default {
    getAllCampers,
    getOneCamper
}