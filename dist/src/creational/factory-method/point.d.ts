import { PointFactory } from './pointFactory';
export declare class Point {
    private x;
    private y;
    constructor(x: number, y: number);
    static get factory(): PointFactory;
}
