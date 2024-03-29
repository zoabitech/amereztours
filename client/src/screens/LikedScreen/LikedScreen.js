import {View, FlatList} from 'react-native';
import React, {useContex, useEffect, useContext} from 'react';
import {LikedDataContext} from '../../context/LikedDataContext';
import LikedPost from '../../components/LikedPost/LikedPost';
import AsyncStorage from '@react-native-async-storage/async-storage';
const LikedScreen = () => {
  const {likedData, setLikedData} = useContext(LikedDataContext);

  return (
    <View
      style={{
        margin: 2,
      }}>
      <FlatList
        data={likedData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <LikedPost item={item} />}
      />
    </View>
  );
};

export default LikedScreen;
