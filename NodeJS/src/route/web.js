import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRouter = (app) => {
    router.get('/', homeController.getHomePage);

    // rest api: get, push, delete, update

    return app.use("/", router);
}

module.exports = initWebRouter;