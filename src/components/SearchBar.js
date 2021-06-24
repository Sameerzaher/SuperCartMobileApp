import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, TextInput } from 'react-native';

function SearchBar({ onSubmit }) {
  const [fieldVal, setFieldVal] = useState('');
  return (
    <View style={styles.wrapper}>
        <TextInput
          style={styles.textInput}
          value={fieldVal}
          keyboardType="numeric"
          clearButtonMode="while-editing"
          onChangeText={(e) => {
            setFieldVal(e);
          }}
          onSubmitEditing={() => {
            onSubmit(fieldVal);
            setFieldVal('');
          }}
        />
    </View>
  );
}
SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
  textInput: {
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    fontSize: 10,
    height: 50,
  },
  barcode: {
    margin: 10
  }
});

export default SearchBar;
