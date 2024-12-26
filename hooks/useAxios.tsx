import { useEffect, useState } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function useAxios() {
  const [data, setData] = useState("");

  const api = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      await AsyncStorage.setItem("data", JSON.stringify(response.data));
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
      api()
    const loadData = async () => {
      const storedData = await AsyncStorage.getItem("data");
      if (storedData) setData(JSON.parse(storedData));
    };
    loadData();
  
  }, []);

  return { data, api };
}

// npm i @react-native-async-storage/async-storage komutu, React Native projelerine AsyncStorage kütüphanesini yükler. Bu kütüphane, cihazda kalıcı olarak veri saklamanıza olanak tanır. AsyncStorage, verileri cihazın hafızasında key-value (anahtar-değer) çiftleri şeklinde depolar.
