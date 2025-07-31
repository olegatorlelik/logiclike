import type {ComponentType} from 'react';
import Courses from '@screens/courses';
import SelectTag from '@modals/select-tag';
import {MODALS, SCREENS} from '@constants/navigation';

/**
 * Register all application screens
 */
const screens = new Map<
  string,
  ComponentType<any> | [ComponentType<any>, boolean]
>();

screens.set(SCREENS.COURSES, Courses);

// Modals
screens.set(MODALS.SELECT_TAG, SelectTag);

export default screens;
