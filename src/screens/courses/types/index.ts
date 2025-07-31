import {Dispatch} from 'react';

export type TCourse = {
  bgColor: string;
  id: string;
  image: string;
  name: string;
  tags: string[];
};

export enum ActionType {
  SET_COURSES = 'SET_COURSES',
  SET_CURRENT_TAG = 'SET_CURRENT_TAG',
  SET_TAGS = 'SET_TAGS',
}

export type TCoursesState = {
  courses: TCourse[];
  coursesByTag: TCourse[] | null;
  currentTag: string | null;
  tags: string[];
};

type TCoursesPayload = {
  [ActionType.SET_COURSES]: TCourse[];
  [ActionType.SET_CURRENT_TAG]: string | null;
  [ActionType.SET_TAGS]: string[];
};

export type TAction<T extends ActionType> = {
  type: T;
  payload: TCoursesPayload[T];
};

export type TCoursesActions =
  | TAction<ActionType.SET_COURSES>
  | TAction<ActionType.SET_CURRENT_TAG>
  | TAction<ActionType.SET_TAGS>;

export type TDispatch = Dispatch<TCoursesActions>;
