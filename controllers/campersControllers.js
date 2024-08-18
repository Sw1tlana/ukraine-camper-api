import mongoose from "mongoose";
import camperServices from "../services/camperServices.js";

export function getAllCampers(req, res, next) {
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

  
export function getOneCamper(req, res, next) {
    const { id } = req.params;

        console.log("Received ID:", id);

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid ObjectId format" });
    }
    
    camperServices
        .getCamper(id)
        .then((camper) => {
            if (camper === null) {
                 console.log("Camper not found");
                return res.status(404).json({ message: "Not found" });
            }
             console.log("Camper found:", camper);
              res.status(200).json(camper);
        })
        .catch((error) => {
            console.error("Error fetching camper:", error); 
            next(error)
        });
};


export function removeFavoriteCamper(req, res, next) {
    const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid ObjectId format" });
    }

    camperServices
        .deleteFavoriteCamper(id)
        .then((camper) => {
                if (camper === null) {
                 console.log("Camper not found");
                return res.status(404).json({ message: "Not found" });
            }
            res.status(200).json(camper);
        })
    .catch((err) => next(err));
};


export function addFavoriteCamper(req, res, next) {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid ObjectId format" });
    }

    camperServices
        .favoriteCamper(id)
        .then((camper) => {
            if (camper === null) {
                console.log("Camper not found");
                return res.status(404).json({ message: "Not found" });
            }
            res.status(200).json({ message: "Camper added to favorites", camper });
        })
        .catch((err) => next(err));
};
    
