import {Navigation} from 'react-native-navigation';
import Start from './src/navigation/start';

/**
 * Need to resolve rnn launch issue
 */
if (typeof setImmediate === 'undefined') {
  global.setImmediate = (fn, ...args) => {
    return setTimeout(() => fn(...args), 0);
  };
}

Navigation.events().registerAppLaunchedListener(async () => {
  return Start();
});
