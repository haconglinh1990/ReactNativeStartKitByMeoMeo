import React from 'react';
import { Text, Input, Item } from 'native-base';
import EStyleSheet from "react-native-extended-stylesheet";
import PropTypes from 'prop-types';


export default function InputWithLabel(props) {
    return (
        <Item 
            rounded 
            style={[ styles.container, props.highlighted ? styles.highlighted : null ]}
        >
            <Text style={[ styles.label, { fontSize: props.labelSize || 14 } ]}>
                { props.label }
            </Text>
            <Input
                placeholder={ props.placeholder || '' }
                style={[styles.input, { fontSize: props.fontSize || 22, color: props.textColor || 'white' }]}
                onChangeText={ props.onChangeText }
                placeholderTextColor={ EStyleSheet.value('$textColor') }
                value={ props.value }
                editable={ props.editable }
                maxLength={ props.maxLength || 128 }
                keyboardType={ props.keyboardType || 'default' }
                secureTextEntry={ props.secureTextEntry || false }
                autoCapitalize={"none"}
            />
        </Item>
    );
}

InputWithLabel.protoTypes = {
    label: PropTypes.string.isRequired,
    labelSize: PropTypes.number,
    placeholder: PropTypes.string,
    onChangeText: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    maxLength: PropTypes.number,
    keyboardType: PropTypes.string,
    secureTextEntry: PropTypes.string,
    editable: PropTypes.bool.isRequired,
    fontSize: PropTypes.number,
    textColor: PropTypes.string
};

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
    input: {
        paddingLeft: 10,
        color: "#ffff",
        fontSize: 22
    },
    label: {
        fontSize: 14,
        marginLeft: 16,
        marginRight: 8,
        color: '$tintColor',
        fontWeight: '500'
    }
});
