import { PointFactory } from './pointFactory'
import { Point } from './point'

const pointFactory:PointFactory = Point.factory

const point = pointFactory.newPolarPoint(5, Math.PI / 2)
const point2 = pointFactory.newCartesianPoint(5, 6)

console.log(point)
console.log(point2)
