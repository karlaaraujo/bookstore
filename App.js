import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, View, FlatList, Image } from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: '1984',
    imageUrl: 'https://reactnative.dev/img/tiny_logo.png',},
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'A Metamorfose',
    imageUrl: 'https://reactnative.dev/img/tiny_logo.png',},
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Dom Casmurro',
    imageUrl: 'https://reactnative.dev/img/tiny_logo.png',},
  {
    id: 'a',
    title: 'Fahrenheit 451',
    imageUrl: 'https://reactnative.dev/img/tiny_logo.png',},
  {
    id: 'b',
    title: 'O Morro Dos Ventos Uivantes',
    imageUrl: 'https://reactnative.dev/img/tiny_logo.png',},
    {
      id: 'c',
      title: 'Cosmos',
      imageUrl: 'https://reactnative.dev/img/tiny_logo.png',},
];

// export default function App() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.menuBar}>
//         <Text style={styles.pageTitle}>Bookstore</Text>
//       </View>
//     <ScrollView style={styles.scrollView}>
//       <Text style={styles.text}>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//         eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//         minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//         aliquip ex ea commodo consequat. Duis aute irure dolor in
//         reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//         pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//         culpa qui officia deserunt mollit anim id est laborum.
//       </Text>
//     </ScrollView>
//   </SafeAreaView>
//   );
// }

const Item = (props) => (
  <View style={styles.item}>
    <Text style={styles.title}>{props.title}</Text>
    <Image style={styles.tinyLogo}
            source={{uri: props.imageUrl}}/>
  </View>
);

const App = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} imageUrl={item.imageUrl}/>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.menuBar}>
         <Image style={styles.tinyLogo}
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/512/3426/3426653.png',
        }}/>
        <Text style={styles.pageTitle}>Bookstore</Text>
     </View>
      <ScrollView style={styles.scrollView}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      </ScrollView>
      <StatusBar style='auto'/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: 'pink',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
  },
  title: {
    fontSize: 32,
  },
  scrollView: {
    backgroundColor: 'white',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 30,
  },
  menuBar: {
      width: '100%',
      height: 90,
      backgroundColor: 'steelblue',
      alignItems: 'center',
  },
  pageTitle: {
    fontSize: 40,
    color: 'white',
  },
  tinyLogo: {
    width: 40,
    height: 40,
  },
});

export default App;