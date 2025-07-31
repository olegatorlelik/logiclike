import type {ComponentType, FC} from 'react';
import React from 'react';

/**
 * Screen wrapper. Add mobx provider and other wrappers.
 */
const ComponentWrapper = (Component: ComponentType): ComponentType => {
  const Wrapper: FC = (props) => <Component {...props} />;

  Wrapper.displayName = `${Component.displayName as string}Wrapper`;

  return Wrapper;
};

export default ComponentWrapper;
