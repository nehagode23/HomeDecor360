import { TouchableOpacity, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {Ionicons,Fontisto} from '@expo/vector-icons';
import { ScrollView } from "react-native";
import Welcome from "../components/home/Welcome";
import Carousel from "../components/home/Carousel";
import Heading from "../components/home/Heading";
import styles from "./home.style";
import ProductRow from "../components/products/ProductRow";

const Home = () => {
    return(
        <SafeAreaView style={styles.area}>
            <View style={styles.appBarWrapper}>
                <View style={styles.appBar}>
                    <Ionicons name="location-outline" size={24}/>

                    <Text style={styles.location}>Mumbai, India</Text>

                    <View style={{alignItems:"flex-end"}}>
                        <View style={styles.cartCount}>
                            <Text style={styles.cartNumber}>8</Text>
                        </View>
                        <TouchableOpacity> 
                        <Fontisto name='shopping-bag' size={24}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            
            <ScrollView>
                <Welcome/>
                <Carousel/>
                <Heading/>
                <ProductRow/>
                
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home
