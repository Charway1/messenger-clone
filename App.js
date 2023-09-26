import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './navigations/Navigator'
import AppContext from './context/Context';

export default function App() {
  return (
    <AppContext>
      <Navigator/>
    </AppContext>
  );
}

const styles = StyleSheet.create({
  
});

