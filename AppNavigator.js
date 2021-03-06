import React from 'react';
import { Text, View } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { CartContext } from './contexts/Cart';
import { Icon, Badge } from 'react-native-elements'
import Home from './Screen/Home';
import SignIn from './Screen/SignIn';
import SignUp from './Screen/SignUp';
import Create from './Screen/Create';
import Load from './Screen/Load';
import Category from './Screen/Category';
import Categories from './Screen/Categories';
import Cart from './Screen/Cart';
import Settings from './Screen/Settings';
import Orders from './Screen/Orders';

const color = {
  ACTIVE: '#147EFB',
  INACTIVE: '#CCC'
}

const CategoryStack = createStackNavigator(
  {
    Categories,
    Category,
  },
  {
    initialRouteName: 'Categories'
  }
);
CategoryStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <Icon name='ios-home' type='ionicon' size={24} color={focused ? color.ACTIVE : color.INACTIVE}/>
  )
}

const CartStack = createStackNavigator({ Cart });
CartStack.navigationOptions = {
  tabBarLabel: 'Cart',
  tabBarIcon: ({ focused }) => (
    <View style={{position: 'relative'}}>
      <Icon name='ios-cart' type='ionicon' size={24} color={focused ? color.ACTIVE : color.INACTIVE}/>
      <CartContext.Consumer>
        {({ count }) => (
            <Badge
              value={count}
              status="error"
              containerStyle={{ position: 'absolute', top: -4, right: -10 }}
            />
        )}
      </CartContext.Consumer>
    </View>
  )
}

const SettingStack = createStackNavigator({ Settings, SignIn, SignUp, Create, Load });
SettingStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <Icon name='ios-settings' type='ionicon' size={24} color={focused ? color.ACTIVE : color.INACTIVE}/>
  )
}

const OrderStack = createStackNavigator({ Orders })
OrderStack.navigationOptions = {
  tabBarLabel: 'Orders',
  tabBarIcon: ({ focused }) => (
    <Icon name='ios-albums' type='ionicon' size={24} color={focused ? color.ACTIVE : color.INACTIVE}/>
  )
}

const AppNavigator = createBottomTabNavigator(
  {
    CategoryStack,
    CartStack,
    OrderStack,
    SettingStack
  }
)

export default AppNavigator;