import { StyleSheet } from "react-native";
import { COLORS,SIZES } from "../../constants";

const styles=StyleSheet.create({
    container:{
        width:"100%",
    },
    welcometext:(color,top)=>({
        fontFamily:"bold",
        fontSize:SIZES.xxLarge -5,
        marginTop:top,
        color:color,
        marginHorizontal:12
    }),
    searchContainer:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor:COLORS.secondary,
        borderRadius:SIZES.medium,
        // marginVertical:SIZES.small
    },
    searchIcon:{
        marginLeft: 15,
        color:"green",
        // marginTop:SIZES.small
    },
    searchWrapper:{
        flex: 1,
        backgroundColor:COLORS.secondary,
        borderRadius:SIZES.small,
        marginRight:SIZES.small
    },
    searchInput:{
        fontFamily:"regular",
        // height:"100%",
        // width:"100%",
        paddingHorizontal:SIZES.small
    },
    searchBtn:{
        width:"fit-content",
        // height:"100%",
        padding:7,
        marginTop:0,
        marginRight: 25,
        borderRadius:SIZES.medium,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:COLORS.primary,

    }

})

export default styles