import axios from "axios";

const fetchPosts = async (mode, email, password) => {
  const apiUrl = process.env.EXPO_PUBLIC_API_KEY;
console.log("API URL");
  try {
    const response = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${apiUrl}`,
      {
        email: email,
        password: password,
        returnSecureToken: true,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response.data,"GETHSSSSSSSSSS");
    const token = response.data.idToken;
    return token;
  } catch (error) {
    console.error(
      "API çağrısı başarısız:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export function register(email, password) {
  return fetchPosts("signUp", email, password);
}
export function login(email, password) {
  return fetchPosts("signInWithPassword", email, password);
}
