"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_1 = require("../../domain/entities/user");
class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, name, email, password } = req.body;
            const newUser = new user_1.User(id, name, email, password);
            const createdUser = yield this.userService.createUser(newUser);
            res.status(201).json(createdUser);
        });
    }
    getUserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userService.getUserById(req.params.id);
            if (!user) {
                res.status(404).send('User not found');
                return;
            }
            res.json(user);
        });
    }
    getAllUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.userService.getAllUsers();
            res.json(users);
        });
    }
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedUser = yield this.userService.updateUser(req.params.id, req.body);
            if (!updatedUser) {
                res.status(404).send('User not found');
                return;
            }
            res.json(updatedUser);
        });
    }
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const success = yield this.userService.deleteUser(req.params.id);
            if (!success) {
                res.status(404).send('User not found');
                return;
            }
            res.status(204).send();
        });
    }
}
exports.UserController = UserController;
