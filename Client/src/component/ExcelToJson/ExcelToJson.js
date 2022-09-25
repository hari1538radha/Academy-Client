import React from 'react'
import { utils, read } from "xlsx"
import S3FileUpload from 'react-s3';
import { useDispatch, useSelector } from "react-redux";
import excelToJson from "../../Store/Slice/ExcelToJson";

window.Buffer = window.Buffer || require("buffer").Buffer;

const Userdata = () => {
  const dispatch = useDispatch();
  const readUploadFile = (e) => {
    e.preventDefault();
    console.log(e.target.files)
    if (e.target.files) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target.result;
        const workbook = read(result, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const json = utils.sheet_to_json(worksheet);

        const data = json[0]
        dispatch(excelToJson(data));

      }

      reader.readAsArrayBuffer(e.target.files[0]);

    }
  }
   const onFileChange = (file) =>{
console.log(file);
    
  
  // const config = {
  
  //                 bucketName:"academyaws",
  
  
  //                 region:"us-west-1",
  
  //                 accessKeyId: ""	,
  
  //                 secretAccessKey:""
  
  //            }
  
  //   //upload file to s3
  
  // S3FileUpload.uploadFile(file, config)
  
  //             .then((data)=>{
  
  //                   console.log(data.location);// it return the file url
  
  //              })
  
  //              .catch((err) =>{
  
  //               console.log(err)
  
  //               });
  
  }
  
  return (
    <div>
      <input type="file" name='upload' id='upload' onChange={readUploadFile}></input>
      <input type="file" onChange={onFileChange} />
    </div>
  )

}
export default Userdata