"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
class Situacion extends sequelize_1.Model {
}
Situacion.init({
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    abreviatura: {
        type: sequelize_1.DataTypes.STRING
    },
    color: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: 'secondary'
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    sequelize: connection_1.default,
    modelName: 'situacion',
    timestamps: true,
});
exports.default = Situacion;
//# sourceMappingURL=situacion.js.map