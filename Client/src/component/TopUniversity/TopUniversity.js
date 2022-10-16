import React, { useEffect } from "react";
import Navbar from "../Navbar/navbar";
import { useDispatch, useSelector } from "react-redux";
import { getUniversitiesInfo } from "../../Store/Slice/getUniversities";
import UniversityCard from "./UniversityCard/UniversityCard";

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
      <div>TopUniversity</div>
      {universitiesData.length &&
        universitiesData.map((obj, index) => (
          <UniversityCard key={index} uniInfo={obj}></UniversityCard>
        ))}
    </>
  );
}

export default TopUniversity;
