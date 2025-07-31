import React, {useEffect} from 'react';
import {FlatList, ListRenderItem, View} from 'react-native';
import styles from './styles';
import {NavigationFunctionComponent} from 'react-native-navigation';
import {useStore} from './store';
import {getCourses} from './api';
import Card from './components/card';
import {TCourse} from './types';
import ButtonSelectTag from './components/button-select-tag';

/**
 * NOTE: These functions are defined outside the component to ensure their references
 * remain stable across renders. This avoids unnecessary re-creation on each render,
 * which improves performance, especially for FlatList. It also keeps the component
 * clean and readable.
 */
const renderItem: ListRenderItem<TCourse> = ({
  item: {image, bgColor, name},
}) => <Card image={image} bgColor={bgColor} name={name} />;

const keyExtractor = (item: TCourse) => item.id;

const Courses: NavigationFunctionComponent = () => {
  const [{courses, currentTag, tags, coursesByTag}, dispatch] = useStore();

  useEffect(() => {
    getCourses(dispatch);
    // dispatch is always a stable function during lifecycle
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.courses}>
      <View style={styles.buttonWrapper}>
        <ButtonSelectTag
          currentTag={currentTag}
          tags={tags}
          handleSelectTag={dispatch}
        />
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.containerList}
        data={coursesByTag ?? courses}
        renderItem={renderItem}
        horizontal
        keyExtractor={keyExtractor}
        initialNumToRender={6}
        maxToRenderPerBatch={10}
        windowSize={6}
      />
    </View>
  );
};

export default Courses;
