import { TouchableOpacity, Text, View, Button } from "react-native";
import React, { useState, useEffect} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {Ionicons,Fontisto} from '@expo/vector-icons';
import { ScrollView } from "react-native";
import Welcome from "../components/home/Welcome";
import Carousel from "../components/home/Carousel";
import Heading from "../components/home/Heading";
import styles from "./home.style";
import ProductRow from "../components/products/ProductRow";
import { Camera } from "expo-camera";
import { SIZES } from "../constants";

const Home = () => {

    const [hasPermission, setHasPermission] = useState(null);
    const[type, setType]=useState(Camera.Constants.Type.back);

    useEffect(()=>{
        (async()=>{
            const {status}=await Camera.requestCameraPermissionsAsync();
            setHasPermission(status==='granted');
        })();
    }, []);

    if(hasPermission===null){
        return <View/>
    }
    if(hasPermission===false){
        return <Text>No access to camera</Text>
    }

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
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: SIZES.medium }}>
                    <Camera style={{ width: 300, height: 400 }} type={type} />
                    <Button style={{width: 20, height: 20, padding: SIZES.small}} title="Click" />
                </View>
                <Carousel/>
                <Heading/>
                <ProductRow/>
                
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home
