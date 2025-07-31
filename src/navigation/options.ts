import type {Options} from 'react-native-navigation';
import {OptionsModalPresentationStyle} from 'react-native-navigation';

/**
 * Default navigation options
 */
const options = (): Options => ({
  topBar: {
    visible: false,
    title: {},
    background: {},
    leftButtons: [],
    backButton: {
      visible: false,
    },
    elevation: 0,
    noBorder: true,
    scrollEdgeAppearance: {
      active: false,
      noBorder: true,
    },
  },
  statusBar: {
    style: 'light',
  },
  layout: {
    orientation: ['landscape'],
  },
  bottomTabs: {
    elevation: 0,
    animateTabSelection: true,
    tabsAttachMode: 'onSwitchToTab',
  },
  bottomTab: {},
});

/**
 * Push modal options
 */
const pushModalOptions: Options = {
  modalPresentationStyle: OptionsModalPresentationStyle.overCurrentContext,
  animations: {
    showModal: {
      alpha: {
        from: 0,
        to: 1,
        duration: 100,
      },
    },
    dismissModal: {
      alpha: {
        from: 1,
        to: 0,
        duration: 100,
      },
    },
  },
  layout: {
    backgroundColor: 'transparent',
    orientation: ['portrait'],
    componentBackgroundColor: 'transparent',
  },
};

export {options, pushModalOptions};
