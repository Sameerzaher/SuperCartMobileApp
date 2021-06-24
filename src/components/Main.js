import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';

const Main = ({}) => {
  return <SearchBar
    onSubmit={(value) => {
      console.log(value);
    }}
  />
};

Main.propTypes = {

}

// const styles = StyleSheet.create({});

export default connect(state => ({ ...state }),{})(Main);
