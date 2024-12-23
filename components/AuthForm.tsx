import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Input from './Input'
import ButtonAll from './ButtonAll'

export default function AuthForm({islogin,keyboardType,}) {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const update = (inputType,enteredValue) => {
        switch(inputType){
            case "email":
                setEmail(enteredValue)
                console.log(enteredValue)
                break
           case "password":
               setPassword(enteredValue)
                console.log(enteredValue)
                break

        }
    }
  return (
    <View>
     <Input label="Email" keyboardType={'email-address'} onUpdateInput={update.bind(this,"email")} value={email}/>
     <Input label="Password"  onUpdateInput={update.bind(this,"password")} value={password} secure/>

   <View>
    <ButtonAll>{islogin? "Login" : "Signup"}</ButtonAll>
   </View>
    </View>
  )
}

const styles = StyleSheet.create({})