import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';

export default function Form() {
  return (
    <View>
    <View>
        <Text>Altura</Text>
        <TextInput
        placeholder="Ex. 1.75"
        keyboardType="numeric"
        />
        <Text>Altura</Text>
        <TextInput
         placeholder="Ex. 75,865"
         keyboardType="numeric"
         />
    </View>
    </View>
  );
}