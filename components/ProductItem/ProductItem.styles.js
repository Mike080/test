import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  productItem: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    marginTop: 10,
  },
  modal: {
    margin: 25,
  },
  close: {
    fontSize: 30,
    textAlign: 'right',
  },
  modalImg: {
    display: 'flex',
    alignItems: 'center',
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  modalText: {
    fontSize: 18,
    marginTop: 15,
  },
  commentInput: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    marginTop: 15,
    padding: 5,
  },
});
