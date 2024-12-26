
import axios from "axios";

export const fetchPosts = async (email, password) => {
  console.log("API çağrısı yapılıyor...", email, password);
  const apiUrl = process.env.EXPO_PUBLIC_API_KEY;
  console.log(apiUrl);
  try {
    const response = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiUrl}`,
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
    return response.data; // Verileri döndürüyoruz
  } catch (error) {
    console.error("API çağrısı başarısız:", error.response?.data || error.message);
    throw error; // Hata durumunda hata fırlatıyoruz
  }
};

