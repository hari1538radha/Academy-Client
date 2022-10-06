import { excelToJsonModel } from "../Schema/excelToJson.js";

export const execlToJsonCtrl = (req, res) => {
  console.log(req.body)
  excelToJsonModel.insertMany(req.body).then(function(response){
    console.log("Data inserted")  // Success
    return res.send("Data inserted")
}).catch(function(error){
    console.log(error)      // Failure
});
};
  // const { 
  //         Address, 
  //         City, 
  //         State,
  //         PIN, 
  //         University_Type,
  //         Village, Yearof_Establishment,
  //         district,
  //         location_coordinates,
  //         specialisation,
  //         uId,
  //         universityName,
  //         urbanOrRural,
  //         url
  //       } = req.body

  // if (req.body.universityName == 0) {
  //   res.send("enter the valid data");
  // } else {
  //   const excelToJson = new excelToJsonModel({
  //     Address,
  //     City,
  //     State,
  //     PIN,
  //     University_Type,
  //     Village,
  //     Yearof_Establishment,
  //     district,
  //     location_coordinates,
  //     specialisation,
  //     uId,
  //     universityName,
  //     urbanOrRural,
  //     url,
  //   });
  // req.body.foreach((item) => {
  //   const excelToJson = new excelToJsonModel(item)
  //   excelToJson.insertMany([
  //     req
  // ]).then(function(){
  //     console.log("Data inserted")  // Success
  // }).catch(function(error){
  //     console.log(error)      // Failure
  // });
  // })
  //   excelToJson.save((err, data) => {
  //     if (err) {
  //       res.send("inseretion failed");
  //     } else {
  //       res.send({
  //         status: 200,
  //         message: "success",
  //         data: data,
  //       });
  //     }
  //   });
  // }

