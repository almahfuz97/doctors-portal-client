import { useEffect, useState } from "react"

const useToken = email => {
    const [token, setToken] = useState();
    console.log(email, token)
    useEffect(() => {
        if (email) {
            fetch(`${process.env.REACT_APP_URL}/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.accessToken) {
                        localStorage.setItem('token', data.accessToken)
                        setToken(data.accessToken);
                    }
                })
                .catch(err => console.log(err))
        }
    }, [email])

    return [token];
}

export default useToken;