import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.container}>
          <Text style={styles.kicker}>UX/UI Gym</Text>
          <Text style={styles.title}>Base movil lista</Text>
          <Text style={styles.body}>
            Expo, React Native, TypeScript, navegacion, gestos, animaciones,
            bottom sheets y listas performantes ya estan instalados.
          </Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  kicker: {
    marginBottom: 8,
    color: '#525252',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0,
    textTransform: 'uppercase',
  },
  title: {
    color: '#000000',
    fontSize: 32,
    fontWeight: '800',
    letterSpacing: 0,
    lineHeight: 40,
  },
  body: {
    maxWidth: 360,
    marginTop: 12,
    color: '#262626',
    fontSize: 16,
    letterSpacing: 0,
    lineHeight: 24,
  },
});
