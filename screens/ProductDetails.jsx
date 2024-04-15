import { Image, Text, View, TouchableOpacity } from "react-native";
import React, {useState} from "react";
import {Fontisto, Ionicons, SimpleLineIcons, MaterialCommunityIcons} from '@expo/vector-icons';
import styles from "./productDetails.style";
import { COLORS, SIZES } from "../constants";

const ProductDetails=({navigation})=>{
    const [count, setCount]=useState(1);

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
            source={{uri:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fdemiwall.com%2Fproducts%2Froyal-place-sheesham-wood-5-seater-sofa-set-for-living-room-furniture&psig=AOvVaw1T78SD_K_VafmoWt3cEGF3&ust=1713198094095000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKDL27COwoUDFQAAAAAdAAAAABAE'}}
            style={styles.image}
            />

            <View style={styles.details}>
            <View style={styles.titleRow}>
                <Text style={styles.title}>Product</Text>
                <View style={styles.priceWrapper}>
                <Text style={styles.price}>Rs. 600</Text>
                </View>
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
                        <TouchableOpacity onPress={()=>decrement()}>
                            <SimpleLineIcons 
                            name="minus"
                            size={20}/>
                        </TouchableOpacity>
                    <Text style={styles.ratingText}> {count} </Text>
                    <TouchableOpacity onPress={()=>increment()}>
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
            
    )
}

export default ProductDetails