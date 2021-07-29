import express = require("express");
import { homeController } from "../../Controllers";

export const router = express.Router({
    strict: true
});

router.post("/", (req, res) => {
    homeController.create(req, res);
});

router.get('/', (req, res) => {
    homeController.read(req, res);
});

router.get('/home', (req, res) => {
    homeController.read(req, res);
});

router.put('/', (req, res) => {
    homeController.replace(req, res);
});

router.patch('/', (req, res) => {
    homeController.modify(req, res);
});

router.delete('/', (req, res) => {
    homeController.delete(req, res);
});