import { eventModel } from "../Schema/topEventsSchema.js";

export const events = (req, res) => {
    eventModel.find((err, data) => {
        if (err) {
            console.log(err);
        } else {
            return res.send({
                status: 200,
                message: "places found",
                data: data,
            });
        }
    })
};
