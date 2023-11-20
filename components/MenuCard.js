import { StyleSheet, Text, View, Image }  from 'react-native';
import { Shadow } from 'react-native-shadow-2';

export default function MenuCard({dish}) {
    return (
        <Shadow
            radius={10}
            offset={[0, 5]}
        >
            <View style={styles.container}>
                <View style={styles.imageArea}>
                    <Image
                        source={dish.image}
                        style={styles.image}
                        resizeMode='cover'
                    />
                </View>
                <View style={styles.infoArea}>
                    <Text>Hello, world!</Text>
                    <Text style={styles.menuName}>{dish.name}</Text>
                    <Text style={styles.price}>{dish.price}</Text>
                </View>
            </View>
        </Shadow>
            
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        height: 400,
        borderRadius: 10,
        overflow: 'hidden',
    },
    imageArea: {
        flex: 1,
        backgroundColor: 'grey',
        // borderColor: 'red',
        // borderWidth: 5,
    },
    image: {
        width: '100%',
        height: '100%',
        overflow: 'hidden',
    },
    infoArea: {
        flex: 1,
    }
});