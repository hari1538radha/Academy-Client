import React, { useEffect } from "react";
import Navbar from "../Navbar/navbar";
import { useDispatch, useSelector } from "react-redux";
import { getUniversitiesInfo } from "../../Store/Slice/getUniversities";
import UniversityCard from "./UniversityCard/UniversityCard";
import "./TopUniversity.css";

function TopUniversity() {
  const dispatch = useDispatch();
  const { universitiesData, universitiesLoading } = useSelector(
    (state) => state.universitiesInfo
  );
  useEffect(() => {
    dispatch(getUniversitiesInfo());
  }, []);
  return (
    <>
      <Navbar />
      <div className="university-main-heading">Top Universities</div>
      <div className="selecting-preferences">
        <div className="guide-selection">
          <span>
            select your preferences
          </span>
        </div>
        <select className="guide-selector">
          <option>Specialization</option>
          <option>preferences</option>
          <option>preferences</option>
        </select>
        <select className="guide-selector">
          <option>State</option>
          <option>preferences</option>
          <option>preferences</option>
        </select>
        <select className="guide-selector">
          <option>District</option>
          <option>preferences</option>
          <option>preferences</option>
        </select>
      </div>
      {universitiesData.length &&
        universitiesData.map((obj, index) => (
          <UniversityCard key={index} uniInfo={obj}></UniversityCard>
        ))}
    </>
  );
}

export default TopUniversity;
