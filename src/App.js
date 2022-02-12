import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import "./App.css";
import * as React from 'react';

import Search from "./Components/Search";
import Grid from "./Components/Grid";

// import bg from './Content/Images/bg.jpg'
// background-image: url("../src/Content/Images/bg.jpg");

const App = () => {
  return (
    <>
    <Search />
    <Grid />
    </>
  );
};

export default App;