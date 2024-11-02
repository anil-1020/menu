import {  useState } from "react"
import { View ,Text, TouchableOpacity, TextInput,StyleSheet} from "react-native"





export const Roo=({num ,setfcount,setforder})=>{

const[visible,setVisible]=useState(false);
const[count,setCount]=useState([]);
 const[order,setORder]=useState([])

 

 const ReadyOrder=()=>{
    setforder(order)
    setfcount(count)
 }
 

return(

    <View style={styles.container}>

 
 { visible ? <View style={{backgroundColor:`green`,width:340,height:520,alignItems:"center",justifyContent:"center"}}>
    <Text >Please enter quantity:</Text>

    <TextInput placeholder="how much/many you want" inputMode="numeric" value={count} onChangeText={(elen) => setCount([...count,elen])}
     style={{backgroundColor:`#eaeaea` ,width:240,height:80,borderRadius:24,paddingLeft:40}}/>

     <TouchableOpacity onPress={()=>{setVisible(false),ReadyOrder()} } style={styles.opacity}><Text style={{color:`white`,fontSize:24}}>OK</Text></TouchableOpacity>
 </View>  : 
 

 <View> 
  
       {num === 0 ?  (    <View> 
         <TouchableOpacity  onPress={()=> {setORder([...order,`Kebap`]),setVisible(true)}}  style={{marginBottom:10}}><Text style={{fontWeight:"bold",fontSize:44}}>Kebap</Text></TouchableOpacity>
         <TouchableOpacity   onPress={()=> {setORder([...order,`Doner`]),setVisible(true)}} style={{marginBottom:10}}><Text style={{fontWeight:"bold",fontSize:44}}>Doner</Text></TouchableOpacity>
         <TouchableOpacity   onPress={()=> {setORder([...order,`Corba`]),setVisible(true)}}  style={{marginBottom:10}}><Text style={{fontWeight:"bold",fontSize:44}}>Corba</Text></TouchableOpacity>
         <TouchableOpacity   onPress={()=> {setORder([...order,`Kofte`]),setVisible(true)}}  style={{marginBottom:10}}><Text style={{fontWeight:"bold",fontSize:44}}>Kofte</Text></TouchableOpacity>

         </View>) : null  }



         {num === 1 ?  (    <View> 
         <TouchableOpacity onPress={()=> {setORder([...order,`Baklava`]),setVisible(true)}}   style={{marginBottom:10}}><Text style={{fontWeight:"bold",fontSize:44}}>Baklava</Text></TouchableOpacity>
         <TouchableOpacity  onPress={()=> {setORder([...order,`Kunefe`]),setVisible(true)}}  style={{marginBottom:10}}><Text style={{fontWeight:"bold",fontSize:44}}>Kunefe</Text></TouchableOpacity>
         <TouchableOpacity  onPress={()=> {setORder([...order,`Dondurma`]),setVisible(true)}}  style={{marginBottom:10}}><Text style={{fontWeight:"bold",fontSize:44}}>Dondurma</Text></TouchableOpacity>
          

         </View>) : null  }
 


         {num === 2 ?  (    <View> 
         <TouchableOpacity onPress={()=> {setORder([...order,`Bira`]),setVisible(true)}}   style={{marginBottom:10}}><Text style={{fontWeight:"bold",fontSize:44}}>Bira</Text></TouchableOpacity>
         <TouchableOpacity onPress={()=> {setORder([...order,`Ayran`]),setVisible(true)}}   style={{marginBottom:10}}><Text style={{fontWeight:"bold",fontSize:44}}>Ayran</Text></TouchableOpacity>
         <TouchableOpacity  onPress={()=> {setORder([...order,`Su`]),setVisible(true)}}  style={{marginBottom:10}}><Text style={{fontWeight:"bold",fontSize:44}}>Su</Text></TouchableOpacity>
         <TouchableOpacity  onPress={()=> {setORder([...order,`Kola`]),setVisible(true)}}  style={{marginBottom:10}}><Text style={{fontWeight:"bold",fontSize:44}}>Kola</Text></TouchableOpacity>
         

         </View>) : null  }
 
         </View>
} 

 
<TouchableOpacity style={styles.opacity_1}  onPress={()=>{setfcount([]),setforder([]),setCount([]),setORder([])}} >
             <Text>SEND</Text>
    </TouchableOpacity>


    </View>
)


}


const styles = StyleSheet.create({
  
    container:{
width:300,
height:300,
backgroundColor:`#9EF7FF`,
marginBottom:130,
borderRadius:25,
justifyContent:"center",
alignItems:"center"
    },


    opacity:{

        backgroundColor:`blue` ,
        width:100,
        height:80,
        borderRadius:24,
        justifyContent:"center",
        alignItems:"center",
        marginTop:50
    },
  

    opacity_1:{
  
      backgroundColor:`red`,
      position:`absolute`,
      right:0,
      bottom:1,
      width:90,
      height:34,
      alignItems:'center',
      justifyContent:'center',
      borderRadius:25
    }
  });
  