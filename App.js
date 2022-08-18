import React, { useState, useEffect, useRef } from 'react'
import { View, Text, Button, _View, StyleSheet } from 'react-native'
import Toggle from 'toggle'

export default function App(){
  return(
    <View style={styles.container}>
      <Toggle
        label={`${primaryAxis} distribution (justifyContent)`}
        value={justifyContent}
        options={justifyContentOptions}
        onChange={(option) => {
          setJustifyContent(option)
        }}
      />
      <View style={styles.box}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 20,
    height: 50,
    backgroundColor: '#3B6CD4',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 4,
  }
})