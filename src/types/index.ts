export type Week = Date[];
export type Exercise = {
  [key: string]: undefined | string | number;
  date: string;
  name: string;
  reps: number;
  sets: number;
  weight: number;
};
export type State = {
  [key: string]: undefined | Exercise[] | Exercise | boolean;
  erercises: Exercise[];
  infoTab: Exercise;
  infoTabActive: boolean;
  infoTabEditing: boolean;
};
export type StatePayload<T> = keyof T extends never ? T : { [K in keyof T]?: StatePayload<T[K]> };
