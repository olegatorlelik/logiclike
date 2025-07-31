import {StyleSheet} from 'react-native';
import {colors} from '@constants/colors.ts';

const ROUND_SIZE = 18;

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    gap: 6,
    paddingVertical: 5,
    paddingLeft: 10,
    paddingRight: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
  },
  round: {
    height: ROUND_SIZE,
    width: ROUND_SIZE,
    borderRadius: ROUND_SIZE / 2,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: colors.white,
    fontWeight: '800',
  },
});

export default styles;
