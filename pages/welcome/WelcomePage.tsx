import { StyleSheet, Text, View, Dimensions, Button, TextInput, Image } from 'react-native';

interface IWelcomePage {
    firstName?: string;
    active?: boolean;
    data?: any[];
    dddd?: () => void;
}
export const WelcomePage = (props: IWelcomePage) => {

    const {width, height} = Dimensions.get('window')


    return (
        <View style={{backgroundColor: '#f4f4f4', height, position: 'relative'}}>
            <Text style={{position: 'absolute'}} >BHJUHJN</Text>
            <Text style={{
                color: "red"
            }}>
                {props.firstName || "hbnjnkjl\""}
            </Text> 
            <Button title='File Upload' />
            <TextInput style={{
                backgroundColor: 'red',
                height: 70
            }} />
            
            <View style={[
                style(props.active || false).article,
                {
                    display: props.active? 'flex':  'none',
                    height: 90,
                    width: width,
                }
            ]}>

            </View>          
        </View>
    )
}


const style = (active: boolean) => StyleSheet.create({
    article: {
        backgroundColor: active? 'red': 'blue',
        width:  '20%',
        borderColor: 'res',
    },
    other: {

    }
})
