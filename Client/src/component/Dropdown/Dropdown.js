import { PopupMenu } from "react-simple-widgets";
import logoimg from "../Login/Images/Facebook.svg"
import { useDispatch ,useSelector } from "react-redux";
import { postLoginUser } from "../../Store/Slice/LoginSlice.js";
const Dropdown = () =>  {


const dispatch =  useDispatch();
dispatch(postLoginUser());
  const{loginData,loading} =useSelector((state) => state.loginInfo);
  console.log(loginData);
  return (
    <div id="app">
      <div className="text-end">
        <PopupMenu>
          <button>
            <img src={logoimg}></img>
          </button>

          <div className="card text-start">
            <div className="card-body px-4 py-4">
              <div id="circle-avatar" className="text-center mx-auto mb-4">
                <span>User Profile</span>
              </div>

              <h5 className="text-center mb-0">John Doe</h5>
              <p className="text-center mb-2">jd@gmail.com</p>

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
                <button className="btn btn-secondary">
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