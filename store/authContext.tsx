import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const AuthContext = createContext({
  token: null,
  isAuthenticated: false,
  logout: () => {},
  auth: () => {},
});

function AuthProvider({ children }) {
  const [authtoken, setAuthToken] = useState("");

  useEffect(() => {
    async function getToken() {
      const storedTtoken = await AsyncStorage.getItem("token");
      if (storedTtoken) {
        setAuthToken(storedTtoken);
      }
    }
    getToken();
  }, []);

  function auth(token) {
    setAuthToken(token);
    AsyncStorage.setItem("token", token); //bu makined kayitli kalmasi icin
  }
  function logout() {
    setAuthToken(null);
    AsyncStorage.removeItem("token"); // bu makined en silmek icin
  }
  const value = {
    token: authtoken,
    isAuthenticated: !!authtoken,
    auth: auth,
    logout: logout,
  };
  console.log(authtoken, "authhhhhhhhhhhhhhhhh");
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export default AuthProvider;
