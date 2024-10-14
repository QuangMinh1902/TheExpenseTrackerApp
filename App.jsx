import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RecentExpenses from './ios/TheExpenseTrackerApp/screens/RecentExpenses';
import AllExpenses from './ios/TheExpenseTrackerApp/screens/AllExpenses';
import ManageExpenses from './ios/TheExpenseTrackerApp/screens/ManageExpenses';
import {GlobalStyles} from './ios/TheExpenseTrackerApp/constants/styles';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconButton from './ios/TheExpenseTrackerApp/components/UI/IconButton';

Icon.loadFont();

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

// Định nghĩa các icon component ra ngoài hàm ExpensesOverview
const RecentExpensesIcon = ({color, size}) => (
  <Icon name="comments" size={size} color={color} />
);

const AllExpensesIcon = ({color, size}) => (
  <Icon name="times" size={size} color={color} />
);

function ExpensesOverview() {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        headerTintColor: 'white',
        tabBarStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: ({tintColor}) => (
          <IconButton
            icon="plus"
            size={20}
            color={tintColor}
            onPress={() => {}}
          />
        ),
      }}>
      <BottomTabs.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          tabBarIcon: RecentExpensesIcon,
        }}
      />
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: 'All expenses',
          tabBarLabel: 'All expenses',
          tabBarIcon: AllExpensesIcon,
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="ExpensesOverview"
            component={ExpensesOverview}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="ManageExpenses" component={ManageExpenses} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
