import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

const styles= StyleSheet.create({
    container:{
        marginTop:10,
        flex:1,
        backgroundColor:COLORS.lightWhite
    },
    upperRow:{
        marginHorizontal:20,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        position:"absolute",
        top:SIZES.xLarge,
        width:SIZES.width -44,
        zIndex:999
    },
    image:{
        aspectRatio:1,
        resizeMode:"cover"
    },
    details:{
        marginTop:-SIZES.large,
        backgroundColor:COLORS.gray2,
        width:SIZES.width,
        borderTopLeftRadius:SIZES.medium,
        borderTopRightRadius:SIZES.medium
    },
    titleRow:{
        marginHorizontal:20,
        paddingBottom:SIZES.small,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        width:SIZES.width,
        top:7
    },
    title:{
        fontFamily:'bold',
        fontSize:SIZES.large,
    },
    priceWrapper:{
        backgroundColor:COLORS.secondary,
        borderRadius:SIZES.medium
    },
    price:{
        paddingHorizontal:10,
        fontFamily:'semibold',
        fontSize:SIZES.medium
    },
    ratingRow:{
        paddingBottom:SIZES.small,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:SIZES.width -10,
        top:5
    },
    rating:{
        top:SIZES.small,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        marginHorizontal:SIZES.small
    },
    ratingText:{
        color:COLORS.black,
        fontFamily:'medium',
        paddingHorizontal:SIZES.xSmall
    },
    descriptionWrapper:{
        marginTop:SIZES.small,
        marginHorizontal: SIZES.small
    },
    description:{
        fontFamily:'medium',
        fontSize:SIZES.medium,
    },
    descText:{
        fontFamily:'regular',
        fontSize:SIZES.small,
        textAlign:'justify',
        marginBottom:SIZES.xSmall
    },
    location:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:COLORS.secondary,
        marginHorizontal:12,
        padding:5,
        borderRadius:SIZES.large
    },
    cartRow:{
        paddingBottom:SIZES.small,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:SIZES.width,
    },
    cartBtn:{
        width:150,
        backgroundColor:COLORS.black,
        padding: SIZES.small/2,
        borderRadius: SIZES.large,
        marginLeft:12
    },
    cartTitle:{
        fontFamily:'bold',
        fontSize:SIZES.medium,
        color:'white',
        marginLeft:SIZES.small
    },
    addToCart:{
        width:37,
        height:37,
        borderRadius:50,
        margin:SIZES.small,
        backgroundColor:COLORS.black,
        alignItems:'center',
        justifyContent:'center'
    }

})

export default styles;