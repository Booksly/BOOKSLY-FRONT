import React from "react";
import App from "../App";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StoreSearchPage from "../pages/StoreSearchPage/StoreSearchPage";
import RegionSelection from "../pages/StoreSearchPage/RegionSelection";
import RegionSelectionPopup from "../pages/StoreSearchPage/RegionSelectionPopup";

const StoreSearchPageRouting = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<App></App>}></Route>
        <Route path="/" exact component={StoreSearchPage}></Route>
        <Route path="/RegionSelection" component={RegionSelection}></Route>
        <Route
          path="/RegionSelectionPopup"
          comopnent={RegionSelectionPopup}
        ></Route>
      </Switch>
    </Router>
  );
};

export default StoreSearchPageRouting;
