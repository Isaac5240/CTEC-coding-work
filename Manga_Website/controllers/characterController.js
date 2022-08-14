"use strict";
const CharactersDB = require('../models/CharactersDB');
const Character = require('../models/Character');

var charactersDB = new CharactersDB();

function getAllCharacters(request, respond){
    charactersDB.getAllCharacters(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

module.exports = {getAllCharacters};