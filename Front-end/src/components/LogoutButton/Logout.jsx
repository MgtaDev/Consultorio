import React from 'react'
import { getAuth, signOut } from "firebase/auth";


const Logout = () => {

const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});

  return (
<button>Logout</button>
  )
}

export default Logout