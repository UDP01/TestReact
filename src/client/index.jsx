import * as React from "react";
import * as ReactDOM from 'react-dom';
import {Header} from "../shared/header";

window.addEventListener('load', () => {
    ReactDOM.hydrate(<Header/>, document.getElementById('react__root'))
});