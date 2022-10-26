// import { excelToJsonModel } from "../../Schema/excelToJson.js";
import GenerateSchema from 'generate-schema';
import mongoose from "mongoose" ;

const postUniversities = (req, res) => {
  // excelToJsonModel
  //   .insertMany(req.body)
  //   .then(function (response) {
  //     return res.send("Data inserted");
  //   })
  //   .catch(function (error) {
  //     console.log(error); // Failure
  //   });

    let schema = GenerateSchema.json("universities", req.body[0])
    const universitiesModel = mongoose.model("universities", schema.properties);

    universitiesModel.insertMany(req.body)
    .then(function (response) {
        console.log("Data inserted"); // Success
        return res.send("Data inserted");
    })
    .catch(function (error) {
        console.log(error); // Failure
    });
}

const getUniversities = (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  excelToJsonModel
    .find((err, data) => {
      if (err) {
        console.log(err);
      } else {
        return res.send({
          status: 200,
          message: "Universities details",
          data: data,
        });
      }
    })
    .limit(limit * 1)
    .skip((page - 1) * limit);
};

export { getUniversities, postUniversities };
