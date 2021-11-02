import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  SafeAreaView,
  TextInput,
  Button,
} from 'react-native';
import styles from './ProductItem.styles';

const ProductItem = ({ product }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <TouchableOpacity
      onLongPress={() => setModalVisible(!modalVisible)}
      style={styles.productItem}
    >
      <Image
        style={styles.image}
        source={{
          uri: `http://smktesting.herokuapp.com/static/${product.img}`,
        }}
      />
      <Text style={styles.title}>{product.title}</Text>
      <Modal
        animationType="slide"
        presentationStyle="formSheet"
        visible={modalVisible}
      >
        <View style={styles.modal}>
          <Text
            style={styles.close}
            onPress={() => setModalVisible(!modalVisible)}
          >
            &times;
          </Text>
          <Image
            style={styles.modalImg}
            source={{
              uri: `http://smktesting.herokuapp.com/static/${product.img}`,
            }}
          />
          <Text style={styles.modalText}>{product.text}</Text>
        </View>
      </Modal>
    </TouchableOpacity>
  );
};

export default ProductItem;
