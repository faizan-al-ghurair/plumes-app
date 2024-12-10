import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {WebView} from 'react-native-webview';

const Colors = {
  white: '#FFFFFF',
  light: '#FFFFFF',
  lighter: '#FFFFFF',
  black: '#000000',
  darker: '#000000',
};

export default function HomeScreen(props: any) {
  const isDarkMode = useColorScheme() === 'light';
  // const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  console.log('pp->', props?.route?.params);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.container}>
        <WebView
          ref={webview => {
            webview = webview;
          }}
          source={{uri: 'https://www.theplumes.ae'}}
          // source={{uri: 'https://www.google.com'}}
          style={styles.webview}
          onLoad={() => console.log('Page loaded')}
          onError={error => console.log('Error loading page', error)}
          startInLoadingState={true}
        />
      </View>

      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home Screen</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  container: {
    backgroundColor: 'red',
    width: '100%',
    height: '100%',
    // flex: 1,
  },
  webview: {
    width: '100%',
    height: '100%',
  },
});
