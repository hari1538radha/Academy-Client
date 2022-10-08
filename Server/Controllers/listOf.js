import { ListOfProgramme } from "../Schema/listOf.js";

export const listofPrograms = (req, res) => {
    ListOfProgramme.insertMany(req.body).then((resp) => {
        console.log("data is inserted")
        res.send(resp)
    }).catch((err) => {
        console.log(err)
    })
}