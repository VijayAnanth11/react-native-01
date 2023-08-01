import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import EnterScreen from './screens/EnterScreen';
import LoginChoose from './screens/LoginChoose';
import UserLogin from './login/UserLogin';
import AdminLogin from './login/AdminLogin';
import UserHome from './screens/UserHome';
import Birthday from './screens/Birthday';
import Signup from './login/Signup';
import OrderScreen from './screens/OrderScreen';
import AdminHome from './screens/AdminHome';
import AddProduct from './screens/AddProduct';
import ViewOrders from './screens/ViewOrders';
import SucessOrder from './screens/Sucess_Order';
import SucessCat from './screens/Sucess_Cat';
import SucessProduct from './screens/Sucess_product';
import SucessSignup from './screens/Sucess_Signup';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen
                    name='Enter'
                    component={EnterScreen}
                    options={{ title: "BLOOM ROOM" }}
                />
                <Stack.Screen
                    name='choose'
                    component={LoginChoose}
                    options={{ title: "BLOOM ROOM" }}
                />
                <Stack.Screen
                    name='userLogin'
                    component={UserLogin}
                    options={{ title: "BLOOM ROOM" }}
                />
                <Stack.Screen
                    name='adminLogin'
                    component={AdminLogin}
                    options={{ title: "BLOOM ROOM" }}
                />
                <Stack.Screen
                    name='userhome'
                    component={UserHome}
                    options={{ title: "BLOOM ROOM" }}
                />
                <Stack.Screen
                    name='birthday'
                    component={Birthday}
                    options={{ title: "BLOOM ROOM" }}
                />
                <Stack.Screen
                    name='signup'
                    component={Signup}
                    options={{ title: "BLOOM ROOM" }}
                />
                <Stack.Screen
                    name='order'
                    component={OrderScreen}
                    options={{ title: "BLOOM ROOM" }}
                />
                <Stack.Screen
                    name='adminhome'
                    component={AdminHome}
                    options={{ title: "BLOOM ROOM" }}
                />
                <Stack.Screen
                    name='addproduct'
                    component={AddProduct}
                    options={{ title: "BLOOM ROOM" }}
                />
                <Stack.Screen
                    name='vieworders'
                    component={ViewOrders}
                    options={{ title: "BLOOM ROOM" }}
                />
                <Stack.Screen
                    name='sucessorder'
                    component={SucessOrder}
                    options={{ title: "BLOOM ROOM" }}
                />
                <Stack.Screen
                    name='sucesscat'
                    component={SucessCat}
                    options={{ title: "BLOOM ROOM" }}
                />
                <Stack.Screen
                    name='sucessproduct'
                    component={SucessProduct}
                    options={{ title: "BLOOM ROOM" }}
                />
                <Stack.Screen
                    name='sucesssignup'
                    component={SucessSignup}
                    options={{ title: "BLOOM ROOM" }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}
