import {StyleSheet} from 'react-native';
import {colors} from '@constants/colors';

const CARD_RADIUS = 12;

const styles = StyleSheet.create({
  card: {
    height: 198,
    backgroundColor: colors.white,
    borderRadius: CARD_RADIUS,
    shadowColor: colors.violet50,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    elevation: 6,
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  titleWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  imageWrapper: {
    width: 210,
    height: 162,
    borderTopLeftRadius: CARD_RADIUS,
    borderTopRightRadius: CARD_RADIUS,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  title: {
    color: colors.violet500,
    fontWeight: '800',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default styles;
