"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wrapper = void 0;
class Wrapper {
    constructor(list) {
        this.list = list;
    }
    getFirst() { return this.list[0]; }
    getLast() { return this.list[this.list.length - 1]; }
    getList() { return this.list[this.list.length - 2]; }
}
exports.Wrapper = Wrapper;
//# sourceMappingURL=Wrapper.js.map