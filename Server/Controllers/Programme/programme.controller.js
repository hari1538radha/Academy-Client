import { programSchemaModel } from "../../Schema/ProgramSchema.js";

const getProgramme = (req, res) => {
  programSchemaModel.find((err, data) => {
    if (err) {
      console.log(err);
    } else {
      return res.send({
        status: 200,
        message: "Programme details",
        data: data,
      });
    }
  }).limit(25);
};


const postProgramme = (req, res) => {
  programSchemaModel
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
    getProgramme,
    postProgramme
}
