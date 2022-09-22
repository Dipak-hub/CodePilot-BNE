import axios from 'axios';
import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import colors from '../../utils/responsive/colors';
import NewsCard from '../News-Card/News-Card';
import YoutubeComponent from '../Youtube-Component/Youtube-Component';

function Video() {
  const [page, setPage] = useState(10);
  const [posts, setPosts] = useState([]);
  const {all_posts, video_link, is_loading} = useSelector(state => state.posts);
  const fetchPost = async () => {
    const res = await axios.get(
      `https://www.business-northeast.com/wp-json/wp/v2/posts?categories=7051&_embed&per_page=${page}&filter[orderby]=date&order=desc`,
    );
    setPosts(res.data);
  };

  const fetchMoreData = () => {
    setPage(page + 2);
  };

  function renderLoader() {
    return (
      <View style={styles.ActivityIndicator}>
        <ActivityIndicator size={'large'} color={colors.primary} />
      </View>
    );
  }

  function renderYoutube() {
    return <YoutubeComponent id={video_link} />;
  }
  useEffect(() => {
    fetchPost();
  }, [page]);
  return (
    <View>
      <FlatList
        ListHeaderComponent={() => renderYoutube()}
        contentContainerStyle={{flexGrow: 1}}
        keyExtractor={item => item.id}
        data={posts}
        renderItem={({item}) => <NewsCard news={item} />}
        ListFooterComponent={renderLoader}
        onEndReachedThreshold={0.2}
        onEndReached={() => fetchMoreData()}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  ActivityIndicator: {
    marginVertical: 45,
    alignItems: 'center',
  },
});

export default Video;
