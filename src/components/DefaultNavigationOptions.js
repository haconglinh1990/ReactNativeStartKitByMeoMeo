import React from 'react';
import { HeaderButton } from './Button/index';
import Spinner from './Spinner';


export default function defaultNavigationOptions(props) {
    return (options) => {
        let loading = !!options.navigation.state.params ? options.navigation.state.params.loading : false;
        let title = !!options.navigation.state.params ? options.navigation.state.params.title : false;
        let gesturesEnabled = props.gesturesEnabled === undefined ? true : props.gesturesEnabled;
        
        return {
            title: title || props.title,
            headerLeft: (
                <HeaderButton
                    icon={ !props.backButtonDirection ? 'arrow-back' : 'arrow-down' }
                    onPress={ () => {
                        // If `popTo` is defined, you can jump back to a screen on the navigation stack
                        if (!!props.popTo) {
                            options.navigation.pop(props.popTo);
                        } else {
                            // Othwerwise, just go back to the previous screen which is on the top of the navigation stack
                            options.navigation.goBack();
                        }
                    } }
                    textColor={ '#adadad' }
                    disabled={ loading }
                />
            ),
            headerRight: loading ? <Spinner size="small" loading={true} containerStyle={{ paddingHorizontal: 20 }} /> : null,
            headerTitleStyle: { color: '#adadad' },
            headerStyle: { backgroundColor: '#292a24' },
            headerTintColor: '#adadad',
            gesturesEnabled: gesturesEnabled && !loading
        };
    };
}
