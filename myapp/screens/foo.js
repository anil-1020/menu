import { View,Text, TouchableOpacity, ImageBackground,StyleSheet } from "react-native"
 

export const Foo=(propsm)=>{
 
 
    return(
<View style={{height:90,marginTop:120,justifyContent:"center",alignItems:"center",borderRadius:25}}> 

 

        <View  style={{width:240,height:140,alignItems:"center",justifyContent:"center",marginLeft:10,borderRadius:25}}>

     {  propsm.item === 0 ? ( 
<TouchableOpacity  onPress={()=> propsm.tofetch(0)}>
     <ImageBackground source={require(`./fotos/yemek.jpg`)}   style={{width:240,height:240,borderRadius:25,alignItems:`center`,justifyContent:"center"}}>
     <Text  style={{color:`red`,fontSize:54,fontWeight:"bold"}}>Foods</Text>
     </ImageBackground> 
      </TouchableOpacity>
)  : null }

{  propsm.item === 1 ? ( 
<TouchableOpacity  onPress={()=>  propsm.tofetch(1)}  >
     <ImageBackground source={require(`./fotos/tatli.jpg`)}   style={{width:240,height:240,borderRadius:25,alignItems:`center`,justifyContent:"center"}}>
     <Text  style={{color:`green`,fontSize:54,fontWeight:"bold"}}>Dessert</Text>
     </ImageBackground> 
      </TouchableOpacity>
)  : null }


{  propsm.item === 2 ? ( 
<TouchableOpacity   onPress={()=>  propsm.tofetch(2)}>
     <ImageBackground source={require(`./fotos/icecek.jpg`)}   style={{width:240,height:240,borderRadius:25,alignItems:`center`,justifyContent:"center"}}>
     <Text  style={{color:`blue`,fontSize:54,fontWeight:"bold"}}>Beverage</Text>
     </ImageBackground> 
      </TouchableOpacity>
)  : null }


 

        </View>
 
 </View>

    )
}

const styles = StyleSheet.create({

    opacity_1: {
        backgroundColor:`blue`,
            justifyContent:"center",
            alignItems:"center",
            width:240,
            height:90,
            position:`absolute`,
            bottom:0,
            borderBottomRightRadius:25,
            borderBottomLeftRadius:25
      },
})