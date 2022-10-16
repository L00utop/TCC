import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";


import Welcome from '../pages/Welcome/Welcome';
import Login from '../pages/Login/Login';
import SignIn from '../pages/SignIn/SignIn';
import Home from '../pages/Home/Home';
import Details from '../pages/Home/Details'



const Stack = createNativeStackNavigator();


export default function Routes() { 
    const Navigation = useNavigation();
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
            options={{ headerShown: true, headerTitle: '', headerLeft: ()=> null, headerRight: ()=> 
            <TouchableOpacity style={{ marginRight: 15 }} onPress={ () => Navigation.navigate('Detalhes')}>
                <FontAwesome name="user" size={30} color="black" />
            </TouchableOpacity>}} 
            />

        <Stack.Screen
            name="Detalhes"
            component={Details}
            options={{ headerBackButtonMenuEnabled: false, title: "Detalhes", headerTitleStyle:{fontFamily: 'Kanit_700Bold'}}}
            />
        </Stack.Navigator>
    );
}
