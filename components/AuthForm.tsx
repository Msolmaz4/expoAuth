import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Input from "./Input";
import ButtonAll from "./ButtonAll";

type AuthFormProps = {
  islogin: boolean;
  keyboardType: string; 
  onPress: () => void;
}
export default function AuthForm({ islogin, keyboardType ,onPress}: AuthFormProps) {
  const [email, setEmail] = useState("");
  const [emailControl, setEmailControl] = useState("");
  const [password, setPassword] = useState("");
  const [passwordControl, setPasswordControl] = useState("");





  const update = (inputType, enteredValue) => {
    switch (inputType) {
      case "email":
        setEmail(enteredValue);
        console.log(enteredValue);
        break;
      case "password":
        setPassword(enteredValue);
        console.log(enteredValue);
        break;
      case "emailControl":
        setEmailControl(enteredValue);
        console.log(enteredValue);
        break;
      case "passwordControl":
        setPasswordControl(enteredValue);
        console.log(enteredValue);
        break;
    }
  };
  console.log(islogin,"aurhhhhhhhhhhhhhhhhhhh")
  const onPresst = () => {
  
    onPress({email, password,emailControl,passwordControl})
    setEmail("");
    setPassword("");
    setEmailControl("");
    setPasswordControl("");
   // console.log(email,password,emailControl,passwordControl)
  };
  return (
    <View>
      <Input
        label="Email"
        keyboardType={"email-address"}
        onUpdateInput={update.bind(this, "email")}
        value={email}
      />
     {
      islogin  && (
        <Input
        label="Email Control"
        keyboardType={"email-address"}
        onUpdateInput={update.bind(this, "emailControl")}
        value={emailControl}
      />
      )
     }
      <Input
        label="Password"
        onUpdateInput={update.bind(this, "password")}
        value={password}
        secure
      />
      {
      islogin  && (
        <Input
        label="Password Control"
        secure
        onUpdateInput={update.bind(this, "passwordControl")}
        value={passwordControl}
      />
      )
     }

      <View>
        <ButtonAll onpress={()=>onPresst()}>{islogin ? "Register" : "Login"}</ButtonAll>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
