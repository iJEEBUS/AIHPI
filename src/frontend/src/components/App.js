import React from "react";
import ReactDOM from "react-dom";
import DataProvider from "./DataProvider";
import Table from "./Table";

const App = () => (
  <React.Fragment>
  
  <DataProvider endpoint="api/trophies/" 
                render={data => <Table data={data} />} />
  </React.Fragment>  
);

const wrapper = document.getElementById("app");

wrapper ? ReactDOM.render(<App />, wrapper) : null;