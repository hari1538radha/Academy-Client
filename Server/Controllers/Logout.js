export const logout = (req, res, next) => {
    const cookies = req.headers.cookie;
    // const previous = cookies.split("=")[1];
    console.log(cookies);

    if (!previous){
        return res.status(400).json({message: "no token found"})
    }
    verify(String(previous),"Academy",(err, user) => {
        if(err){
            console.log(err)
            return res.status(403).json({message: "failed the authentication"})
        }
        res.clearCookie(`${user.id}`)
        req.cookies[`${user.id}`] = "";
        return res.status(200).json({message:"successfully logged out"})
    })
}

export const VerifyToken = (req, res, next) => {
    const cookies = req.headers.cookie;
    // const token = cookies.split("=")[1];
    console.log(cookies);

    // if (!token) {
    //     res.send({
    //         status: 404,
    //         message: "no token found"
    //     })
    // }
    // verify(String(token),"Academy", (err, user) => {
    //     if (err) {
    //         res.send({
    //             status: 400,
    //             message: "invalid token is used here",
    //         })
    //     }
    //     req.id = user.id;
    // })
    // next();
};

export const findUser = async (req, res) => {
    const userId = req.id
let user;
  try {
    user = await TouristDetails.findById(userId, "-password");
  } catch (err) {
    return new Error(err);
  }
  if (!user) {
    return res.status(404)
  }
  return res.status(200).json({ user });
};