import React from 'react';
import { withNavigationFocus } from 'react-navigation';
import {
    Dimensions,
    Platform,
    StatusBar,
    ScrollView,
    StyleSheet,
    Image,
    Text,
    TextInput,
    View,
    ImageBackground,
    TouchableOpacity,
    Button,
    Modal
} from 'react-native';

const { height, width } = Dimensions.get('screen');
import { Colors, user, Images } from '../constants';
import { ParagraphText1, ParagraphText2, HeadingText1, HeadingText2 } from '../components/Texts';


class BioScreen extends React.Component {
    state = {
        usernameInput: user.username,
        firstNameInput: user.firstName,
        lastNameInput: user.lastName,
        addressLineInput: user.addressLine,
        addressCityInput: user.addressCity,
        addressProvinceInput: user.addressProvince,
        addressPostalCodeInput: user.addressPostalCode,
        birthdayInput: user.birthday,
        phoneInput: user.phoneNumber,
        emailInput: user.email,
        bioInput: user.bio,
    };

    updateBio = (bioInput) => {
        this.setState({ bioInput });
    };

    updatePhone = (phoneInput) => {
        this.setState({ phoneInput });
    };

    updateEmail = (emailInput) => {
        this.setState({ emailInput });
    };

    updateUsername = (usernameInput) => {
        this.setState({ usernameInput });
    };

    updateFirstNameInput = (firstNameInput) => {
        this.setState({ firstNameInput });
    };

    updateLastNameInput = (lastNameInput) => {
        this.setState({ lastNameInput });
    };

    updateAddressLineInput = (addressLineInput) => {
        this.setState({ addressLineInput });
    };

    updateAddressCityInput = (addressCityInput) => {
        this.setState({ addressCityInput });
    };

    updateAddressProvinceInput = (addressProvinceInput) => {
        this.setState({ addressProvinceInput });
    };

    updateAddressPostalCodeInput = (addressPostalCodeInput) => {
        this.setState({ addressPostalCodeInput });
    };

    updateBirthdayInput = (birthdayInput) => {
        this.setState({ birthdayInput });
    };

    render() {
        const { usernameInput } = this.state;
        const { firstNameInput } = this.state;
        const { lastNameInput } = this.state;
        const { addressLineInput } = this.state;
        const { addressCityInput } = this.state;
        const { addressProvinceInput } = this.state;
        const { addressPostalCodeInput } = this.state;
        const { birthdayInput } = this.state;
        const { phoneInput } = this.state;
        const { emailInput } = this.state;
        const { bioInput } = this.state;

        const services = user.services.map((service) => {
            return (
                <View style={styles.userContainer}>
                    <View style={styles.rating}>
                        <HeadingText1 style={{ color: Colors.white }}> {service.rating} </HeadingText1>
                        <Image style={styles.icon} source={require('../assets/icons/icons8-star-24.png')} />
                    </View>
                    <TouchableOpacity style={styles.edit}>
                        <HeadingText1 style={{ color: Colors.white }}> Edit </HeadingText1>
                        <Image style={styles.icon} source={require('../assets/icons/icons8-edit-24.png')} />
                    </TouchableOpacity>
                    <Image source={{ uri: service.image }} style={styles.reviewImage}></Image>
                    <View style={{ margin: 15 }}>
                        <View style={styles.review}>
                            <HeadingText1>{service.title}</HeadingText1>
                        </View>
                    </View>
                </View>
            )
        })

        return (
            <View style={styles.container}>
                <View style={{ flex: 1 }}>
                    <ImageBackground
                        source={Images.ProfileBackground}
                        style={styles.profileContainer}
                        imageStyle={styles.profileBackground}>
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            style={{ marginTop: '5%' }}>
                            <TouchableOpacity style={styles.back} onPress={() => this.props.navigation.goBack()}>
                                <HeadingText1 style={{ color: Colors.white }}> Back </HeadingText1>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.save} onPress={() => this.props.navigation.goBack()}>
                                <HeadingText1 style={{ color: Colors.white }}> Save Changes </HeadingText1>
                            </TouchableOpacity>
                            <View style={styles.profileCard}>
                                <View style={styles.profilePicContainer}>
                                    <ImageBackground source={{ uri: user.profilePic }} style={styles.profilePic}>
                                        <TouchableOpacity style={styles.UpdatePic}>
                                            <HeadingText2 style={{ color: Colors.white }}>Update </HeadingText2>
                                            <Image style={styles.icon} source={
                                                require('../assets/icons/icons8-camera-icon-with-face-24.png')} />
                                        </TouchableOpacity>
                                    </ImageBackground>
                                </View>
                                <View style={styles.info}>
                                    <HeadingText1 style={{
                                        alignSelf: 'center', marginBottom: 8, color: Colors.placeholder
                                    }}>Y O U R  I N F O R M A T I O N</HeadingText1>
                                    <View style={{ justifyContent: 'space-between' }}>
                                        <View style={styles.innerInfo}>
                                            <HeadingText1 style={{ paddingRight: 20 }}>Username:</HeadingText1>
                                            <TextInput
                                                style={[{ height: 30, width: 250 }, styles.messageInput]}
                                                onChangeText={this.updateUsername}
                                                inputContainerStyle={{ backgroundColor: Colors.white }}
                                                containerStyle={{ backgroundColor: '#ffffff' }}
                                                inputStyle={{ fontSize: 13 }}
                                                value={usernameInput}
                                                placeholder={user.username}
                                                placeholderTextColor={Colors.placeholder} />
                                        </View>
                                        <View style={styles.innerInfo}>
                                            <HeadingText1 style={{ paddingRight: 20 }}>First Name:</HeadingText1>
                                            <TextInput
                                                style={[{ height: 30, width: 250 }, styles.messageInput]}
                                                onChangeText={this.updateFirstNameInput}
                                                inputContainerStyle={{ backgroundColor: Colors.white }}
                                                containerStyle={{ backgroundColor: '#ffffff' }}
                                                inputStyle={{ fontSize: 13 }}
                                                value={firstNameInput}
                                                placeholder={user.firstName}
                                                placeholderTextColor={Colors.placeholder} />
                                        </View>
                                        <View style={styles.innerInfo}>
                                            <HeadingText1 style={{ paddingRight: 20 }}>Last Name:</HeadingText1>
                                            <TextInput
                                                style={[{ height: 30, width: 250 }, styles.messageInput]}
                                                onChangeText={this.updateLastNameInput}
                                                inputContainerStyle={{ backgroundColor: Colors.white }}
                                                containerStyle={{ backgroundColor: '#ffffff' }}
                                                inputStyle={{ fontSize: 13 }}
                                                value={lastNameInput}
                                                placeholder={user.lastName}
                                                placeholderTextColor={Colors.placeholder} />
                                        </View>
                                        <View style={styles.innerInfo}>
                                            <HeadingText1 style={{ paddingRight: 20 }}>Address Line:</HeadingText1>
                                            <TextInput
                                                style={[{ height: 30, width: 250 }, styles.messageInput]}
                                                onChangeText={this.updateAddressLineInput}
                                                inputContainerStyle={{ backgroundColor: Colors.white }}
                                                containerStyle={{ backgroundColor: '#ffffff' }}
                                                inputStyle={{ fontSize: 13 }}
                                                value={addressLineInput}
                                                placeholder={user.addressLine}
                                                placeholderTextColor={Colors.placeholder} />
                                        </View>
                                        <View style={styles.innerInfo}>
                                            <HeadingText1 style={{ paddingRight: 20 }}>City:</HeadingText1>
                                            <TextInput
                                                style={[{ height: 30, width: 250 }, styles.messageInput]}
                                                onChangeText={this.updateAddressCityInput}
                                                inputContainerStyle={{ backgroundColor: Colors.white }}
                                                containerStyle={{ backgroundColor: '#ffffff' }}
                                                inputStyle={{ fontSize: 13 }}
                                                value={addressCityInput}
                                                placeholder={user.addressCity}
                                                placeholderTextColor={Colors.placeholder} />
                                        </View>
                                        <View style={styles.innerInfo}>
                                            <HeadingText1 style={{ paddingRight: 20 }}>Province:</HeadingText1>
                                            <TextInput
                                                style={[{ height: 30, width: 250 }, styles.messageInput]}
                                                onChangeText={this.updateAddressProvinceInput}
                                                inputContainerStyle={{ backgroundColor: Colors.white }}
                                                containerStyle={{ backgroundColor: '#ffffff' }}
                                                inputStyle={{ fontSize: 13 }}
                                                value={addressProvinceInput}
                                                placeholder={user.addressProvince}
                                                placeholderTextColor={Colors.placeholder} />
                                        </View>
                                        <View style={styles.innerInfo}>
                                            <HeadingText1 style={{ paddingRight: 20 }}>Postal Code:</HeadingText1>
                                            <TextInput
                                                style={[{ height: 30, width: 250 }, styles.messageInput]}
                                                onChangeText={this.updateAddressPostalCodeInput}
                                                inputContainerStyle={{ backgroundColor: Colors.white }}
                                                containerStyle={{ backgroundColor: '#ffffff' }}
                                                inputStyle={{ fontSize: 13 }}
                                                value={addressPostalCodeInput}
                                                placeholder={user.addressPostalCode}
                                                placeholderTextColor={Colors.placeholder} />
                                        </View>
                                        <View style={styles.innerInfo}>
                                            <HeadingText1 style={{ paddingRight: 20 }}>Birthday:</HeadingText1>
                                            <TextInput
                                                style={[{ height: 30, width: 250 }, styles.messageInput]}
                                                onChangeText={this.updateBirthdayInput}
                                                inputContainerStyle={{ backgroundColor: Colors.white }}
                                                containerStyle={{ backgroundColor: '#ffffff' }}
                                                inputStyle={{ fontSize: 13 }}
                                                value={birthdayInput}
                                                placeholder={user.birthday}
                                                placeholderTextColor={Colors.placeholder} />
                                        </View>
                                        <View style={styles.innerInfo}>
                                            <HeadingText1 style={{ paddingRight: 20 }}>Phone:</HeadingText1>
                                            <TextInput
                                                style={[{ height: 30, width: 250 }, styles.messageInput]}
                                                onChangeText={this.updatePhone}
                                                inputContainerStyle={{ backgroundColor: Colors.white }}
                                                containerStyle={{ backgroundColor: '#ffffff' }}
                                                inputStyle={{ fontSize: 13 }}
                                                value={phoneInput}
                                                placeholder={user.phoneNumber}
                                                placeholderTextColor={Colors.placeholder} />
                                        </View>
                                        <View style={styles.innerInfo}>
                                            <HeadingText1 style={{ paddingRight: 20 }}>E-mail:</HeadingText1>
                                            <TextInput
                                                style={[{ height: 30, width: 250 }, styles.messageInput]}
                                                onChangeText={this.updateEmail}
                                                inputContainerStyle={{ backgroundColor: Colors.white }}
                                                containerStyle={{ backgroundColor: '#ffffff' }}
                                                inputStyle={{ fontSize: 13 }}
                                                value={emailInput}
                                                placeholder={user.email}
                                                placeholderTextColor={Colors.placeholder} />
                                        </View>
                                        <HeadingText1 style={{
                                            alignSelf: 'center', marginBottom: 8, color: Colors.placeholder, marginTop: 30
                                        }}>A B O U T  M E</HeadingText1>
                                        <View style={styles.innerInfo}>
                                            <TextInput
                                                multiline={true}
                                                style={{
                                                    flex: 1,
                                                    paddingHorizontal: 20,
                                                    paddingTop: 20,
                                                    paddingBottom: 20,
                                                    textAlignVertical: 'top',
                                                    width: width - 65,
                                                    borderWidth: 1,
                                                    borderColor: Colors.placeholder,
                                                    borderRadius: 20,
                                                    zIndex: 1,
                                                }}
                                                onChangeText={this.updateBio}
                                                inputContainerStyle={{ backgroundColor: Colors.white }}
                                                containerStyle={{ backgroundColor: '#ffffff' }}
                                                inputStyle={{ fontSize: 13 }}
                                                value={bioInput}
                                                placeholder={user.bio}
                                                placeholderTextColor={Colors.placeholder} />
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.reviews}>
                                    <HeadingText1 style={{
                                        marginBottom: 3, color: Colors.placeholder
                                    }}>Y O U R  S E R V I C E S</HeadingText1>
                                    {services}
                                </View>
                                <TouchableOpacity style={styles.addService}>
                                    <HeadingText2 style={{ color: Colors.primary }}> Add Service </HeadingText2>
                                    <Image style={styles.icon} source={
                                        require('../assets/icons/icons8-add-new-24-aqua.png')} />
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </ImageBackground>
                </View>
            </View >
        );
    }
}


const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'row',
        marginHorizontal: width / 40,
    },
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0)',
    },
    profileBackground: {
        height: height / 2,
        width: width
    },
    profileContainer: {
        width: width,
        height: height - 50,
        padding: 0,
        zIndex: 1
    },
    profileCard: {
        marginTop: height / 4.5,
        marginHorizontal: 10,
        marginBottom: 20,
        paddingBottom: 10,
        borderRadius: 10,
        zIndex: 5,
        backgroundColor: Colors.white,
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 10,
        shadowOpacity: 0.25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    profilePicContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        position: "relative",
        marginTop: -70,
        padding: 2,
        zIndex: 5
    },
    profilePic: {
        width: 140,
        height: 140,
        borderRadius: 70,
        borderWidth: 10,
        borderColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },
    icon: {
        width: 15,
        height: 15,
    },
    info: {
        flex: 1,
        flexDirection: "column",
        marginTop: 20,
        marginBottom: 50
    },
    innerInfo: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5
    },
    reviews: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
        marginBottom: 20,
    },
    userContainer: {
        width: width - 60,
        marginHorizontal: width / 60,
        marginVertical: 15,
        backgroundColor: Colors.white,
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 10,
        shadowOpacity: 0.1,
    },
    review: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rating: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        color: Colors.white,
        position: 'absolute',
        left: 0,
        margin: 10,
        zIndex: 1,
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 10,
        shadowOpacity: 0.5,
    },
    reviewImage: {
        width: "100%",
        height: height / 6,
    },
    shadow: {
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        shadowOpacity: 0.1,
        elevation: 2,
    },
    UpdatePic: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'flex-start',
        position: 'absolute',
        paddingTop: 10,
        height: 70,
        width: 140,
        top: 75,
        zIndex: 1,
        backgroundColor: 'rgba(99, 99, 99, 0.6)',
    },
    viewAll: {
        color: Colors.primary,
        marginTop: -7,
        paddingBottom: 5,
    },
    messageInput: {
        borderRadius: 10,
        paddingHorizontal: 10,
        borderColor: Colors.placeholder,
        borderWidth: 1
    },
    save: {
        position: "absolute",
        right: 9,
        margin: 10,
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 10,
        shadowOpacity: 0.7,
    },
    back: {
        position: "absolute",
        left: 9,
        margin: 10,
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 10,
        shadowOpacity: 0.7,
    },
    edit: {
        flex: 1,
        flexDirection: "row",
        color: Colors.white,
        position: 'absolute',
        right: 10,
        marginTop: 10,
        zIndex: 1
    },
    addService: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        color: Colors.primary,
        position: 'absolute',
        right: 20,
        bottom: 15,
        zIndex: 1
    }
});

export default withNavigationFocus(BioScreen);