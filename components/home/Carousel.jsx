import { StyleSheet, Text,View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";
import { COLORS } from "../../constants";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Carousel =()=>{
    const slides= [
        "../../assets/images/fn1.jpg",
        "https://www.freepik.com/free-photo/living-room-mid-century-style-with-warm-colors-ai-generative_41369780.htm#query=furniture&position=19&from_view=keyword&track=sph&uuid=8a8b6ffb-5ae1-4e86-9ffe-59ae9891b40b",
        "https://www.freepik.com/free-photo/stylish-scandinavian-living-room-with-design-mint-sofa-furnitures-mock-up-poster-map-plants-eleg_38852655.htm#query=furniture&position=6&from_view=keyword&track=sph&uuid=b88424d7-149a-4dbd-aa1b-e17f81009f73",

    ]
    return (
        <View style={styles.carouselContainer}>
            <SliderBox images={slides}
            dotColor={COLORS.primary}
            inactiveDotColor={COLORS.secondary}
            ImageComponentStyle={{borderRadius:15, width:"93%", marginTop:15}}
            autoplay
            circleLoop
            />
        </View>
    )
}

export default Carousel

const styles = StyleSheet.create({
    carouselContainer:{
        flex:1,
        alignItems:"center"
    }
})