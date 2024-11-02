
import { useState } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View ,Text} from 'react-native';
import { Foo } from './screens/foo';
import { Roo } from './screens/roo';
import { Coo } from './screens/coo';


 

export default function App() {

 
const data = Array(3).fill(null).map((_,i)=> ({sayi:i}))
const[val,setVal]=useState(0)
 
const[fcount,setfcount]=useState([])
 const[forder,setforder]=useState([])


  return ( 

 

    <View style={styles.container}>
     <FlatList
     horizontal
     data={data}
     renderItem={({item,index})=> <Foo  item={item.sayi}  tofetch={setVal} />}
     />


<Roo num={val} setfcount={setfcount} setforder={setforder}  />


     

<Coo order={forder} count={fcount}/>


    </View>

  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },

  opacity_1:{

    backgroundColor:`red`,
    position:`absolute`,
    right:9,
    bottom:100,
    width:90,
    height:34,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:25
  }
});
