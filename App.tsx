import {Federated} from '@callstack/repack/client';
import {lazy, Suspense} from 'react';
import {View, ActivityIndicator, Text} from 'react-native';

const App1 = lazy(() => Federated.importModule('app1', './App'));

const App = () => {
  return (
    <View>
      <Text>Hellow</Text>
      <Suspense fallback={<ActivityIndicator />}>
        <App1 />
      </Suspense>
    </View>
  );
};

export default App;
