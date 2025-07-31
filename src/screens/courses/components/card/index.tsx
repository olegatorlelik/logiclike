import React, {FC} from 'react';
import {Image, Text, View} from 'react-native';
import {TCourse} from '../../types';
import styles from './styles';

type TProps = Pick<TCourse, 'image' | 'bgColor' | 'name'>;

const Card: FC<TProps> = ({image, name, bgColor}) => {
  return (
    <View style={styles.card}>
      <View style={[styles.imageWrapper, {backgroundColor: bgColor}]}>
        <Image source={{uri: image}} style={styles.image} />
      </View>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{name}</Text>
      </View>
    </View>
  );
};

export default Card;
