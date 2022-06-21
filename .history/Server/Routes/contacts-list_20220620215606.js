/** Alaa khdour -30123016 (jun 2022) */

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const contacts_list_1 = require("../Controllers/contacts-list");
const index_1 = require("../Util/index");
router.get('/contacts-list', index_1.AuthGuard, contacts_list_1.DisplayContactListPage);
router.get('/add', index_1.AuthGuard, contacts_list_1.DisplayAddPage);
router.get('/edit/:id', index_1.AuthGuard, contacts_list_1.DisplayEditPage);
router.post('/add', index_1.AuthGuard, contacts_list_1.ProcessAddPage);
router.post('/edit/:id', index_1.AuthGuard, contacts_list_1.ProcessEditPage);
router.get('/delete/:id', index_1.AuthGuard, contacts_list_1.ProcessDeletePage);
exports.default = router;
//# sourceMappingURL=contacts-list.js.map