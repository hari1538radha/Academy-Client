import { excelToJsonModel } from "../../Schema/excelToJson.js";

const getUniversities = (req, res) => {

    excelToJsonModel.find((err, data) => {
    if (err) {
      console.log(err);
    } else {
      return res.send({
        status: 200,
        message: "Universities details",
        data: data,
      });
    }
  }).limit(25);
};


const postUniversities = (req, res) => {
  excelToJsonModel
    .insertMany(req.body)
    .then(function (response) {
      console.log("Data inserted"); // Success
      return res.send("Data inserted");
    })
    .catch(function (error) {
      console.log(error); // Failure
    });
};


export {
    getUniversities,
    postUniversities
}
