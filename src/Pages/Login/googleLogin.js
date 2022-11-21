import { GoogleAuthProvider } from "firebase/auth"

const provider = new GoogleAuthProvider();

const googleLogin = (providerLogin) => {

    providerLogin(provider)
        .then(result => {
            console.log(result.user)
        })
        .catch(err => {
            console.log(err)
        })
}

export default googleLogin;