import {FC} from 'react';
import React from 'react';
import {Pressable, Text} from 'react-native';
import styles from './styles';

type TProps = {
  title: string;
  isSelected: boolean;
  onPress: () => void;
};

const Item: FC<TProps> = ({isSelected, title, onPress}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.item, isSelected && styles.selectedTag]}>
      <Text style={[styles.title, isSelected && styles.selectedTitle]}>
        {title}
      </Text>
    </Pressable>
  );
};

export default Item;
