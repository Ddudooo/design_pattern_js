import { PointFactory } from './pointFactory'

const point = PointFactory.newPolarPoint(5, Math.PI/2)
const point2 = PointFactory.newCartesianPoint(5,6)

console.log(point)
console.log(point2)