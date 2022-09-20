import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '../pages/Welcome/Welcome';
import Login from '../pages/Login/Login';
import SignIn from '../pages/SignIn/SignIn';
import Home from '../pages/Home/Home';

const Stack = createNativeStackNavigator();

export default function Routes() { 
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{ headerShown: false }}
            />

            <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
            />

            <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ headerShown: false }}
            />

        <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}
