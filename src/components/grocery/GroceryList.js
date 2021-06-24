import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import GroceryItem from './GroceryItem';

const GroceryList = ({ itemsList }) => (
  <View>
    {itemsList.map((item) => (
      <GroceryItem key={item.id} product_name={item.item.product_name} />
    ))}
  </View>
);

GroceryList.propTypes = {
  itemsList: PropTypes.array.isRequired,
};
export default connect(
  (state) => ({
    itemsList: state.groceryList,
  }),
  {},
)(GroceryList);
