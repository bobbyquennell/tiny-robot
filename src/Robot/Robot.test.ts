import { Robot } from './Robot';
import { Position, Roof } from './types';

describe('1. Robot class:', () => {
  it('should be able to create a new robot instance', () => {
    const roof: Roof = { dimensionX: 10, dimensionY: 10 };
    const start: Position = { x: 0, y: 0 };
    const sut = new Robot(roof, start);
    expect(sut).toBeInstanceOf(Robot);
    expect(sut.roof).toStrictEqual(roof);
    expect(sut.position).toStrictEqual(start);
  });
});

describe('2. A robot executes move commands', () => {
  it("should exec valid cmd, and update it's position as expected", () => {
    const roof: Roof = { dimensionX: 9, dimensionY: 9 };
    const start: Position = { x: 0, y: 0 };
    const sut = new Robot(roof, start);
    expect(sut.position).toStrictEqual(start);
    sut.move('N');
    expect(sut.position).toStrictEqual({ x: 0, y: 1 });
    sut.move('N');
    expect(sut.position).toStrictEqual({ x: 0, y: 2 });
    sut.move('E');
    expect(sut.position).toStrictEqual({ x: 1, y: 2 });
    sut.move('S');
    expect(sut.position).toStrictEqual({ x: 1, y: 1 });
    sut.move('W');
    sut.move('S');
    expect(sut.position).toStrictEqual({ x: 0, y: 0 });
  });

  it('should not move outside the boundary of the warehouse', () => {
    const roof: Roof = { dimensionX: 9, dimensionY: 9 };
    const start: Position = { x: 0, y: 0 };
    const sut = new Robot(roof, start);
    expect(sut.position).toStrictEqual(start);
    sut.move('N');
    expect(sut.position).toStrictEqual({ x: 0, y: 1 });
    sut.move('N');
    expect(sut.position).toStrictEqual({ x: 0, y: 2 });
    sut.move('E');
    expect(sut.position).toStrictEqual({ x: 1, y: 2 });
    sut.move('S');
    expect(sut.position).toStrictEqual({ x: 1, y: 1 });
    sut.move('W');
    sut.move('W');
    sut.move('S');
    expect(sut.position).toStrictEqual({ x: 0, y: 0 });
  });
});
