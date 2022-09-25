import { model } from "mongoose";
import { excelToJsonModel } from "../Schema/excelToJson.js";

export const execlToJsonCtrl = (req, res) => {
  if (req.body.universityName == 0) {
    res.send("enter the valid data");
  } else {
    const excelToJson = new excelToJsonModel({
      Address: req.body.Address,
      City: req.body.City,
      State: req.body.State,
      PIN: req.body.PIN,
      University_Type: req.body.University_Type,
      Village: req.body.Village,
      Yearof_Establishment: req.body.Yearof_Establishment,
      district: req.body.district,
      location_coordinates: req.body.location_coordinates,
      specialisation: req.body.specialisation,
      uId: req.body.uId,
      universityName: req.body.universityName,
      urbanOrRural: req.body.urbanOrRural,
      url: req.body.url,
    });
    excelToJson.save((err, data) => {
      if (err) {
        res.send("inseretion failed");
      } else {
        res.send("inserion succes");
      }
    });
  }
};
