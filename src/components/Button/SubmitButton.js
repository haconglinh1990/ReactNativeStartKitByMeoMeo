import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Button, Text } from 'native-base';


export default function SubmitButton(props) {
    return (
        <Button
            rounded
            primary
            block
            large
            style= {{
                marginTop: 7,
                height: 50,
                alignItems: 'center'
            }}
            onPress={ props.onClick }
            disabled={ props.disabled }
        >
            {
                props.loading
                    ? <ActivityIndicator/>
                    : <Text style={{ fontSize: 16, fontWeight: '900' }}>
                            { props.text.toUpperCase() }
                      </Text>
            }
        </Button>
    );
}