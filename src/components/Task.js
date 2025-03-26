import moment from "moment-timezone"
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native"

import Icon from 'react-native-vector-icons/FontAwesome'

export default props => {

    const date = props.doneAt ? props.doneAt : props.estimateAt
    const formatteDate = moment(date).tz('America/Sao_Paulo').locale
    ('pt-br').format('ddd, D [de] MMMM')

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={() => console.log('status')}>
                <View style={styles.checkContainer}>
                    {getCheckView(new Date())}
                </View>
            </TouchableWithoutFeedback>
            <View>
                <Text style={styles.desc}>{props.desc}</Text>
                <Text style={styles.date}>{formatteDate}</Text>
            </View>
        </View>
    )
}

function getCheckView(doneAt){
    if(doneAt != null){
        return(
            <View style={styles.done}>
                <Icon name='check' size={20} color='#fff'></Icon>
            </View>
        )
    } else{
        return(
            <View style={styles.pending}>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderColor: '#AAA',
        borderBottomWidth: 1,
        alignItems: 'center',
        paddingVertical: '10',
        backgroundColor: '#FFF'
    },
    checkContainer: {
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    pending: {
        height: 25,
        width: 25,
        borderRadius: 13,
        borderWidth: 1,
        borderColor: '#555'
    },
    done:{
        height:25,
        width:25,
        borderRadius:13,
        backgroundColor:'#4d7031',
        alignItems:'center',
        justifyContent:'center'
    },
    desc: {
        color: '#222',
        fontSize: 15
    },
    date: {
        color: '#555',
        fontSize: 12
    }
})