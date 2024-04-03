import {View, Text} from 'react-native'
import React from 'react'
import styles from './welcome.style'
import { COLORS, SIZES } from '../../constants'

const Welcome=() =>{
    return(
        <View>
            <View style={styles.container}>
                <Text style={styles.welcometext(COLORS.black, SIZES.xSmall)}>
                    {" "}
                    Find The Most
                </Text>
                <Text style={styles.welcometext(COLORS.primary, 0)}>
                    {" "}
                    Luxurious Furniture
                </Text>
            </View>

            <View>
                
            </View>
        </View>
    )

}

export default Welcome