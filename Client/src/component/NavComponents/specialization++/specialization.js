import { useState,useEffect } from "react";
import Navbar from "../../Navbar/navbar";
import Footer from "../../Footer/footer";
import "./css/specialization.css";
import RightSideBar from "../RightSideBar";
import { getProgrammeInfo } from "../../../Store/Slice/getProgramme";
import { specialization } from "../ConstNavComponents/ConstNavComponents.js";
import { useDispatch,useSelector } from "react-redux";

const Specialization = () => {
  const dispatch= useDispatch()
  const [state, setState] = useState();

  const settingState = (e) => {
    setState(e.target.value);
  };
  useEffect(() => {
    dispatch(getProgrammeInfo())
  }, [])
  
  
  return (
    <>
      <Navbar />
      <div className="specialization-page-container">
        <div className="specialization-details">
          <RightSideBar options={specialization} />
          {state ? (
            <div className="specialization-details-card">
              <p>
                <strong>Specialization : </strong>
                {state}
              </p>
            </div>
          ) : (
            <h1>select the required specialization from the right dashboard</h1>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Specialization;
