import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvide";

function useAuth() {
    return useContext(AuthContext);
  }

export default useAuth; 