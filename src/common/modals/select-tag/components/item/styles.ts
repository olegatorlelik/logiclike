import {StyleSheet} from 'react-native';
import {colors} from '@constants/colors';

const styles = StyleSheet.create({
  item: {
    borderRadius: 12,
    width: 336,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.violet100,
  },
  selectedTag: {
    borderColor: colors.green,
    backgroundColor: colors.green,
  },
  title: {
    color: colors.violet400,
    fontWeight: '800',
    fontSize: 18,
    textAlign: 'center',
  },
  selectedTitle: {
    color: colors.white,
  },
});

export default styles;
