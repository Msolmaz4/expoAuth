
import axios from "axios";

 const fetchPosts = async (mode,email, password) => {
  console.log("API çağrısı yapılıyor...", email, password);
  const apiUrl = process.env.EXPO_PUBLIC_API_KEY;
  console.log(apiUrl);
  try {
    const response = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${apiUrl}`,
      {
        email: email,
        password: password,
        returnSecureToken: true, // Firebase için gerekli
      },
      {
        headers: {
          "Content-Type": "application/json", // Doğru içerik türü
        },
      }
    );
    console.log(response.data,"GETHSSSSSSSSSS");
    return response.data; 
  } catch (error) {
    console.error("API çağrısı başarısız:", error.response?.data || error.message);
    throw error; // Hata durumunda hata fırlatıyoruz
  }
};

export async function register(email, password) {
return  fetchPosts("signUp",email, password);
}
export async function login(email, password) {
return  fetchPosts("signInWithPassword",email, password);
}
