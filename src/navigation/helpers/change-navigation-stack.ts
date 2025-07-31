import {LayoutRoot, Navigation} from 'react-native-navigation';
import UserRoot from '../roots/user';

/**
 * Set navigation root stack for user
 */
const ChangeNavigationStack = async (isAuthUser = true): Promise<void> => {
  try {
    await Navigation.setRoot(isAuthUser ? UserRoot : ({} as LayoutRoot));
  } catch (e) {
    console.error(`Navigation set root error: ${(e as Error).message}`, e);
  }
};

export default ChangeNavigationStack;
