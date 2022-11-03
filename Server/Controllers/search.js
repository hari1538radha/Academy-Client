import { excelToJsonModel } from "../Schema/excelToJson.js";

export const searchData = (req, res) => {
    excelToJsonModel.findOne({ Name_1 : req.query.Name }, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        if (data) {
          return res.send({
            status: 200,
            message: "college found",
            data: data,
          });
        } else {
          return res.send({
            status: 404,
            message: "college not found",
          });
        }
      }
    });
  };
  