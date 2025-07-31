import React, {FC} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import ModalNavigators from '@navigation/navigators/modals';
import {ActionType, TAction} from '../../types';
import DownPointerIcon from './assets/down-poiner.png';
import styles from './styles';

type TProps = {
  currentTag: string | null;
  tags: string[];
  handleSelectTag: (action: TAction<ActionType.SET_CURRENT_TAG>) => void;
};

const ButtonSelectTag: FC<TProps> = ({currentTag, tags, handleSelectTag}) => {
  const onPress = () => {
    ModalNavigators.openSelectTagModal({
      tags,
      currentTag,
      handleSelectTag: (tag) =>
        handleSelectTag({type: ActionType.SET_CURRENT_TAG, payload: tag}),
    });
  };

  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.title}>{currentTag ?? 'Все темы'}</Text>
      <View style={styles.round}>
        <Image source={DownPointerIcon} />
      </View>
    </Pressable>
  );
};

export default ButtonSelectTag;
