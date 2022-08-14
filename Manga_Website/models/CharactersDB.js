"use strict";

var db = require('../db-connections');
class CharactersDB{
    getAllCharacters(callback){
        var sql = "SELECT * from Manga_Website.characters";
        db.query(sql, callback);
    }
}

module.exports = CharactersDB;