import { Image, Text, View, TouchableOpacity } from "react-native";
import React, {useState} from "react";
import {Fontisto, Ionicons, SimpleLineIcons, MaterialCommunityIcons} from '@expo/vector-icons';
import styles from "./productDetails.style";
import { COLORS, SIZES } from "../constants";
import { useState } from "react";

const ProductDetails=({navigation})=>{
    const [count, setCount]=useState(1)

    const increment=()=>{
        setCount(count+1)
    }
    const decrement=()=>{
        if (count>1){
            setCount(count-1)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.upperRow}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Ionicons name='chevron-back-circle' size={30}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{navigation.goBack()}}>
                <Ionicons name='heart' size={30} color={COLORS.primary}/>
                </TouchableOpacity>

            </View>
            <Image
            source={{uri:'https://www.freepik.com/free-photo/living-room-mid-century-style-with-warm-colors-ai-generative_41369780.htm#query=furniture&position=19&from_view=keyword&track=sph&uuid=8a8b6ffb-5ae1-4e86-9ffe-59ae9891b40b'}}
            style={styles.image}
            />

            <View style={styles.details}>
            <View style={styles.titleRow}>
                <Text style={styles.title}>Product</Text>
                <View style={styles.priceWrapper}>
                <Text style={styles.price}>Rs. 600</Text>
                </View>

                <View style={styles.ratingRow}>
                    <View style={styles.rating}>
                        {[1,2,3,4,5].map((index)=>(
                            <Ionicons
                            key={index}
                            name='star'
                            size={24}
                            color='gold'/>
                        ))}
                    <Text style={styles.ratingText}>(4.9)</Text>
                    </View>

                    <View style={styles.rating}>
                        <TouchableOpacity onPress={()=>decrement}>
                            <SimpleLineIcons 
                            name="minus"
                            size={20}/>
                        </TouchableOpacity>
                    <Text style={styles.ratingText}> {count} </Text>
                    <TouchableOpacity onPress={()=>increment}>
                            <SimpleLineIcons 
                            name="plus"
                            size={20}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.descriptionWrapper}>
                    <Text style={styles.description}>Description</Text>
                    <Text style={styles.descText}>
                        The product is a new available fvne erijef jkwen.
                    </Text>
                </View>

                <View style={{marginBottom:SIZES.small}}>
                    <View style={styles.location}>
                        <View style={{flexDirection:'row'}}>
                        <Ionicons name='location-outline' size={20}/>
                        <Text>Delhi</Text>
                        </View>

                        <View style={{flexDirection:'row'}}>
                        <MaterialCommunityIcons name='truck-delivery-outline' size={20}/>
                        <Text>Free Delivery</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.cartRow}>
                    <TouchableOpacity onPress={()=>{}} style={styles.cartBtn}>
                        <Text style={styles.cartTitle}>Buy Now</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{}} style={styles.addToCart}>
                        <Fontisto name="shopping-bag" size={22} color={COLORS.lightWhite}/>
                    </TouchableOpacity>

                </View>
            </View>
            </View>
            
        </View>
    )
}

export default ProductDetails