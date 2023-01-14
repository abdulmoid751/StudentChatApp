// In App.js in a new project

import * as React from 'react';
import { useEffect, useState } from 'react';
import { TouchableOpacity,Image, View, Text, FlatList,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Studentdata from './mock-student-data.json';

const ObjStudentdata =Studentdata;


const Stack = createNativeStackNavigator();

function App() 
{
  const [selectedId, setSelectedId] = useState();
  const FunSetSelectedID = (itemID,navigation) => {
    console.log(navigation.navigation);
    console.log(itemID.rollNumber);
    setSelectedId(itemID.rollNumber);
    console.log(selectedId);
    navigation.navigation.navigate('Details',{Data:itemID})
  
   }
   const renderItem = (item ,index ,navigation) => (

  
    <TouchableOpacity onPress={() => FunSetSelectedID(item,navigation)}>
      <View style={styles.itemBox }>
        <View style={styles.ViewImage}>
          <Image
            style={styles.tinyLogo}
            source={{ uri: item.picture }}
          />
  
        </View>
        <View style={styles.ViewContent}>
          <View style={styles.ViewContentLeft}>
          <Text style={styles.titleHeader}>First Name</Text>
          <Text style={styles.title}>{item.firstName}</Text>
          <Text style={styles.titleHeader}>Class</Text>
          <Text style={styles.title}>{item.class}</Text>
  
          </View>
          <View style={styles.ViewContentRight}>
          <Text style={styles.titleHeader}>Last Name</Text>
          <Text style={styles.title}>{item.lastName}</Text>
          <Text style={styles.titleHeader}>Roll Number</Text>
          <Text style={styles.title}>{item.rollNumber}</Text>
  
          </View>
  
        
        </View>
      </View>
    </TouchableOpacity>
  );
  
  
function HomeScreen(navigation ) {
// console.log(navigation);
  return (
    <View style={{ flex: 1 }}>
       <FlatList
        data={ObjStudentdata}
        renderItem={({item,index})=>renderItem( item,index,navigation)}
      
      />
    
    </View>
  );
}
function DetailsScreen(navigation ) {
  console.log(navigation);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{navigation.route.params.Data.firstName}</Text>
      <Text>{navigation.route.params.Data.lastName}</Text>
    </View>
  );
}
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  ViewImage: {
    marginRight: 20,
    borderRadius:10
  },
  ViewContent: {
    marginHorizontal: 10,
    flexDirection: 'row',
  },
  ViewContentLeft: {
    marginHorizontal: 10,
   
  },
  ViewContentRight: {
    marginHorizontal: 10,

  },
  container: {
    flex: 1,
    marginTop:20,
    //marginTop: StatusBar.currentHeight,
    // alignItems: 'center',
    // justifyContent: 'center',
    marginHorizontal: 10,
  },
  itemBox: {
    backgroundColor: 'lightgrey',
    padding: 10,
    marginVertical: 1,
    // marginHorizontal: 16,
    borderRadius: 10,
    flexDirection: 'row'
  },
  itemBoxSelected: {
   // backgroundColor: 'green',
    padding: 10,
    marginVertical: 8,
    // marginHorizontal: 16,
    borderRadius: 10,
    flexDirection: 'row'
  }
  ,
  title: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'normal'
  },
  titleHeader: {
    fontSize: 18,
    color: 'green',
    fontWeight: 'bold',
  },
  category: {
    fontSize: 15,
    color: '#fff',
  },
  price:
  {
    fontSize: 20,
    color: '#fff',
  },
  ListHeader:
  {
    fontSize: 40,

  }, 
  tinyLogo: {
    width: 100,
    height: 100,
    borderRadius:50,
  }
});
export default App;