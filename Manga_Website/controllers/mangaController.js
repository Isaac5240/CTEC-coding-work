"use strict";
const MangaDB = require('../models/MangaDB');

var mangaDB = new MangaDB();

function getAllManga(request, respond){
    mangaDB.getAllManga(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

module.exports = {getAllManga};