export interface Roof {
  dimensionX: number;
  dimensionY: number;
}

export interface Position {
  x: number;
  y: number;
}

export const Commands = {
  north: 'N',
  south: 'S',
  west: 'W',
  east: 'E',
} as const;
export type Command = (typeof Commands)[keyof typeof Commands];
