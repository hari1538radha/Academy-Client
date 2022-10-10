import { Link, useNavigate } from "react-router-dom";
import { useDispatch ,useSelector } from "react-redux";
import { postLoginUser } from "../../../Store/Slice/LoginSlice.js";
import Loginlogo from "../../Login/Images/Vector.svg";
import { PopupMenu } from "react-simple-widgets";

const Dropdown = ({profileInfo}) =>  {
  const navigate = useNavigate()
  const logout = (e) => {
    navigate("/")
  }
  return (
    <div id="app">
      <div className="text-end">
          {/* <button>
            <img src={logoimg}></img>
          </button> */}
          <PopupMenu>
        <div className="Loginlogo">
          <img src={Loginlogo} alt="no img found"></img>
        </div>
          <div className="card text-start">
            <div className="card-body px-4 py-4" id="card">
              <div id="circle-avatar" className="text-center mx-auto mb-4">
          
              </div>

              <h5 className="text-center mb-2">{profileInfo.userFirstName}</h5>
              <p className="text-center mb-2">{profileInfo.userEmail}</p>

              <hr />

              <hr className="mb-0" style={{ margin: "0 -24px 0" }} />

              <div
                className="list-group list-group-flush"
                style={{ margin: "0 -24px 0" }}
              >
                <button className="list-group-item list-group-item-action px-4">
                  <a href="/admin">Admin</a>
                </button>
                <button className="list-group-item list-group-item-action px-4">
                  <a href="/admin/dashboard">Dashboard</a>
                </button>
                <button className="list-group-item list-group-item-action px-4">
                  <a href="#">Edit Profile</a>
                </button>
              </div>

              <hr style={{ margin: "0 -24px 24px" }} />

              <div className="d-grid">
                <button className="btn btn-secondary" onClick={logout}>
                  <small>Logout</small>
                </button>
              </div> 
            </div>
          </div>
      </PopupMenu>

      </div>
    </div>
  );
}
export default Dropdown;