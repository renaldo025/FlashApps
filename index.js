/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/navigators/navigation';
import { name as appName } from './app.json';
import React from 'react';
import { Provider } from 'react-redux';
import Store from "./src/redux/store"

const Root = () => (
    <Provider store={Store}>
        <App />
    </Provider>
)

AppRegistry.registerComponent(appName, () => Root);
