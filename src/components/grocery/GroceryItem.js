import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from 'react-native-elements'
import {View} from "react-native";

const GroceryItem = ({ product_name }) => {
  return <View>
    <ListItem bottomDivider>
      <ListItem.Content>
        <ListItem.Title>
          {product_name}
        </ListItem.Title>
      </ListItem.Content>
    </ListItem>
  </View>
};


GroceryItem.propTypes = {
  product_name: PropTypes.string.isRequired,
  // _key: PropTypes.string.isRequired,
}

export default GroceryItem