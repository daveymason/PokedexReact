import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import "./App.css";
import * as React from 'react';

import Search from "./Components/Search";

// import bg from './Content/Images/bg.jpg'
// background-image: url("../src/Content/Images/bg.jpg");

const App = () => {
  return (
    <Search />   //pass props to table here
  );
};

export default App;