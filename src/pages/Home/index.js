import React, { useCallback } from 'react';
import { View, StyleSheet } from 'react-native';

import { List, LoadingWrapper } from '../../components';
import { MovieCard, SearchBar } from './components';
import { useMovies, useLanguageController } from '../../hooks';

const Home = () => {
  const {
    movies,
    isLoading,
    isPaginating,
    paginate,
    searchMovies,
    refresh,
    isRefreshing,
  } = useMovies();
  const { labels } = useLanguageController();

  const handleSearchSubmit = useCallback((title) => {
    searchMovies({
      title,
    });
  });

  return (
    <View
      style={styles.container}
    >
      <SearchBar
        onSubmit={handleSearchSubmit}
      />
      <View
        style={styles.listContainer}
      >
        <LoadingWrapper
          isLoading={isLoading}
        >
          {
            () => (
              <List
                data={movies}
                isRefreshing={isRefreshing}
                card={MovieCard}
                onEndReached={paginate}
                isPaginating={isPaginating}
                emptyMessage={labels.noMoviesFound}
                onRefresh={refresh}
                contentContainerStyle={styles.contentContainerStyle}
              />
            )
}
        </LoadingWrapper>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  contentContainerStyle: {
    paddingBottom: 40,
  },
});

export default Home;
