"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PointFactory = void 0;
const point_1 = require("./point");
class PointFactory {
    newCartesianPoint(x, y) {
        return new point_1.Point(x, y);
    }
    newPolarPoint(rho, theta) {
        return new point_1.Point(rho * Math.cos(theta), rho * Math.sin(theta));
    }
}
exports.PointFactory = PointFactory;
//# sourceMappingURL=pointFactory.js.map