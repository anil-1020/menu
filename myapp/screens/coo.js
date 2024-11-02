 
import { View ,Text, TouchableOpacity, FlatList, Button} from "react-native"


export const Coo=({order,count})=>{
 
    return(

        <View style={{backgroundColor:`green`,width:350,height:90,position:`absolute`,bottom:2,marginBottom:8}}>

            <Text style={{fontSize:24}}>Orders:</Text>
           <FlatList
           horizontal
           data={order}
           renderItem={({item,index}) => {return (
<TouchableOpacity style={{backgroundColor:`white` ,height:25,marginRight:6}}>
    <Text>{item} x {count[index]} </Text>
</TouchableOpacity>

           )}}
           />
 
        </View>
    )
}