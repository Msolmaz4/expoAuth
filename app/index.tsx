import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';
export default function index() {
  return (
    <View>
      <Text>index</Text>
      <Link href="/home/Home">Go to Custom Page</Link>
      <Link href="/login/Login">Go to Custom login</Link>
      <Link href="/user">Go to Custom user</Link>



    </View>
  )
}

const styles = StyleSheet.create({})