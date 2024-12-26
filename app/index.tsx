import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Link } from 'expo-router';

export default function index() {






  return (
    <View>
      <Text>INDEX APP</Text>
      <Link href="/home/Home">Go to Custom Page</Link>
      <Link href="/login">Go to Custom login</Link>
      <Link href="/register">Go to Custom register</Link>
      <Link href="/user">Go to Custom user</Link>



    </View>
  )
}

const styles = StyleSheet.create({})