import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';

const PaginationListScreen = () => {
  const [loading, setLoading] = useState(true);
  const [dataSource, setDataSource] = useState([]);
  const [offset, setOffset] = useState(1);

  useEffect(() => getData(), []);

  const getData = () => {
    setLoading(true);

    // Fetching Data
    fetch(`https://aboutreact.herokuapp.com/getpost.php?offset=${offset}`)
      .then(response => response.json())
      .then(responseJson => {
        //Successful response
        setOffset(offset + 1);
        //Increasing the offset for the next API call
        setDataSource([...dataSource, ...responseJson.results]);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const renderFooter = () => {
    return (
      //Footer View with Load More button
      <View style={styles.footer}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={getData}
          style={styles.loadMoreBtn}>
          <Text style={styles.btnText}>Load More</Text>
          {loading ? <ActivityIndicator color="white" /> : null}
        </TouchableOpacity>
      </View>
    );
  };

  const listItem = ({item}) => {
    return (
      <View style={styles.listItemContainer}>
        <Text style={styles.listItem}>{item.title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.listHeadingContainer}>
        <Text style={styles.listHeadingText}>Pagination List</Text>
      </View>
      <FlatList
        data={dataSource}
        keyExtractor={(item, index) => index.toString()}
        enableEmptySections={true}
        renderItem={listItem}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 10,
    paddingHorizontal: 15,
  },
  listHeadingContainer: {
    backgroundColor: 'darkblue',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  listHeadingText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },

  listItemContainer: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },

  listItem: {
    color: 'black',
    fontWeight: '500',
    textTransform: 'uppercase',
  },

  footer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  loadMoreBtn: {
    padding: 10,
    backgroundColor: 'darkblue',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
    marginRight: 8,
  },
});

export default PaginationListScreen;
