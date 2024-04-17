import { Position, Roof } from './types';

export class Robot {
  #roof: Roof;
  #position: Position;

  get roof() {
    return this.#roof;
  }

  get position() {
    return this.#position;
  }
  constructor(roof: Roof, position: Position) {
    this.#roof = roof;
    this.#position = position;
  }
}
