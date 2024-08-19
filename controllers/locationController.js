import camperServices from "../services/locationServices.js";

export function searchCampersByLocation(req, res, next) {
    const { location } = req.query;

        if (!location || typeof location !== 'string') {
        return res.status(400).json({ message: "Location is required" });
    }

    camperServices
    .findCampersByLocation(location)
        .then((camper) => {
            if (camper.length === 0) {
             return res.status(404).json({ message: "No campers found in this location" });
            }
            res.status(200).json(camper)
        })
    .catch((err) => next(err));
};