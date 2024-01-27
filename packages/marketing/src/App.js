import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {StylesProvider} from "@material-ui/core/styles";

import Landing from "./components/Landing"; // Landing page
import Pricing from "./components/Pricing"; // Pricing page

export default () =>{
    return (<div>
        <StylesProvider>
            <BrowserRouter>
            <Switch>
                <Route  path="/pricing" component={Pricing} />
                <Route path="/" component={Landing} />
            </Switch>
            </BrowserRouter>
        </StylesProvider>
    </div>
    );
}
