import {StyleSheet} from 'react-native';
import {colors} from '@constants/colors';

const styles = StyleSheet.create({
  courses: {
    flex: 1,
    backgroundColor: colors.violet700,
    justifyContent: 'center',
  },
  buttonWrapper: {
    zIndex: 1,
    width: '100%',
    top: 12,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerList: {
    paddingHorizontal: 24,
    gap: 18,
    alignItems: 'center',
  },
});

export default styles;
