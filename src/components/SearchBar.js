import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

function SearchBar({ onSubmit }) {
  const [fieldVal, setFieldVal] = useState('');
  return (
    <View style={styles.wrapper}>
      <View>
        <AntDesign name="barcode" size={24} color="black" />
      </View>
      <View style={styles.textView}>
        <TextInput
          style={styles.textInput}
          value={fieldVal}
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
    </View>
  );
}
SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    flex: 1,
    flexDirection: 'row'
  },
  textInput: {
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    fontSize: 10,
    height: 35
  },
  textView: {
    flexGrow: 1,
    paddingLeft: 5,
  }
});

export default SearchBar;
