import express from "express"

let configViewEngine = (app) => {
    //arrow function
    app.use(express.static("./src/public"))
    app.set("view engine", "ejs")
    // ejs: giup tao trang web dong thong qua viec nhung ma JavaScript truc tuiep vao HTML
    app.set("views", "./src/views")
}

module.exports = configViewEngine;