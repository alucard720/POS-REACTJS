import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView, View, Text, StyleSheet } from 'react-native'
import Color from '../constants/Color'

function HomeScreen() {
  return (
   <SafeAreaView>
   
    <ScrollView >
    <Text style ={styles.itemText}>HomeScreen</Text>

    </ScrollView>

    


   </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  txt1: {
    color: Color.black,
    fontSize: 20,
  },
  txtSearch: {
    color: Color.primary,
    fontSize: 20,
    marginStart: 10,
    flexGrow: 1,
  },
  searchContainer: {
    backgroundColor: Color.searchBackground,
    marginTop: 10,
    borderRadius: 30,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  discountText: {
    color: Color.black,
    fontSize: 18,
    paddingHorizontal: 20,
  },
  viewAllText: {
    color: Color.primary,
    fontSize: 16,
    paddingEnd: 20,
  },
  itemContainer: {
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: Color.backgroundColor,
    margin: 10,
    height: 150,
    width: 200,
  },
  itemTextBackground: {
    backgroundColor: "rgba(0,0,0,0.3)",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  itemText: {
    color: Color.white,
    fontSize: 20,
  },
  item3Container: {
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: Color.backgroundColor,
    margin: 10,
    height: 150,
    width: 150,
  },
});
export default HomeScreen