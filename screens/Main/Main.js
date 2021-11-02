import React, { useState, useEffect } from 'react';
import {
  Text,
  FlatList,
  ActivityIndicator,
  Image,
  View,
  SafeAreaView,
  Button,
} from 'react-native';
import styles from './Main.styles';
import ProductItem from '../../components/ProductItem/ProductItem.js';
import NavBtn from '../../components/NavBtn/NavBtn.js';

export default function Feed({ navigation }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('http://smktesting.herokuapp.com/api/products')
      .then((response) => response.json())
      .then((responseJson) => {
        setData(responseJson);
      })
      .catch((error) => alert(error))
      .finally(() => setIsLoading(false));
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductItem product={item} />}
      />
      <NavBtn title="SignUp" onPress={() => navigation.navigate('SignUp')} />
    </View>
  );
}
