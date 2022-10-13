import { eventModel } from "../../Schema/EventsSchema.js";

export const editevent = (req, res) => {
    eventModel.updateOne(
        { "eventId": req.body.eventId },
        { $set: { "eventName": req.body.eventName ,"eventDescription" :req.body.eventDescription ,"evntImage" :req.body.evntImage, "date" : req.body.date} },
        { upsert: true }, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            return res.send({
                status: 200,
                message: "updated events",
                data: data,
            });   
        }
    })
}