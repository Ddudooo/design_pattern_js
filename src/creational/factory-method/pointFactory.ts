import { Point } from './point'

export class PointFactory {
  static newCartesianPoint(x:number, y: number){
    return new Point(x,y)
  }

  static newPolarPoint(rho: number, theta: number) {
    return new Point(rho * Math.cos(theta), rho * Math.sin(theta))
  }
}