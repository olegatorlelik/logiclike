import {ActionType, TCourse, TDispatch} from '../types';
import {getUniqTags} from '../helpers';

export const getCourses = async (dispatch: TDispatch): Promise<void> => {
  try {
    const response = await fetch('https://logiclike.com/docs/courses.json');

    const result: TCourse[] = await response.json();
    const tags = getUniqTags(result);

    dispatch({type: ActionType.SET_COURSES, payload: result});
    dispatch({type: ActionType.SET_TAGS, payload: tags});
  } catch (e) {
    throw e;
  }
};
