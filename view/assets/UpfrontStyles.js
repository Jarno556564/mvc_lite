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
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: secondary,
    flexDirection: 'column',
    padding: 8,
  },
  dflex: {
    display: 'flex',
  },
  row: {
    flexDirection: 'row',
  },
  between: {
    justifyContent: 'space-between',
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cell: {
    flex: 1,
    padding: 8,
    borderWidth: 1,
    borderColor: 'gray',
  },
  flexOne: {
    flex: 1,
  },
  viewTop: {
    marginTop: 80,
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
  buttonText: {
    color: lite,
    fontWeight: 'bold',
  },
  roundButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    marginHorizontal: 2,
    marginVertical: 2,
    alignItems: 'center',
    borderRadius: 100,
    width: 40,
    height: 40,
  },
  icon: {
    // marginRight: 5,
  },
  table: {
    borderWidth: 1,
    borderColor: 'gray',
  },
  photo: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'red',
  },
  image: {
    height: winSize.height / 2,
    zIndex: -1,
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
  whitebg: {
    backgroundColor: 'white',
  },
});

export default UpfrontStyles;
