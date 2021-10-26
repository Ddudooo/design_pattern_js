import PointFactory from '@/creational/factory-method/pointFactory'
import Point from '@/creational/factory-method/point'

const point: Point = PointFactory.newPolarPoint(5, Math.PI / 2)
const point2: Point = PointFactory.newCartesianPoint(5, 6)

console.log(point)
console.log(point2)
