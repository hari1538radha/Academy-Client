import React, { useEffect, useState } from 'react'
import { useDispatch ,useSelector } from 'react-redux'
import {userProfileData} from "../../Store/Slice/UserprofilePageSlice";
import { postLoginUser } from '../../Store/Slice/LoginSlice';
const Userprofile = () => {
const [data,setdata]=useState()

  useEffect(() => {
  
    dispatch(postLoginUser())
  }, []);
   const dispatch= useDispatch();
   const {loginData,loading} =useSelector(state => state.loginInfo)
   console.log(loginData);

   useEffect(()=>
   {
    setdata(loginData.data)
    console.log(data)
   },[])
   




  return (
    <div>
   {
     loginData.map((obj)=>
     (       <div>hi
          {obj.userEmail}
     </div>
     ))
   }
</div>
  )
}

export default Userprofile