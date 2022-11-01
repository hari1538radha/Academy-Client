import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../Navbar/navbar";
import { getUniversitiesInfo } from "../../../Store/Slice/getUniversities";
import UniversityCard from "./UniversityCard/UniversityCard";
import RightSideBar from "../RightSideBar";
import "./TopUniversity.css";

function TopUniversity() {
  const state = [];
  const [stateSelected, setState] = useState([]);
  const [district, setDistrict] = useState([]);
  const [districtDisplayed, setDistrictDisplayed] = useState([]);
  const options = [
    "Top Arts, Science & Commerce Colleges",
    "Top Engineering Colleges",
    "Top Pharmacy Colleges",
    "Top Medical Colleges",
    "Top G Dental Colleges",
    "Top Law Colleges",
    "Top Architecture Colleges",
  ];
  const specialization = [
    "Agriculture",

    "Architecture",

    "Arts & Science",

    "Commerce",

    "Education",

    "Engineering",

    "Hospitality",

    "Journalism & Media",

    "Law",

    "Management",

    "Medical",

    "Paramedical",
  ];
  const dispatch = useDispatch();
  const [universityDatafinal, setuniversityStateData] = useState([]);

  const { universitiesData, universitiesLoading } = useSelector(
    (state) => state.universitiesInfo
  );
  useEffect(() => {
    dispatch(getUniversitiesInfo());
  }, []);
  universitiesData.forEach((element) => {
    if (!state.includes(element.State)) {
      state.push(element.State);
    }
  });

  const handelstate = (e) => {
    e.preventDefault();
    var select = document.getElementById("state");
    if (select) {
      var value = select.options[select.selectedIndex].value;

      setState(value);
    }
  };
  const handelDistrict = (e) => {
    e.preventDefault();
    var select = document.getElementById("district");
    if (select) {
      var value = select.options[select.selectedIndex].value;

      setDistrictDisplayed(value);
      console.log(districtDisplayed);
    }
  };


  useEffect(() => {
    setuniversityStateData(universitiesData.slice(0, 10));
    console.log(universitiesData);
  }, [universitiesData]);
  useEffect(() => {
    setuniversityStateData(
      universitiesData.filter((element) => {
        if (element.State == stateSelected) return element;
      })
    );
  }, [stateSelected]);
  useEffect(() => {
    setuniversityStateData(
      universitiesData.filter((element) => {
        if (element.District == districtDisplayed) return element;
      })
    );
  }, [districtDisplayed]);

  console.log(universityDatafinal);

  useEffect(() => {

   (universitiesData.forEach((element) => {
      if (element.State === stateSelected) 
      district.push(element.District)
      
      
    }));
  }, [stateSelected]);
  console.log(district);


  // useEffect(() => {
  //   if (district.length > 0) {
  //     setDistrict([]);
  //   }
  // }, [stateSelected]);

  return (
    <>
      <Navbar />
      <div class="uni-right-sidebar">
        <RightSideBar options={options} />
      </div>
      <div className="university-main-heading">Top Universities</div>
      <div className="selecting-preferences">
        <div className="guide-selection">
          <span>select your preferences</span>
        </div>
        <select className="guide-selector">
          <option>Specialization</option>
          {specialization.length > 0 &&
            specialization.map((obj) => <option>{obj}</option>)}
        </select>
        <select onChange={handelstate} id="state" className="guide-selector">
          <option>State</option>
          {state.length > 0 &&
            state.map((obj) => <option value={obj}>{obj}</option>)}
        </select>
        <select
          onChange={handelDistrict}
          id="district"
          className="guide-selector guide-Selector_Last"
        >
          <option>District</option>
          {district.length > 0 && district.map((obj) => <option>{obj}</option>)}
        </select>
      </div>
      <div className="uni-main-container">
        <div className="uni-list-main-container">
          {universityDatafinal.length &&
            universityDatafinal.map((obj, index) => (
              <UniversityCard key={index} uniInfo={obj}></UniversityCard>
            ))}
        </div>
      </div>
    </>
  );
}

export default TopUniversity;
