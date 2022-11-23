// import { GoogleAuthProvider } from "firebase/auth"
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import useToken from "../../hooks/useToken";

// const provider = new GoogleAuthProvider();

// const googleLogin = (providerLogin) => {

//     const navigate = useNavigate();
//     const [googleEmail,setGoogleEmail]= useState();
//     const [token]= useToken(googleEmail)

//     if(token) return navigate('/')
//     providerLogin(provider)
//         .then(result => {
//             console.log(result.user);
//             setGoogleEmail(result.user.email)

//         })
//         .catch(err => {
//             console.log(err)
//         })
// }

// export default googleLogin;