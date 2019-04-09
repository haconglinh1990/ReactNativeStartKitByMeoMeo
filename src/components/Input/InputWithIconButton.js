import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Input, Item, Text } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EStyleSheet from 'react-native-extended-stylesheet';

export default function InputWithIconButton(props) {
    return (
        <Item
            rounded
            style={[styles.container, props.highlighted ? styles.highlighted : null]}
        >
            <Ionicons
                name={ props.iconName }
                size={30}
                style={{ marginLeft: 28, marginRight: 14 }}
                color={EStyleSheet.value('$tintColor')}                
            />
            
            <TouchableOpacity style={ styles.button } onPress={ props.onClick }>
                <Text style={ styles.buttonText }>
                    { props.text }
                </Text>
            </TouchableOpacity>
            
            <Input
                placeholder={ props.placeholder }
                style={[styles.input, { fontSize: props.fontSize || 22 }]}
                maxLength={props.maxLength || 128}
                editable={props.editable !== false}
                onChangeText={ props.onChangeText }
                placeholderTextColor={ EStyleSheet.value('$textColor') }
                value={ props.value }
                keyboardType={ props.keyboardType }
                autoCapitalize={"none"}
            />
        </Item>
    );
}

const styles = EStyleSheet.create({
    container: {
        flexDirection: 'row',
        borderRadius: 25,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginTop: 5,
        marginBottom: 5,
        borderWidth: 0,
        borderColor: 'transparent'
    },
    highlighted: {
        borderColor: '$tintColor'
    },
    button: {
        height: 35,
        minWidth: 35,
        borderRadius: 10,
        backgroundColor: '$tintLightColor',
        flexDirection: 'row',
        justifyContent: 'center', 
        alignItems: 'center'
    },
    buttonText: {
        color: '$tintColor'
    },
    input: {
        paddingLeft: 10,
        color: "#FFF"
    }
});
