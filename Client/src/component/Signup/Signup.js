<<<<<<< HEAD
// import React from "react";
// import NavBar from "./navbar";
// import Loginlogo from "../Login/Images/Vector.svg";
// import Footer from "../Login/Footer/footer";
// import "./Signup.css";
// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import { signup } from "../Store/Slice/SignupSlice";

// const Signup = () => {
//   // // const [values, setValues] = useState({});
//   // // const handleChange = event => {
//   // //   setValues(prevValues => ({
//   // //     ...prevValues,
//   // //     [event.target.name]:event.target.value
//   // //   }))
//   // // }
//   // const validate = values => {
//   //   const errors = {};

//   //   if(!values.firstName){
//   //     errors.firstName = "Required";
//   //   }else if(values.firstName.length > 20){
//   //     errors.firstName = "must be less than 20 charecters";
//   //   }

//   //   if(!values.lastName){
//   //     errors.lastName = "Required";
//   //   }else if(values.lastName.length > 20){
//   //     errors.lastName = "must be less than 20 charecters";
//   //   }

//   //   if(!values.email){
//   //     errors.email = "Required";
//   //   }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
//   //     errors.email = "Invalid Email";
//   //   }

//   //   if(!values.password){
//   //     errors.password = "Required";
//   //   }else if(values.password.length < 8){
//   //     errors.password = "must be less than 8 charecters";
//   //   }

//   //   return errors;
//   // }
//   // const formik = useFormik({
//   //   initialValues: {
//   //     firstName: "",
//   //     lastName: "",
//   //     Emailid: "",
//   //     password: ""
//   //   },
//   //   onsubmit : values => {
//   //     alert(JSON.stringify(values, null, 2));
//   //   },
//   // });

//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { data, loading } = useSelector((state) => state.sigupdata);
//   const [loginStatus, setLoginStatus] = useState({ status: 0, message: "" });

//   useEffect(() => {
//     if (data.response === "success") {
//       setLoginStatus({
//         status: 1,
//         message: "success",
//       });
//       navigate('/LandingPage')
//     } else if (data.response === "failure") {
//       setLoginStatus({
//         status: 1,
//         message: "failure",
//       });
//     }
//   }, [data]);

//   const handleSignupData = (e) => {
//     e.preventDefault();
//     const ele = e.target.elements;
//     const firstName = ele[0].value;
//     const lastName = ele[1].value;
//     const Emailid = ele[2].value;
//     const password = ele[3].value;
//     ele[0].value = "";
//     ele[1].value = "";
//     ele[2].value = "";
//     ele[3].value = "";
//     dispatch(signup({ firstName, lastName, Emailid, password }));
//   };
//   return (
//     <div>
//       <NavBar />
//       <>
//         <div className="image">
//           <div className="Signup-main">
//             <form onSubmit={handleSignupData}>
//               <div className="Signup-container">
//                 <div className="Loginlogo">
//                   {" "}
//                   <img src={Loginlogo}></img>
//                 </div>
//                 <p>Sign up</p>
//                 <div className="Name-input-container">
//                   <input
//                     className="fistname-input"
//                     placeholder="First name *"
//                     type="text"
//                   ></input>
//                   <input
//                     className="LastName-input"
//                     placeholder="Last name *"
//                     type="text"
//                   ></input>
//                 </div>
//                 <input
//                   className="Email-input"
//                   placeholder="Email Address *"
//                   type="text"
//                 ></input>
//                 <input
//                   className="password-input"
//                   type="password"
//                   placeholder="Password *"
//                 ></input>
//                 <button className="Signup-btn">SIGN UP</button>
//                 <div className="Signup-footer">
//                   <p>Already have an account? </p>
//                   <a>LOG IN</a>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//         <div>
//           <Footer />
//         </div>
//       </>
//       <div />
//     </div>
//   );
// };

// export default Signup;
=======
import React from "react";
import NavBar from "./navbar";
import Loginlogo from "../Login/Images/Vector.svg";
import Footer from "../Login/Footer/footer";
import "./Signup.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../../Store/Slice/SignupSlice";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, loading } = useSelector((state) => state.sigupdata);
  const [loginStatus, setLoginStatus] = useState({ status: 0, message: "" });

  useEffect(() => {
    if (data.response === "success") {
      setLoginStatus({
        status: 1,
        message: "success",
      });
      // navigate('/landing');
    } else if (data.response === "failure") {
      setLoginStatus({
        status: 1,
        message: "failure",
      });
    }
  }, [data]);

  const handleSignupData = (e) => {
    e.preventDefault();
    const ele = e.target.elements;
    const firstName = ele[0].value;
    const lastName = ele[1].value;
    const Emailid = ele[2].value;
    const password = ele[3].value;
    ele[0].value = "";
    ele[1].value = "";
    ele[2].value = "";
    ele[3].value = "";
    dispatch(signup({ firstName, lastName, Emailid, password }));
  };

  return (
    <div>
      <NavBar />
      <>
        <div className="image">
          <div className="Signup-main">
            <form onSubmit={handleSignupData}>
              <div className="Signup-container">
                <div className="Loginlogo">
                  {" "}
                  <img src={Loginlogo}></img>
                </div>
                <p>Sign up</p>
                <div className="Name-input-container">
                  <input
                    className="fistname-input"
                    placeholder="First name *"
                    type="text"
                    required
                  ></input>
                  <input
                    className="LastName-input"
                    placeholder="Last name *"
                    type="text"
                    required
                  ></input>
                </div>
                <input
                  className="Email-input"
                  placeholder="Email Address *"
                  type="email"
                  required
                ></input>
                <input
                  className="password-input"
                  type="password"
                  placeholder="Password *"
                  required
                ></input>
                <button className="Signup-btn">SIGN UP</button>
                <div className="Signup-footer">
                  <p>Already have an account? </p>
                  <a>LOG IN</a>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </>
      <div />
    </div>
  );
};

export default Signup;
>>>>>>> server
