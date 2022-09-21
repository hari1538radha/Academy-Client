import React from 'react'
import {utils,read} from "xlsx"



const userdata = () => {
    const readUploadFile = (e) =>
{
    e.preventDefault();
    console.log(e.target.files)
    if (e.target.files) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const data = e.target.result;
            const workbook = read(data, { type: "array" });
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const json = utils.sheet_to_json(worksheet);
           
            const datas = json 
            console.log(datas[0])

}
reader.readAsArrayBuffer(e.target.files[0]);
}


}
  return (
    <div>
        <input type="file" name='upload'id='upload' onChange={readUploadFile}></input>
    </div>
  )


}
export default userdata