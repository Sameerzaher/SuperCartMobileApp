import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View, Button} from "react-native";
import {StatusBar} from "expo-status-bar";
import StickyHeaderFooterScrollView from 'react-native-sticky-header-footer-scroll-view';
import Main from "./components/Main";
import { initiateListFromStorage } from "./actions/groceryActions";


function MainApp({initiateListFromStorage}) {
  useEffect(() => {
    initiateListFromStorage()
    console.log('did mount')
  }, [])
  return <StickyHeaderFooterScrollView
    renderStickyHeader={() => (
      <View style={styles.header}>
        <Text style={styles.headerText}>Sound Cloud Player</Text>
      </View>
    )}
    renderStickyFooter={() => (
      <Button
        title={true ? 'Back to track List' : 'Recent Queries'}
        onPress={() => {
          console.log('pressed');
        }}
      />
    )}
  >
    <Main />
  </StickyHeaderFooterScrollView>
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'pink',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    headerText: { marginTop: 30, fontSize: 20, fontWeight: 'bold' },
});

MainApp.propTypes = {

}

export default connect(
  (state) => ({
  }),
  {initiateListFromStorage},
)(MainApp);
