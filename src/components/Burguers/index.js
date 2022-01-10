import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function burguers(props) {

function filterDesc(desc){
    if(desc.length < 27){
        return desc;
    }
    return `${desc.substring(0,24)}...`;
}

 return (
   <TouchableOpacity style={styles.container}>
       <Image
       source={props.img}
       style={styles.burguerImg}
       />
       <Text style={styles.burguerImg}>
           {filterDesc(props.children)}
        </Text>
       <View opacity={0.4}>
            <Text style={styles.burguerText}> 
                {props.cost} 
            </Text>
       </View>
   </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container:{
        paddingVertical: '2%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    burguerImg:{
        width: 175,
        height: 175,
    },
    burguerText:{
        fontSize: 16,
    }
});