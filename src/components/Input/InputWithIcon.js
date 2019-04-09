import React from 'react';
import { Input, Item } from 'native-base';
import CustomIcon from '../../icons/CustomIcon';
import EStyleSheet from "react-native-extended-stylesheet";
import PropTypes from 'prop-types';


export default function InputWithIcon(props) {
    return (
        <Item
            rounded
            style={[styles.container, props.highlighted ? styles.highlighted : null]}
        >
            <CustomIcon
                name={props.iconName}
                color={props.iconColor || EStyleSheet.value('$tintColor')}
                size={25}
                style={styles.icon}
            />
            <Input
                placeholder={props.placeholder || ''}
                style={[styles.input, { fontSize: props.fontSize || 22 }]}
                onChangeText={props.onChangeText}
                placeholderTextColor={props.placeholderTextColor || EStyleSheet.value('$textColor')}
                value={props.value}
                maxLength={props.maxLength || 128}
                keyboardType={props.keyboardType || 'default'}
                secureTextEntry={props.secureTextEntry || false}
                editable={props.editable !== false}
                autoCapitalize = {"none"}
            />
        </Item>
    );
}

InputWithIcon.protoTypes = {
    iconName: PropTypes.string.isRequired,
    iconColor: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onChangeText: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    format: PropTypes.string,
    keyboardType: PropTypes.string,
    secureTextEntry: PropTypes.string,
    editable: PropTypes.string,
    maxLength: PropTypes.number
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
    icon: {
        marginLeft: 24,
        marginRight: 14
    },
    input: {
        paddingLeft: 10,
        color: '#fff',
        fontSize: 22
    }
});
