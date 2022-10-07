import React, { useState } from "react";
import Table from "rc-table";
import { Link } from "react-router-dom";
import { utils, read } from "xlsx";
import NavBar from "../Navbar/navbar";
import Footer from "../Footer/footer";
import { useDispatch, useSelector } from "react-redux";
import { postUniversities } from "../../Store/Slice/ExcelToJson";
import { postProgramme } from "../../Store/Slice/postProgramme";
import { useNavigate } from "react-router-dom";
import "./exceltojson.css";

window.Buffer = window.Buffer || require("buffer").Buffer;

const PostUniversity = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [message, setMessage] = useState();
  const [fileName, setFileName] = useState("");
  const [selectedOpt, setselectedOpt] = useState();

  const { postUniversitiesData, loading } = useSelector((state) => state.postUniversitiesInfo);

  const options = [
    "Select any",
    "Universities",
    "Programme",
    "Quiz",
    "Topics",
    "Events",
  ];

  const readUploadFile = (e) => {
    e.preventDefault();
    console.log(selectedOpt, e.target.files);
    if (e?.target?.files[0] && selectedOpt) {
      const reader = new FileReader();
      setFileName(e.target.files[0].name);
      reader.onload = (e) => {
        const result = e.target.result;
        const workbook = read(result, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const json = utils.sheet_to_json(worksheet);
        if (selectedOpt === "Universities") {
          console.log(json);
          dispatch(postUniversities(json));
        }
        if (selectedOpt === "Programme") {
          console.log(json);
          dispatch(postProgramme(json));
        }
        setMessage("dashboard");
      };
      reader.readAsArrayBuffer(e.target.files[0]);
    } else {
      console.log("select drop down");
    }
  };

  const selectOption = (e) => {
    setselectedOpt(e.target.value);
  };

  return (
    <>
      <NavBar />
      <div className="admin-container">
        <select onChange={selectOption} className="admin-select">
          {options.map((item, index) => (
            <option key={index} value={item}>{item}</option>
          ))}
        </select>
        <form className="upload-form-container" onSubmit={readUploadFile}>
          <label className="file-label">
            <input
              type="file"
              name="upload"
              id="upload"
              onChange={readUploadFile}
              className="admin-file-upload"
            />
          </label>
          <label>{fileName}</label>
          <button type="submit" className="admin-submit">
            submit
          </button>
        </form>
        {message && (
          <div className="success-snippets">
            <h2>
              File uploaded successfully, Goto{" "}
              <Link to="/admin/dashboard" className="success-file-msg" state={selectedOpt}>
                {message}
              </Link>
            </h2>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};
export default PostUniversity;
