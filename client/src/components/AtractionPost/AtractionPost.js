//REACT AND REACT NATIVE IMPORTS
import {Text, View, Image, Pressable} from 'react-native';
import React, {useState, useContext, useEffect} from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
//ICONS IMPORTS
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {LikedDataContext} from '../../context/LikedDataContext';

const AtrractionPost = props => {
  const [liked, setLiked] = useState(false);
  const {likedData, setLikedData} = useContext(LikedDataContext);
  const {item} = props;

  const images = item.images.map(a => a.link); //array of the images of the item.images

  const navigation = useNavigation();

  useEffect(() => {
    if (liked) {
      setLikedData([...likedData, item]);
      console.log(likedData);
    }
  }, [liked]);

  // const setData = async likedData => {
  //   try {
  //     await AsyncStorage.setItem('liked', JSON.stringify({likedData}));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const goToAttractionPostPageInfo = () => {
    //function that navigate to the spicifc attraction
    navigation.navigate('PostInfo', {PostId: item.id});
  };
  return (
    <Pressable
      onPress={goToAttractionPostPageInfo}
      style={[styles.root, styles.shadowProp]}>
      <View style={styles.leftContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.plcaes}>
          <Entypo name="location" size={12} /> {item.location}
        </Text>
        <Text style={styles.plcaes}>
          <FontAwesome name="drivers-license-o" size={12} /> Driver
        </Text>
        <Text style={styles.plcaes}>
          <AntDesign name="wifi" size={12} /> Wi-Fi
        </Text>
        <Text numberOfLines={3} style={styles.plcaes}>
          <MaterialIcons name="description" size={12} />
          {item.description}
        </Text>
        <View style={styles.pi}>
          <FontAwesome
            name={liked ? 'heart' : 'heart-o'}
            size={20}
            style={styles.like}
            color={'red'}
            onPress={() => setLiked(!liked)}
          />
          <Text style={styles.price}>${item.price}</Text>
        </View>
      </View>
      <Image source={{uri: images[0]}} style={styles.image} />
    </Pressable>
  );
};

export default AtrractionPost;
