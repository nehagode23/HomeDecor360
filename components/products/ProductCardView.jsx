import { TouchableOpacity, View, Text, Image } from "react-native";
import React from "react";
import styles from "./productCardView.style";
import {Ionicons} from "@expo/vector-icons";
import { COLORS } from "../../constants";
import { useNavigation } from "@react-navigation/native";

const ProductCardView =()=> {
    const navigation=useNavigation();

    return(
        <TouchableOpacity onPress={()=>{navigation.navigate("ProductDetails")}}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                    source={{uri:"https://www.freepik.com/free-photo/living-room-mid-century-style-with-warm-colors-ai-generative_41369780.htm#query=furniture&position=19&from_view=keyword&track=sph&uuid=8a8b6ffb-5ae1-4e86-9ffe-59ae9891b40b"}}
                    style={styles.image}
                    />

                </View>
                <View style={styles.details}>
                    <Text style={styles.title} numberOfLines={1}>Product </Text>
                    <Text style={styles.supplier} numberOfLines={1}>Product </Text>
                    <Text style={styles.price}>Rs. 150 </Text>

                </View>
                <TouchableOpacity style={styles.addBtn}>
                    <Ionicons name="add-circle" size={35} color={COLORS.primary}/>
                </TouchableOpacity>
            </View>

        </TouchableOpacity>
        
    )
}

export default ProductCardView