import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Button, Text } from 'native-base';
import Colors from '../../constants/Colors';


export default function SubmitButton(props) {
    return (
        <Button
            rounded
            bordered
            block
            style={{ 
                height: 50,
                marginTop: 20,
                borderWidth: 1,
                borderColor: props.disabled ? '#888' : Colors.tintColor
            }}
            onPress={ props.onClick }
            disabled={ props.disabled }
        >
            {
                props.loading
                    ? <ActivityIndicator/>
                    : <Text style={{ color: props.disabled ? '#888' : Colors.tintColor }}>{ props.text }</Text>
            }
        </Button>
    );
}