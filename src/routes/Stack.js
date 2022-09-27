import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Feather } from 'react-native-feather';




import Welcome from '../pages/Welcome/Welcome';
import Login from '../pages/Login/Login';
import SignIn from '../pages/SignIn/SignIn';
import Home from '../pages/Home/Home';
import Details from '../pages/Home/Details'





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
            options={{ headerShown: true, headerLeft: ()=> null }} style={{ flex: 1, fontFamily: 'Kanit_500Bold'}}
            />

        <Stack.Screen
            name="Detalhes"
            component={Details}
            options={{ headerBackButtonMenuEnabled: false, title: "Detalhes", headerTitleStyle:{fontFamily: 'Kanit_700Bold'},

            headerRight: () => (
                <TouchableOpacity style={{ marginRight: 15 }}>
                    <Feather name="user" size={24} color="black"/>
                </TouchableOpacity>
            )
            }}
            />
        </Stack.Navigator>
    );
}
