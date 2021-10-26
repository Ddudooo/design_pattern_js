"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const point_1 = require("./point");
const pointFactory = point_1.Point.factory;
const point = pointFactory.newPolarPoint(5, Math.PI / 2);
const point2 = pointFactory.newCartesianPoint(5, 6);
console.log(point);
console.log(point2);
//# sourceMappingURL=app.js.map