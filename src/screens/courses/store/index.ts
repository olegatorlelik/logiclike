import {useReducer} from 'react';
import {ActionType, TCoursesActions, TCoursesState, TDispatch} from '../types';

type TStore = () => [TCoursesState, TDispatch];

export const initialCoursesState: TCoursesState = {
  courses: [],
  coursesByTag: null,
  currentTag: null,
  tags: [],
};

export function coursesReducer(
  state: TCoursesState,
  {payload, type}: TCoursesActions,
): TCoursesState {
  switch (type) {
    case ActionType.SET_COURSES:
      return {...state, courses: payload};
    case ActionType.SET_CURRENT_TAG:
      const coursesByTag = state.courses.filter(({tags}) => {
        if (!payload) {
          return true;
        }

        return tags.includes(payload);
      });

      return {...state, currentTag: payload, coursesByTag};
    case ActionType.SET_TAGS:
      return {...state, tags: payload};
    default:
      return state;
  }
}

export const useStore: TStore = () =>
  useReducer(coursesReducer, initialCoursesState);
