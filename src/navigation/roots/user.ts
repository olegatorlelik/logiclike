import type {LayoutRoot} from 'react-native-navigation';
import {SCREENS} from '@constants/navigation';

/**
 * User stack root
 */
const user: LayoutRoot = {
  root: {
    stack: {
      children: [
        {
          component: {
            name: SCREENS.COURSES,
          },
        },
      ],
    },
  },
};

export default user;
