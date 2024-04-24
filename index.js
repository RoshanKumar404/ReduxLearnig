/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import store from './ReduxFiles/Store';


const Appredux = () => {
    return(
    <Provider store={store}>

        <App />
    </Provider>)
}
AppRegistry.registerComponent(appName, () => Appredux);

//

// import { AppRegistry } from 'react-native';
// import App from './App';
// import { name as appName } from './app.json';
// import { Provider } from 'react-redux';
// import store from './ReduxFiles/Store';

// // Define Appredux component with proper return statement
// const Appredux = () => {
//     return (
//         <Provider store={store}>
//             <App />
//         </Provider>
//     );
// };

// Register Appredux component
//AppRegistry.registerComponent(appName, () => Appredux);
