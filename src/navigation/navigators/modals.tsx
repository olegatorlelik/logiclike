import {Navigation} from 'react-native-navigation';
import {MODALS} from '@constants/navigation';
import {TProps} from '@modals/select-tag';

/**
 * Modals navigator
 */
export default {
  openSelectTagModal: (passProps: TProps): Promise<string> =>
    Navigation.showModal({
      component: {
        name: MODALS.SELECT_TAG,
        id: MODALS.SELECT_TAG,
        passProps,
      },
    }),
  closeSelectTagModal: () => Navigation.dismissModal(MODALS.SELECT_TAG),
};
