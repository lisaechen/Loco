import React from 'react'; import {
    Platform,
    StyleSheet,
    Text,
    Dimensions,
    StatusBar,
    View,
} from 'react-native';
import { Images, Colors } from "../constants";
import { ParagraphText1, ParagraphText2, HeadingText1, HeadingText2, HeadingText3 } from '../components/Texts';
import NotificationPopup from 'react-native-push-notification-popup';

const { width, height } = Dimensions.get("screen");

class PopUpUI extends React.Component {
    // TEST POP UP NOTIFICATION
    componentDidMount() {
        this.popup.show({
            appIconSource: require("../assets/icon.png"),
            appTitle: 'LOCO',
            timeText: 'Now',
            title: "Username",
            body: 'This is a sample message.\nTesting emoji 😀\nHi!',
            slideOutTime: 4000
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <NotificationPopup ref={ref => this.popup = ref} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        backgroundColor: '#fff',
        paddingTop: Platform.OS === 'ios' ? StatusBar.currentHeight : 0
    },
});


export default PopUpUI;