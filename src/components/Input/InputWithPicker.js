import React from 'react';
import { View } from 'react-native';
import { Input, Item, Text } from 'native-base';
import PropTypes from 'prop-types';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EStyleSheet from 'react-native-extended-stylesheet';
import RNPickerSelect from '../Picker';

export default function InputWithPicker(props) {
    return (
        <Item
            rounded
            style={[styles.container, props.highlighted ? styles.highlighted : null]}
        >
            <View style={styles.picker}>
                <RNPickerSelect
                    mode='dialog'
                    hideIcon={true}
                    items={props.itemList}
                    placeholder={{}}
                    disabled={props.disabled}
                    onValueChange={props.onChangePickerItem}
                >
                    <View style={styles.pickerItem}>
                        <Ionicons
                            name='ios-arrow-dropdown'
                            color={props.iconColor || EStyleSheet.value('$tintColor')}
                            size={24}
                            style={styles.icon}
                        />
                        <Text style={styles.label}>
                            {props.pickerText}
                        </Text>
                    </View>
                </RNPickerSelect>
            </View>
            
            <Input
                placeholder={ props.placeholder }
                style={[ styles.input, { fontSize: props.fontSize || 22 } ]}
                maxLength={props.maxLength || 128}
                editable={props.editable !== false}
                disabled={props.disabled}
                onChangeText={ props.onChangeValue }
                placeholderTextColor={ EStyleSheet.value('$textColor') }
                value={ props.value }
                keyboardType={ props.keyboardType }
            />
        </Item>
    );
}

InputWithPicker.protoTypes = {
    placeholder: PropTypes.string,
    highlighted: PropTypes.bool,
    editable: PropTypes.bool,
    disabled: PropTypes.bool,
    maxLength: PropTypes.number,
    iconColor: PropTypes.any,
    keyboardType: PropTypes.string,
    fontSize: PropTypes.number,
    format: PropTypes.string,
    pickerText: PropTypes.string,
    itemList: PropTypes.arrayOf(PropTypes.string),
    onChangePickerItem: PropTypes.func.isRequired,
    onChangeValue: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
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
        paddingLeft: 4,
        color: "#FFF"
    },
    picker: {
        flexDirection: 'row',
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '$tintLightColor',
        borderRadius: 10,
        marginLeft: 16,
        marginRight: 16
    },
    pickerItem: {
        padding: 6,
        flexDirection: 'row',
        justifyContent: 'center', 
        alignItems: 'center'
    },
    icon: {
        marginRight: 16
    },
    label: {
        fontSize: 16,
        color: '$tintColor',
        fontWeight: '500'
    },
});
