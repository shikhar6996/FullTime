import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  sortByView: {flexDirection: 'row', justifyContent: 'space-around'},
  sortbyText: {fontSize: 20, alignSelf: 'center'},
  heightBtn: {
    borderWidth: 1,
    borderColor: '#010101',
    backgroundColor: 'rgb(249,229,97)',
    borderRadius: 5,
    padding: 10,
  },
  btnText: {fontSize: 20, fontWeight: '400', paddingHorizontal: 15},
  massBtn: {
    borderWidth: 1,
    borderColor: '#010101',
    borderRadius: 5,
    padding: 10,
    backgroundColor: 'orange',
  },
  item: {
    margin: 18,
    backgroundColor: 'green',
    padding: 10,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 22,
    alignSelf: 'center',
  },
  dropdownView: {alignItems: 'center', backgroundColor: 'skyblue'},
  dropdownText: {fontSize: 26},
});
