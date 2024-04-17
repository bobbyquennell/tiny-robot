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

  move = (cmd: string) => {
    if (cmd === 'N') {
      if (this.#position.y < this.#roof.dimensionY) this.#position.y++;
    }
    if (cmd === 'E') {
      if (this.#position.x < this.#roof.dimensionX) this.#position.x++;
    }
    if (cmd === 'S') {
      if (this.#position.y > 0) this.#position.y--;
    }
    if (cmd === 'W') {
      if (this.#position.x > 0) this.#position.x--;
    }
  };
}
