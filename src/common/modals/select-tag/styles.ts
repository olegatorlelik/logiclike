import {StyleSheet} from 'react-native';
import {colors} from '@constants/colors';

const CLOSE_BUTTON_SIZE = 22;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  selectTag: {
    paddingTop: 24,
    flex: 1,
    backgroundColor: colors.white,
  },
  closeButton: {
    width: CLOSE_BUTTON_SIZE,
    height: CLOSE_BUTTON_SIZE,
    borderRadius: CLOSE_BUTTON_SIZE / 2,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 24,
    right: 24,
    zIndex: 1,
  },
  closeIcon: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  list: {
    gap: 6,
    paddingTop: 18,
  },
  listContainer: {
    gap: 6,
    alignItems: 'center',
  },
  title: {
    color: colors.violet400,
    fontWeight: '800',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default styles;
