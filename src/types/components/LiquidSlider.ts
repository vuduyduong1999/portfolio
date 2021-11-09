export interface ISlide {
  color: string;
  title: string;
  description: string;
  picture: ReturnType<typeof require>;
}

export enum ESide {
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
  NONE = 'NONE',
}
