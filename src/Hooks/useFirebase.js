import { GoogleAuthProvider,getAuth, signInWithPopup, signOut,onAuthStateChanged} from "firebase/auth";
import { useEffect, useState } from "react";
import initialization from './../Firebase/firebase.init';




initialization(); 

const GoogleProvider =  new GoogleAuthProvider();
const FacebookProvider = new GoogleAuthProvider(); 

const auth = getAuth();

const useFirebase = () =>{
    const [user,setUser] = useState([])

    const googleSign = () =>{
        signInWithPopup(auth, GoogleProvider)
            .then((result)=>{
                const user = result.user;
                console.log(user); 
                setUser(user)
            })
            .catch((error)=>{
                console.log(error)
            })
    }

    const googleSignOut = ()=>{
        signOut(auth).then(() => {
            setUser([])
          }).catch((error) => {
            console.log(error)
          });
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            } else {
              // User is signed out
              // ...
            }
    },[auth])
      });
      return(
          {
            googleSign,
            googleSignOut,
            user,
            
          }
      )
}

export default useFirebase; 