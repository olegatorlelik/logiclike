import {options as DefaultNavOptions} from './options';
import {Navigation} from 'react-native-navigation';
import ChangeNavigationStack from './helpers/change-navigation-stack';
import RegisterScreens from './helpers/register-screens';
import screens from './screens';
import ComponentWrapper from './component-wrapper';

/**
 * Start application
 */
export default async (): Promise<void> => {
  Navigation.setDefaultOptions(DefaultNavOptions());

  RegisterScreens(screens, ComponentWrapper);

  await ChangeNavigationStack();

  const [] = await Promise.all([]);
};
