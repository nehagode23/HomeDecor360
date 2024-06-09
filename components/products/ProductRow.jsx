import { ActivityIndicator, FlatList, Text, View } from "react-native";
import React from "react";
import styles from '../products/productRow.style'
import { COLORS, SIZES } from "../../constants";
import ProductCardView from "./ProductCardView";
import useFetch from "../../hook/useFetch";

const ProductRow = ()=>{
    const {data, isLoading, error} = useFetch()
    const products=[1, 2, 3, 4]
    return(
            <View style = {{marginTop: SIZES.medium}}> 
                <FlatList
                data={products}
                renderItem={({item})=> <ProductCardView />}
                horizontal
                contentContainerStyle={{columnGap:SIZES.medium}}
                />
            </View>
    )
}

export default ProductRow

