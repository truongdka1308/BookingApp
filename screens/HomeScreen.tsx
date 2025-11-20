import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, Dimensions, ScrollView, FlatList } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import Carousel from 'react-native-reanimated-carousel';

const { width } = Dimensions.get('window');

const HomeScreen = () => {
    const images = [
        { id: 1, uri: 'https://firsthotel.com.vn/wp-content/uploads/2019/06/M%E1%BA%B7t-ti%E1%BB%81n-First-Wing.jpg' },
        { id: 2, uri: 'https://firsthotel.com.vn/wp-content/uploads/2019/06/M%E1%BA%B7t-ti%E1%BB%81n-First-Wing.jpg' },
        { id: 3, uri: 'https://firsthotel.com.vn/wp-content/uploads/2019/06/M%E1%BA%B7t-ti%E1%BB%81n-First-Wing.jpg' },
    ];
    const data = [
        { id: 1, uri: "https://firsthotel.com.vn/wp-content/uploads/2019/06/M%E1%BA%B7t-ti%E1%BB%81n-First-Wing.jpg", name: "hotel vip pro ko che vao dauhawkjdhjhajwdhjwahkjsdkjkjsadj 1", rating: 4, price: 123 },
        { id: 2, uri: "https://firsthotel.com.vn/wp-content/uploads/2019/06/M%E1%BA%B7t-ti%E1%BB%81n-First-Wing.jpg", name: "hotel vip pro 1", rating: 5, price: 123 },
        { id: 3, uri: "https://firsthotel.com.vn/wp-content/uploads/2019/06/M%E1%BA%B7t-ti%E1%BB%81n-First-Wing.jpg", name: "hotel vip pro 1", rating: 4.5, price: 123 },
        { id: 4, uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjo88ab8s3Cj2ii4tbVsRurXpIugPw3EhtXwkjBKeU5K8HRwesM_LicfuZtxx7D3NKt7g&usqp=CAU", name: "hotel vip pro 1", rating: 5, price: 123 },
    ]

    const renderItem = ({ item }: any) => {
        return (
            <TouchableOpacity>
                <View style={styles.itemContainer}>
                    <View style={styles.imageView}>
                        <Image source={{ uri: item.uri }} style={styles.itemImage}></Image>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.textName} numberOfLines={1} ellipsizeMode="tail">{item.name}</Text>
                        <Text style={styles.textPrice}>${item.price}/night</Text>
                        <View style={styles.starContainer}>
                            {renderStars(item.rating)}
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    const renderStars = (rating: number) => {
        const stars = [];

        for (let i = 1; i <= 5; i++) {
            if (i <= Math.floor(rating)) {
                stars.push(
                    <Icon key={i} name="star" size={18} color="#FFD700" />
                );
            } else if (i === Math.floor(rating) + 1 && rating % 1 !== 0) {
                stars.push(
                    <Icon key={i} name="star-half-full" size={18} color="#FFD700" />
                );
            } else {
                stars.push(
                    <Icon key={i} name="star-o" size={18} color="#FFD700" />
                );
            }
        }

        return stars;
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.logoContainer}>
                    <Text style={styles.logoText}>Home</Text>
                </View>
                <View style={styles.iconContainer}>
                   <TouchableOpacity>
                     <Icon style={styles.icon} name='search' size={20} color={'black'}></Icon>
                   </TouchableOpacity>
                    <Icon style={styles.icon} name='search' size={20} color={'black'}></Icon>
                    <Icon style={styles.icon} name='search' size={20} color={'black'}></Icon>
                </View>
            </View>
            <FlatList style={styles.body}
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 20 }}

                ListHeaderComponent={
                    <>
                        <View style={styles.searchContainer}>
                            <TextInput style={styles.textInput} placeholder="Search" />
                            <TouchableOpacity style={styles.searchIcon}>
                                <Icon name="search" size={20} color="black" />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.carouselContainer}>
                            <Carousel
                                width={width}
                                height={180}
                                data={images}
                                autoPlay={true}
                                renderItem={({ item }) => (
                                    <Image source={{ uri: item.uri }} style={styles.carousel} />
                                )}/>
                        </View>
                        <Text style={styles.textBold}>Popular Hotels</Text>
                    </>
                }
            />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
     backgroundColor:'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 100,
    elevation: 4
    },
    logoContainer: {
        margin: 20
    },
    logoText: {
        fontSize: 23,
        fontWeight: 'bold'
    },
    iconContainer: {
        flexDirection: 'row',

        marginVertical: 20
    },
    icon: {
        marginRight: 20,
    },
    body: {
        paddingHorizontal: 20,
    },
    searchContainer: {
        position: 'relative',
        width: '100%',
        justifyContent: 'center',
        marginVertical: 20,


    },
    searchIcon: {
        position: 'absolute',
        top: 15,
        left: 10

    },
    textInput: {
        backgroundColor: '#E0E0E0',
        paddingHorizontal: 40,
        fontSize: 18,
        width: "100%",
        borderRadius: 10,

        height: 50,

    },
    carouselContainer: {
        width: '100%',
        overflow: 'hidden'
    },
    carousel: {
        width: '100%',
        height: '100%',
        borderRadius: 10
    },
    textBold: {
        fontSize: 23,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom:10
    },
    itemContainer: {
        flexDirection: 'row',
        backgroundColor: "#E0E0E0",
        marginVertical: 10,
        marginRight: 10,
        borderRadius: 10
    },
    textContainer: {
        flex: 2,
        justifyContent: 'space-evenly',
        flexDirection: 'column',

    },
    textName: {
        fontWeight: 'bold',
        fontSize: 18,
        width: "90%"
    },
    textPrice: {
        fontSize: 15
    },
    starContainer: {
        flexDirection: "row"
    },
    itemImage: {
        width: "100%",
        height: 100,
        borderRadius: 10
    },
    imageView: {
        flex: 1,
        marginRight: 10,


    }
})