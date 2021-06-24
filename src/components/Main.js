import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import {addItem} from "../actions/groceryActions";
import {ScrollView, View} from "react-native";
import GroceryList from "./grocery/GroceryList";

const Main = ({ addItem }) => {
  return <View>
    <SearchBar
      onSubmit={(value) => {
        console.log('value', value)
        addItem(value)
      }}
    />
    <ScrollView>
      <GroceryList />
    </ScrollView>
  </View>
};

Main.propTypes = {
  addItem: PropTypes.func.isRequired,
}

// const styles = StyleSheet.create({});

export default connect(state => ({ ...state }),{addItem})(Main);
