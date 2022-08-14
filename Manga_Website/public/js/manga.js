function getMangaData() {
    var request = new XMLHttpRequest();
    request.open('GET', manga_url, true);

    request.onload = function(){
    manga_array = JSON.parse(request.responseText);
    //fetch the characters as well
    //fetchCharacters();
    console.log(manga_array) // output to console
    displayManga();
};

request.send();}

function displayManga() {
    var table = document.getElementById("mangaTable");
    var mangaCount = 0;

    table.innerHTML = "";
    totalManga = manga_array.length;
    for (var count = 0; count < totalManga; count++) {    
        var thumb = manga_array[count].thumb;
        var manga = manga_array[count].manga;
		var cell = '<div class="card col-md-3" ><img class="card-img-top" src="' + thumb + '" alt="Card image cap" width=200" height="200">\
                    <div class="card-body"><i class="far fa-comment fa-lg" style="float:left;cursor:pointer" data-toggle="modal" data-target="#charactersModal" item="' + count + '" onClick="showMangaCharacters(this)"></i>\
                    <h5 style="padding-left:30px;cursor:pointer" data-toggle="modal" data-target="#mangaModal" class="card-title" item="' + count + '" onClick="showMangaDetails(this)">' + manga + '</h5></div>\
					</div>'
        table.insertAdjacentHTML('beforeend', cell);
        mangaCount++;
    }

}