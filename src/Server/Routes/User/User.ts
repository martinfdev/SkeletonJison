import express = require("express");
import { userController } from "../../Controllers";

export const router = express.Router({
    strict: true
});

router.post("/", (req, res) => {
    userController.create(req, res);
});

router.get('/', (req, res) => {
    userController.read(req, res);
});

router.put('/', (req, res) => {
    userController.replace(req, res);
});

router.patch('/', (req, res) => {
    userController.modify(req, res);
});

router.delete('/', (req, res) => {
    userController.delete(req, res);
});