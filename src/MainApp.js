import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Button } from 'react-native';
import StickyHeaderFooterScrollView from 'react-native-sticky-header-footer-scroll-view';
import Main from './components/Main';
import { initiateListFromStorage } from './actions/groceryActions';
import { storeGroceryList } from './storage';

function MainApp({ initiateListFromStorage, list }) {
  useEffect(() => {
    initiateListFromStorage();
    return () => {
      storeGroceryList(list);
    };
  }, []);
  return (
    <StickyHeaderFooterScrollView
      renderStickyHeader={() => (
        <View style={styles.header}>
          <Text style={styles.headerText}>Sound Cloud Player</Text>
        </View>
      )}
      renderStickyFooter={() => (
        <Button
          title={'Compare Prices'}
          onPress={() => {
            console.log('pressed');
          }}
        />
      )}
    >
      <Main />
    </StickyHeaderFooterScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'pink',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: { marginTop: 30, fontSize: 20, fontWeight: 'bold' },
});

MainApp.propTypes = {
  list: PropTypes.array.isRequired,
  initiateListFromStorage: PropTypes.func.isRequired,
};

export default connect(
  (state) => ({
    list: state.groceryList,
  }),
  { initiateListFromStorage },
)(MainApp);
