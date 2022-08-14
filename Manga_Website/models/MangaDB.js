"use strict";

var db = require('../db-connections');
class MangaDB{
    getAllManga(callback){
        var sql = "SELECT * from Manga_Website.manga";
        db.query(sql, callback);
    }
}

module.exports = MangaDB;