import {View, Text, TouchableOpacity, TextInput} from 'react-native'
import React, { useState } from 'react'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import styles from './welcome.style'
import { COLORS, SIZES } from '../../constants'
import {Feather, Ionicons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Welcome=() =>{
    const navigation = useNavigation();
    
    const openCamera = async()=>{
        const result= await launchCamera();
    };

    return(
        <View>
            <View style={styles.container}>
                <Text style={styles.welcometext(COLORS.black, SIZES.xSmall)}>
                Find The Most
                </Text>
                <Text style={styles.welcometext(COLORS.primary, 0)}>
                Luxurious Furniture
                </Text>
            </View>

            <View style={styles.searchContainer}>
                <TouchableOpacity>
                    <Feather name="search" size={24} style={styles.searchIcon}/>
                </TouchableOpacity>
                <View style={styles.searchWrapper}>
                    <TextInput
                    style={styles.searchInput}
                    value=""
                    onPressIn={()=>navigation.navigate("Search")}
                    placeholder="What are you looking for?"
                    />
                </View>
                <View>
                    <TouchableOpacity style={styles.searchBtn} onPress={openCamera}>
                        <Ionicons name="camera-outline" size={SIZES.xLarge} color={COLORS.offwhite}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )

}

export default Welcome