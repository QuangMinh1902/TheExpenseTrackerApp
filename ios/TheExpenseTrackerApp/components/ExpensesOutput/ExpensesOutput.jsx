import {StyleSheet, View} from 'react-native';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';
import React from 'react';
import {GlobalStyles} from '../../constants/styles';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2022-05-12'),
  },
  {
    id: 'e2',
    description: 'A pair of trousers',
    amount: 89.29,
    date: new Date('2022-05-13'),
  },
  {
    id: 'e3',
    description: 'Some bananas',
    amount: 5.99,
    date: new Date('2022-05-14'),
  },
  {
    id: 'e4',
    description: 'A book',
    amount: 14.99,
    date: new Date('2022-05-15'),
  },
  {
    id: 'e5',
    description: 'A book',
    amount: 14.99,
    date: new Date('2021-03-10'),
  },
  {
    id: 'e6',
    description: 'A book',
    amount: 14.99,
    date: new Date('2023-05-11'),
  },
  {
    id: 'e7',
    description: 'A book',
    amount: 14.99,
    date: new Date('2022-04-13'),
  },
];

export default function ExpensesOutput({expensesPeriod}) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
