import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Welcome(props) {
  return (
    <Text>
      Welcome to {props.code} - {props.name}
    </Text>
  );
}

class ModuleInfo extends Component {
  render() {
    return (
      <View>
        <Text>These are my modules this semester:</Text>

        <Welcome
          code="C105"
          name="Introduction to Programming"
        />

        <Welcome
          code="C346"
          name="Mobile App Development"
        />

      </View>
    );
  }
}

export default function App() {
  return (
    <View style={styles.container}>
      <ModuleInfo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});