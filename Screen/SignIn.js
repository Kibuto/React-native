import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import SignInItem from '../components/SignInItem';

class ScreenSignIn extends Component {

    static navigationOptions = {
        headerShown: false
    };

    render() {
        return (
            <View style={styles.container}>
                <SignInItem navigation={this.props.navigation}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        height: '100%'
    }
});

export default ScreenSignIn;