/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-get-random-values';

import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

import {Realm} from 'realm';

const TaskSchema = {
  name: 'Task',
  properties: {
    _id: 'objectId',
    name: 'string',
    description: 'string?',
    completed: 'bool',
    createdAt: 'date',
    updatedAt: 'date?',
  },
  primaryKey: '_id',
};

function App(): JSX.Element {
  useEffect(() => {
    (async () => {
      const realm = new Realm({schema: [TaskSchema]});
    })();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Working</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
