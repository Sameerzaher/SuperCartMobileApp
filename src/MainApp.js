import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";

function MainApp({}) {
  return <View style={styles.container}>
    <Text>Open up App.js to start working on your app!909090</Text>
    <StatusBar style="auto" />
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

MainApp.propTypes = {

}

export default connect(
  (state) => ({
  }),
  {},
)(MainApp);
