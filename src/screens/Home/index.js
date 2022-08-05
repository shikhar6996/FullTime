import {Text, TouchableOpacity, View, FlatList} from 'react-native';
import {useEffect, useState} from 'react';
import React from 'react';
import styles from './styles';

const HomeScreen = props => {
  const [people, setPeople] = useState([]);
  const [movie, setMovie] = useState([]);
  const [visible, setVisible] = useState();
  const [sortBy, setSortBy] = useState('');
  const [resp, setResp] = useState();

  useEffect(() => {
    try {
      peopleApiData();
    } catch (error) {
      console.log(error, 'Sorry  Could Not Fetch Data From Filtered API');
    }
  }, []);

  const peopleApiData = async () => {
    const response = await fetch('https://swapi.dev/api/people/');
    const apiFilteredData = await response.json();
    setPeople(apiFilteredData.results);
    console.log(apiFilteredData);
  };

  // useEffect(() => {
  //   try {
  //     movieData();
  //   } catch (error) {
  //     console.log(error, 'Sorry  Could Not Fetch Data From The API');
  //   }
  // }, []);

  // const movieData = async () => {
  //   const response = await fetch('https://swapi.dev/api/films/1/');
  //   const MovieapiData = await response.json();
  //   setMovie(MovieapiData.title);
  // };

  const sortedMass = () => {
    let sortedMassData = people.sort(function (a, b) {
      return parseInt(a.mass) - parseInt(b.mass);
    });
    setPeople(sortedMassData);
  };

  const sortHeight = () => {
    let sortedHeightData = people.sort(function (a, b) {
      return parseInt(a.height) - parseInt(b.height);
    });
    setPeople(sortedHeightData);
  };

  const Item = ({item, index}) => (
    <View key={index}>
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          setResp([]);
          setVisible(index);
          Promise.all(
            item.films?.map(film => {
              return fetch(film)
                .then(res => res.json())
                .catch(err => {
                  throw new Error(err);
                });
            }),
          )
            .then(response => {
              console.log(response, 'Response for promise');
              setResp(response);
            })
            .catch(err => console.log(err));
        }}>
        <Text style={styles.title}>{item.name}</Text>
      </TouchableOpacity>

      {visible === index && (
        <View style={styles.dropdownView} key={index}>
          {resp?.map(ele => {
            console.log(ele.title, ' == Title of Film');
            return (
              <View>
                <Text>{ele.title}</Text>
              </View>
            );
          })}
        </View>
      )}
    </View>
  );
  const renderItem = ({item, index}) => {
    return (
      <View key={index}>
        <Item item={item} index={index} key={index} />
      </View>
    );
  };

  return (
    <View style={styles.parentContainer}>
      <View style={styles.sortByView}>
        <Text style={styles.sortbyText}>Sort By</Text>
        <TouchableOpacity
          style={styles.heightBtn}
          onPress={() => {
            setSortBy('height');
            sortHeight();
            setVisible('');
          }}>
          <Text style={styles.btnText}>Height</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.massBtn}
          onPress={() => {
            setSortBy('mass');
            sortedMass();
            setVisible('');
          }}>
          <Text style={styles.btnText}>Mass</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={people}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default HomeScreen;
import React from 'react';
import {
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const App = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <Text>Pull down to see RefreshControl indicator</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
