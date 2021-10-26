import { Point } from './point';
export declare class PointFactory {
    static newCartesianPoint(x: number, y: number): Point;
    static newPolarPoint(rho: number, theta: number): Point;
}
