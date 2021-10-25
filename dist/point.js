"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
const pointFactory_1 = require("./pointFactory");
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static get factory() {
        return new pointFactory_1.PointFactory();
    }
}
exports.Point = Point;
//# sourceMappingURL=point.js.map