import { StyleSheet } from "react-native";
import { COLORS,SIZES } from "../../constants";

const styles=StyleSheet.create({
    container:{
        width:"100%"
    },
    welcometext:(color,top)=>({
        fontFamily:"bold",
        fontSize:SIZES.xxLarge -5,
        marginTop:top,
        color:color,
        marginHorizontal:12
    }),
    searchContainer:{
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:COLORS.secondary,
        borderRadius:SIZES.medium,
        marginVertical:SIZES.medium
    },
    searchIcon:{
        marginHorizontal:10,
        color:"green",
        marginTop:SIZES.small
    },
    searchWrapper:{
        flex:1,
        backgroundColor:COLORS.secondary,
        borderRadius:SIZES.small,
        marginRight:SIZES.small
    },
    searchInput:{
        fontFamily:"regular",
        height:"100%",
        width:"100%",
        paddingHorizontal:SIZES.small
    },
    searchBtn:{
        width:"50%",
        height:"100%",
        borderRadius:SIZES.medium,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:COLORS.primary,

    }

})

export default styles