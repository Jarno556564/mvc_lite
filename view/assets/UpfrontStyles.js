import { StyleSheet, Dimensions } from 'react-native';
let winSize = Dimensions.get('window'),
  primary = 'rgba(40, 126, 224, 1.0)',
  primaryshade = 'rgba(12, 75, 148, 1.0)',
  secondary = 'rgba(171, 199, 16, 1.0)',
  secondaryshade = 'rgba(193, 224, 18, 1.0)',
  accent = 'rgba(224, 76, 63, 1.0)',
  compound = 'rgba(127, 75, 228, 1.0)',
  background = 'rgba(238, 238, 238, 1.0)',
  backgroundshade = 'rgba(161, 161, 161, 1.0)',
  dark = 'rgb(0, 0, 0)',
  lite = 'rgb(255, 255, 255)';

const UpfrontStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: secondary,
    flexDirection: 'column',
    padding: 8,
  },
  p: {
    fontSize: 16 / winSize.scale,
    fontWeight: 'normal',
  },
  h1: {
    fontSize: 32 / winSize.scale,
    fontWeight: 'bold',
  },
  h2: {
    fontSize: 24 / winSize.scale,
    fontWeight: 'bold',
  },
  h3: {
    fontSize: 19 / winSize.scale,
    fontWeight: 'bold',
  },
  h4: {
    fontSize: 16 / winSize.scale,
    fontWeight: 'bold',
  },
  h5: {
    fontSize: 14 / winSize.scale,
    fontWeight: 'bold',
  },
  h6: {
    fontSize: 11 / winSize.scale,
    fontWeight: 'bold',
  },
  button: {
    // flexDirection: 'row',
    backgroundColor: '#007BFF',
    padding: 10,
    marginHorizontal: 2,
    marginVertical: 2,
    alignItems: 'center',
    borderRadius: 5,
    width: 96,
  },
  icon: {
    marginRight: 5,
  },
  buttonText: {
    color: lite,
    fontWeight: 'bold',
  },
  table: {
    borderWidth: 1,
    borderColor: 'gray',
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    flex: 1,
    padding: 8,
    borderWidth: 1,
    borderColor: 'gray',
  },
  flexContainer: {
    flex: 1,
  },
  photo: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'red',
  },
  profileContainer: {
    flexDirection: 'column',
    marginLeft: 16,
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  bornAtText: {
    fontSize: 18,
  },
  image: {
    flex: 1,
  },
});

export default UpfrontStyles;
