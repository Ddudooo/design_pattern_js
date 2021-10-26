import { Point } from './point';
export declare class PointFactory {
    newCartesianPoint(x: number, y: number): Point;
    newPolarPoint(rho: number, theta: number): Point;
}
