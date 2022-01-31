import React, {useEffect, useState} from "react"
import app from "./config"

export const AuthContext = React.createContext()

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [pending, setPending] = useState(true)

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setCurrentUser(user)
      setPending(false)
    })
  }, [])

  if(pending){

    return (
      <center>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1>
          {" "}
          <div className="spinner-border text-warning" role="status"  style={{height: "150px", width: "150px" }}/>
        </h1>
      </center>
    );
  }

  return (
    <AuthContext.Provider
      value={{currentUser}}
    >
      {children}
    </AuthContext.Provider>
  )
}
