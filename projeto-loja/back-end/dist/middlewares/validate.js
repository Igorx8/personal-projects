"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenValidate = void 0;
const tokenValidate = (req, res, next) => {
    console.log(req.csrfToken());
    console.log('Passei pelo middleware');
    next();
};
exports.tokenValidate = tokenValidate;
//# sourceMappingURL=validate.js.map