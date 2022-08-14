"use strict";

class Character {
constructor(id, mangaId, character, portrait) {
    this.id = id;
    this.mangaId = mangaId;
    this.character = character;
    this.portrait = portrait;
}

getId(){
    return this.id;
}
getMangaId(){
    return this.mangaId;
}
getCharacter(){
    return this.character;
}
getPortrait(){
    return this.portrait;
}

}

module.exports = Character;