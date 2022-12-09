import React, {Component} from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';

import Feather from 'react-native-vector-icons/Feather';

import StackRoutes from './stackRoute';
import Sobre from '../pages/Sobre';
import Contato from '../pages/Contato';
import CustomDrawer from '../components/CustomDrawer';
import SemCaixa from '../pages/SemCaixa';
import ComCaixa from '../pages/ComCaixa';

const Drawer = createDrawerNavigator();

export default function Routes() {
  return (
    <Drawer.Navigator
      drawerContent={CustomDrawer}
      screenOptions={{
        headerShown: true,
        drawerActiveBackgroundColor: '#00dae4',
        drawerActiveTintColor: '#FFF',
        drawerInactiveBackgroundColor: '#f1f1f1',
        drawerInactiveTintColor: '#000',
      }}>
      <Drawer.Screen
        name="HomeStack"
        component={StackRoutes}
        options={{
          title: 'Inicio',
        }}
      />
      <Drawer.Screen name="SemCaixa" component={SemCaixa} />
      <Drawer.Screen name="ComCaixa" component={ComCaixa} />
      <Drawer.Screen name="Sobre" component={Sobre} />
      {/* <Drawer.Screen name="Contato" component={Contato} /> */}
    </Drawer.Navigator>
  );
}
