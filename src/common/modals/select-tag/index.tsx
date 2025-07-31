import React from 'react';
import {
  FlatList,
  Image,
  ListRenderItem,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import styles from './styles';
import CrossIcon from './assets/cross.png';
import {NavigationFunctionComponent} from 'react-native-navigation';
import NavigatorsModal from '@navigation/navigators/modals';
import Item from './components/item';

type TTag = string | null;

export type TProps = {
  tags: TTag[];
  currentTag: TTag;
  handleSelectTag: (tag: TTag) => void;
};

const SelectTag: NavigationFunctionComponent<TProps> = ({
  tags,
  handleSelectTag,
  currentTag,
}) => {
  const renderItem: ListRenderItem<string | null> = ({item}) => (
    <Item
      title={item ?? 'Все темы'}
      isSelected={item === currentTag}
      onPress={() => {
        handleSelectTag(item);
        NavigatorsModal.closeSelectTagModal();
      }}
    />
  );

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.selectTag}>
        <Pressable
          style={styles.closeButton}
          onPress={NavigatorsModal.closeSelectTagModal}>
          <Image source={CrossIcon} style={styles.closeIcon} />
        </Pressable>
        <Text style={styles.title}>Выбор темы</Text>
        <FlatList
          data={[null, ...tags]}
          renderItem={renderItem}
          style={styles.list}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default SelectTag;
