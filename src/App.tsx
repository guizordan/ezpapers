import React, { useState } from 'react';
import { StatusBar } from "components";
import axios from "axios";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function App() {
  const [value, setValue] = useState("")

  function onChangeText(value: string) {
    setValue(value)
  }

  async function searchImages() {
    const response = await axios.get("https://serpapi.com/playground?q=Apple&tbm=isch&ijn=0")
    console.log(response)
  }

  return (
    <>
      <StatusBar />
      <SafeAreaView>
        <TextInput style={{borderWidth: 2}} value={value} onChangeText={onChangeText} />
        <TouchableOpacity onPress={searchImages} >
        <Text>Search</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
