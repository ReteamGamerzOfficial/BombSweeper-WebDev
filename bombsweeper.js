
function game_back() {
    document.getElementById("mega_div_game_results").style.display = 'none';
    document.getElementById("mega_div_game_elements").style.display = 'block';
    game_button.disabled = false;
}
// Page Loader Codes
window.onload = function() {
    console.log("Page Loaded :")
    document.getElementById("mega_div_game_results").style.display = 'none';
    document.getElementById("mega_div_game_elements").style.display = 'block';
    tile_1.disabled = true;
    tile_2.disabled = true;
    tile_3.disabled = true;
    tile_4.disabled = true;
    tile_5.disabled = true;
    tile_6.disabled = true;
    tile_7.disabled = true;
    tile_8.disabled = true;
    tile_9.disabled = true;
    tile_10.disabled = true;
    tile_11.disabled = true;
    tile_12.disabled = true;
    tile_13.disabled = true;
    tile_14.disabled = true;
    tile_15.disabled = true;
    tile_16.disabled = true;

};


// Random Number Generator

var random_number = 0;
var game_button = document.getElementById("start_game");
tile_1 = document.getElementById("tile_1");
tile_2 = document.getElementById("tile_2");
tile_3 = document.getElementById("tile_3");
tile_4 = document.getElementById("tile_4");
tile_5 = document.getElementById("tile_5");
tile_6 = document.getElementById("tile_6");
tile_7 = document.getElementById("tile_7");
tile_8 = document.getElementById("tile_8");
tile_9 = document.getElementById("tile_9");
tile_10 = document.getElementById("tile_10");
tile_11 = document.getElementById("tile_11");
tile_12 = document.getElementById("tile_12");
tile_13= document.getElementById("tile_13");
tile_14 = document.getElementById("tile_14");
tile_15 = document.getElementById("tile_15");
tile_16 = document.getElementById("tile_16");

function game_start() {
    random_number = Math.floor((Math.random() * 10) + 7);
    console.log("Treasure Tile _> " + random_number);
    game_button.disabled = true;
    tile_1.disabled = false;
    tile_2.disabled = false;
    tile_3.disabled = false;
    tile_4.disabled = false;
    tile_5.disabled = false;
    tile_6.disabled = false;
    tile_7.disabled = false;
    tile_8.disabled = false;
    tile_9.disabled = false;
    tile_10.disabled = false;
    tile_11.disabled = false;
    tile_12.disabled = false;
    tile_13.disabled = false;
    tile_14.disabled = false;
    tile_15.disabled = false;
    tile_16.disabled = false;
}

tile_1.addEventListener('click', ()=>{
    console.log("Pulse Signal _> Tile 1");
    tile_1.disabled = true;
    tile_2.disabled = true;
    tile_3.disabled = true;
    tile_4.disabled = true;
    tile_5.disabled = true;
    tile_6.disabled = true;
    tile_7.disabled = true;
    tile_8.disabled = true;
    tile_9.disabled = true;
    tile_10.disabled = true;
    tile_11.disabled = true;
    tile_12.disabled = true;
    tile_13.disabled = true;
    tile_14.disabled = true;
    tile_15.disabled = true;
    tile_16.disabled = true;
    if(random_number == 1 ) {
        document.getElementById("mega_div_game_results").style.display = 'block';
        document.getElementById("mega_div_game_elements").style.display = 'none';
        document.getElementById("result_h1").innerHTML = "Victory";
        document.getElementById("result_img_victory").style.display = 'block';
        document.getElementById("result_img_lose").style.display = 'none';
    } else {
        document.getElementById("mega_div_game_results").style.display = 'block';
        document.getElementById("mega_div_game_elements").style.display = 'none';
        document.getElementById("result_h1").innerHTML = "BOOOOOOM You Lost";
        document.getElementById("result_img_victory").style.display = 'none';
        document.getElementById("result_img_lose").style.display = 'block';
    }
})

tile_2.addEventListener('click', ()=>{
    console.log("Pulse Signal _> Tile 2");
    tile_1.disabled = true;
    tile_2.disabled = true;
    tile_3.disabled = true;
    tile_4.disabled = true;
    tile_5.disabled = true;
    tile_6.disabled = true;
    tile_7.disabled = true;
    tile_8.disabled = true;
    tile_9.disabled = true;
    tile_10.disabled = true;
    tile_11.disabled = true;
    tile_12.disabled = true;
    tile_13.disabled = true;
    tile_14.disabled = true;
    tile_15.disabled = true;
    tile_16.disabled = true;
    if(random_number == 2 ) {
        document.getElementById("mega_div_game_results").style.display = 'block';
        document.getElementById("mega_div_game_elements").style.display = 'none';
        document.getElementById("result_h1").innerHTML = "Victory";
        document.getElementById("result_img_victory").style.display = 'block';
        document.getElementById("result_img_lose").style.display = 'none';
    } else {
        document.getElementById("mega_div_game_results").style.display = 'block';
        document.getElementById("mega_div_game_elements").style.display = 'none';
        document.getElementById("result_h1").innerHTML = "BOOOOOOM You Lost";
        document.getElementById("result_img_victory").style.display = 'none';
        document.getElementById("result_img_lose").style.display = 'block';
    }
})

tile_3.addEventListener('click', ()=>{
    console.log("Pulse Signal _> Tile 3");
    tile_1.disabled = true;
    tile_2.disabled = true;
    tile_3.disabled = true;
    tile_4.disabled = true;
    tile_5.disabled = true;
    tile_6.disabled = true;
    tile_7.disabled = true;
    tile_8.disabled = true;
    tile_9.disabled = true;
    tile_10.disabled = true;
    tile_11.disabled = true;
    tile_12.disabled = true;
    tile_13.disabled = true;
    tile_14.disabled = true;
    tile_15.disabled = true;
    tile_16.disabled = true;
    if(random_number == 3 ) {
        document.getElementById("mega_div_game_results").style.display = 'block';
        document.getElementById("mega_div_game_elements").style.display = 'none';
        document.getElementById("result_h1").innerHTML = "Victory";
        document.getElementById("result_img_victory").style.display = 'block';
        document.getElementById("result_img_lose").style.display = 'none';
    } else {
        document.getElementById("mega_div_game_results").style.display = 'block';
        document.getElementById("mega_div_game_elements").style.display = 'none';
        document.getElementById("result_h1").innerHTML = "BOOOOOOM You Lost";
        document.getElementById("result_img_victory").style.display = 'none';
        document.getElementById("result_img_lose").style.display = 'block';
    }
})


tile_4.addEventListener('click', ()=>{
    console.log("Pulse Signal _> Tile 4");
    tile_1.disabled = true;
    tile_2.disabled = true;
    tile_3.disabled = true;
    tile_4.disabled = true;
    tile_5.disabled = true;
    tile_6.disabled = true;
    tile_7.disabled = true;
    tile_8.disabled = true;
    tile_9.disabled = true;
    tile_10.disabled = true;
    tile_11.disabled = true;
    tile_12.disabled = true;
    tile_13.disabled = true;
    tile_14.disabled = true;
    tile_15.disabled = true;
    tile_16.disabled = true;
    if(random_number == 4 ) {
        document.getElementById("mega_div_game_results").style.display = 'block';
        document.getElementById("mega_div_game_elements").style.display = 'none';
        document.getElementById("result_h1").innerHTML = "Victory";
        document.getElementById("result_img_victory").style.display = 'block';
        document.getElementById("result_img_lose").style.display = 'none';
    } else {
        document.getElementById("mega_div_game_results").style.display = 'block';
        document.getElementById("mega_div_game_elements").style.display = 'none';
        document.getElementById("result_h1").innerHTML = "BOOOOOOM You Lost";
        document.getElementById("result_img_victory").style.display = 'none';
        document.getElementById("result_img_lose").style.display = 'block';
    }
})


tile_5.addEventListener('click', ()=>{
    console.log("Pulse Signal _> Tile 5");
    tile_1.disabled = true;
    tile_2.disabled = true;
    tile_3.disabled = true;
    tile_4.disabled = true;
    tile_5.disabled = true;
    tile_6.disabled = true;
    tile_7.disabled = true;
    tile_8.disabled = true;
    tile_9.disabled = true;
    tile_10.disabled = true;
    tile_11.disabled = true;
    tile_12.disabled = true;
    tile_13.disabled = true;
    tile_14.disabled = true;
    tile_15.disabled = true;
    tile_16.disabled = true;
    if(random_number == 5 ) {
        document.getElementById("mega_div_game_results").style.display = 'block';
        document.getElementById("mega_div_game_elements").style.display = 'none';
        document.getElementById("result_h1").innerHTML = "Victory";
        document.getElementById("result_img_victory").style.display = 'block';
        document.getElementById("result_img_lose").style.display = 'none';
    } else {
        document.getElementById("mega_div_game_results").style.display = 'block';
        document.getElementById("mega_div_game_elements").style.display = 'none';
        document.getElementById("result_h1").innerHTML = "BOOOOOOM You Lost";
        document.getElementById("result_img_victory").style.display = 'none';
        document.getElementById("result_img_lose").style.display = 'block';
    }
})


tile_6.addEventListener('click', ()=>{
    console.log("Pulse Signal _> Tile 6");
    tile_1.disabled = true;
    tile_2.disabled = true;
    tile_3.disabled = true;
    tile_4.disabled = true;
    tile_5.disabled = true;
    tile_6.disabled = true;
    tile_7.disabled = true;
    tile_8.disabled = true;
    tile_9.disabled = true;
    tile_10.disabled = true;
    tile_11.disabled = true;
    tile_12.disabled = true;
    tile_13.disabled = true;
    tile_14.disabled = true;
    tile_15.disabled = true;
    tile_16.disabled = true;
    if(random_number == 6 ) {
        document.getElementById("mega_div_game_results").style.display = 'block';
        document.getElementById("mega_div_game_elements").style.display = 'none';
        document.getElementById("result_h1").innerHTML = "Victory";
        document.getElementById("result_img_victory").style.display = 'block';
        document.getElementById("result_img_lose").style.display = 'none';
    } else {
        document.getElementById("mega_div_game_results").style.display = 'block';
        document.getElementById("mega_div_game_elements").style.display = 'none';
        document.getElementById("result_h1").innerHTML = "BOOOOOOM You Lost";
        document.getElementById("result_img_victory").style.display = 'none';
        document.getElementById("result_img_lose").style.display = 'block';
    }
})


tile_7.addEventListener('click', ()=>{
    console.log("Pulse Signal _> Tile 7");
    tile_1.disabled = true;
    tile_2.disabled = true;
    tile_3.disabled = true;
    tile_4.disabled = true;
    tile_5.disabled = true;
    tile_6.disabled = true;
    tile_7.disabled = true;
    tile_8.disabled = true;
    tile_9.disabled = true;
    tile_10.disabled = true;
    tile_11.disabled = true;
    tile_12.disabled = true;
    tile_13.disabled = true;
    tile_14.disabled = true;
    tile_15.disabled = true;
    tile_16.disabled = true;
    if(random_number == 7 ) {
        document.getElementById("mega_div_game_results").style.display = 'block';
        document.getElementById("mega_div_game_elements").style.display = 'none';
        document.getElementById("result_h1").innerHTML = "Victory";
        document.getElementById("result_img_victory").style.display = 'block';
        document.getElementById("result_img_lose").style.display = 'none';
    } else {
        document.getElementById("mega_div_game_results").style.display = 'block';
        document.getElementById("mega_div_game_elements").style.display = 'none';
        document.getElementById("result_h1").innerHTML = "BOOOOOOM You Lost";
        document.getElementById("result_img_victory").style.display = 'none';
        document.getElementById("result_img_lose").style.display = 'block';
    }
})


tile_8.addEventListener('click', ()=>{
    console.log("Pulse Signal _> Tile 8");
    if(random_number == 8 ) {
        document.getElementById("mega_div_game_results").style.display = 'block';
        document.getElementById("mega_div_game_elements").style.display = 'none';
        document.getElementById("result_h1").innerHTML = "Victory";
        document.getElementById("result_img_victory").style.display = 'block';
        document.getElementById("result_img_lose").style.display = 'none';
    } else {
        document.getElementById("mega_div_game_results").style.display = 'block';
        document.getElementById("mega_div_game_elements").style.display = 'none';
        document.getElementById("result_h1").innerHTML = "BOOOOOOM You Lost";
        document.getElementById("result_img_victory").style.display = 'none';
        document.getElementById("result_img_lose").style.display = 'block';
    }
})


tile_9.addEventListener('click', ()=>{
    console.log("Pulse Signal _> Tile 9");
    tile_1.disabled = true;
    tile_2.disabled = true;
    tile_3.disabled = true;
    tile_4.disabled = true;
    tile_5.disabled = true;
    tile_6.disabled = true;
    tile_7.disabled = true;
    tile_8.disabled = true;
    tile_9.disabled = true;
    tile_10.disabled = true;
    tile_11.disabled = true;
    tile_12.disabled = true;
    tile_13.disabled = true;
    tile_14.disabled = true;
    tile_15.disabled = true;
    tile_16.disabled = true;
    if(random_number == 9 ) {
        document.getElementById("mega_div_game_results").style.display = 'block';
        document.getElementById("mega_div_game_elements").style.display = 'none';
        document.getElementById("result_h1").innerHTML = "Victory";
        document.getElementById("result_img_victory").style.display = 'block';
        document.getElementById("result_img_lose").style.display = 'none';
    } else {
        document.getElementById("mega_div_game_results").style.display = 'block';
        document.getElementById("mega_div_game_elements").style.display = 'none';
        document.getElementById("result_h1").innerHTML = "BOOOOOOM You Lost";
        document.getElementById("result_img_victory").style.display = 'none';
        document.getElementById("result_img_lose").style.display = 'block';
    }
})


tile_10.addEventListener('click', ()=>{
    console.log("Pulse Signal _> Tile 10");
    tile_1.disabled = true;
    tile_2.disabled = true;
    tile_3.disabled = true;
    tile_4.disabled = true;
    tile_5.disabled = true;
    tile_6.disabled = true;
    tile_7.disabled = true;
    tile_8.disabled = true;
    tile_9.disabled = true;
    tile_10.disabled = true;
    tile_11.disabled = true;
    tile_12.disabled = true;
    tile_13.disabled = true;
    tile_14.disabled = true;
    tile_15.disabled = true;
    tile_16.disabled = true;
    if(random_number == 10 ) {
        document.getElementById("mega_div_game_results").style.display = 'block';
        document.getElementById("mega_div_game_elements").style.display = 'none';
        document.getElementById("result_h1").innerHTML = "Victory";
        document.getElementById("result_img_victory").style.display = 'block';
        document.getElementById("result_img_lose").style.display = 'none';
    } else {
        document.getElementById("mega_div_game_results").style.display = 'block';
        document.getElementById("mega_div_game_elements").style.display = 'none';
        document.getElementById("result_h1").innerHTML = "BOOOOOOM You Lost";
        document.getElementById("result_img_victory").style.display = 'none';
        document.getElementById("result_img_lose").style.display = 'block';
    }
})


tile_11.addEventListener('click', ()=>{
    console.log("Pulse Signal _> Tile 11");
    tile_1.disabled = true;
    tile_2.disabled = true;
    tile_3.disabled = true;
    tile_4.disabled = true;
    tile_5.disabled = true;
    tile_6.disabled = true;
    tile_7.disabled = true;
    tile_8.disabled = true;
    tile_9.disabled = true;
    tile_10.disabled = true;
    tile_11.disabled = true;
    tile_12.disabled = true;
    tile_13.disabled = true;
    tile_14.disabled = true;
    tile_15.disabled = true;
    tile_16.disabled = true;
    if(random_number == 11 ) {
        document.getElementById("mega_div_game_results").style.display = 'block';
        document.getElementById("mega_div_game_elements").style.display = 'none';
        document.getElementById("result_h1").innerHTML = "Victory";
        document.getElementById("result_img_victory").style.display = 'block';
        document.getElementById("result_img_lose").style.display = 'none';
    } else {
        document.getElementById("mega_div_game_results").style.display = 'block';
        document.getElementById("mega_div_game_elements").style.display = 'none';
        document.getElementById("result_h1").innerHTML = "BOOOOOOM You Lost";
        document.getElementById("result_img_victory").style.display = 'none';
        document.getElementById("result_img_lose").style.display = 'block';
    }
})


tile_12.addEventListener('click', ()=>{
    console.log("Pulse Signal _> Tile 12");
    tile_1.disabled = true;
    tile_2.disabled = true;
    tile_3.disabled = true;
    tile_4.disabled = true;
    tile_5.disabled = true;
    tile_6.disabled = true;
    tile_7.disabled = true;
    tile_8.disabled = true;
    tile_9.disabled = true;
    tile_10.disabled = true;
    tile_11.disabled = true;
    tile_12.disabled = true;
    tile_13.disabled = true;
    tile_14.disabled = true;
    tile_15.disabled = true;
    tile_16.disabled = true;
    if(random_number == 12 ) {
        document.getElementById("mega_div_game_results").style.display = 'block';
        document.getElementById("mega_div_game_elements").style.display = 'none';
        document.getElementById("result_h1").innerHTML = "Victory";
        document.getElementById("result_img_victory").style.display = 'block';
        document.getElementById("result_img_lose").style.display = 'none';
    } else {
        document.getElementById("mega_div_game_results").style.display = 'block';
        document.getElementById("mega_div_game_elements").style.display = 'none';
        document.getElementById("result_h1").innerHTML = "BOOOOOOM You Lost";
        document.getElementById("result_img_victory").style.display = 'none';
        document.getElementById("result_img_lose").style.display = 'block';
    }
})

tile_13.addEventListener('click', ()=>{
    console.log("Pulse Signal _> Tile 13");
    tile_1.disabled = true;
    tile_2.disabled = true;
    tile_3.disabled = true;
    tile_4.disabled = true;
    tile_5.disabled = true;
    tile_6.disabled = true;
    tile_7.disabled = true;
    tile_8.disabled = true;
    tile_9.disabled = true;
    tile_10.disabled = true;
    tile_11.disabled = true;
    tile_12.disabled = true;
    tile_13.disabled = true;
    tile_14.disabled = true;
    tile_15.disabled = true;
    tile_16.disabled = true;
    if(random_number == 13 ) {
        document.getElementById("mega_div_game_results").style.display = 'block';
        document.getElementById("mega_div_game_elements").style.display = 'none';
        document.getElementById("result_h1").innerHTML = "Victory";
        document.getElementById("result_img_victory").style.display = 'block';
        document.getElementById("result_img_lose").style.display = 'none';
    } else {
        document.getElementById("mega_div_game_results").style.display = 'block';
        document.getElementById("mega_div_game_elements").style.display = 'none';
        document.getElementById("result_h1").innerHTML = "BOOOOOOM You Lost";
        document.getElementById("result_img_victory").style.display = 'none';
        document.getElementById("result_img_lose").style.display = 'block';
    }
})


tile_14.addEventListener('click', ()=>{
    console.log("Pulse Signal _> Tile 14");
    tile_1.disabled = true;
    tile_2.disabled = true;
    tile_3.disabled = true;
    tile_4.disabled = true;
    tile_5.disabled = true;
    tile_6.disabled = true;
    tile_7.disabled = true;
    tile_8.disabled = true;
    tile_9.disabled = true;
    tile_10.disabled = true;
    tile_11.disabled = true;
    tile_12.disabled = true;
    tile_13.disabled = true;
    tile_14.disabled = true;
    tile_15.disabled = true;
    tile_16.disabled = true;
    if(random_number == 14 ) {
        document.getElementById("mega_div_game_results").style.display = 'block';
        document.getElementById("mega_div_game_elements").style.display = 'none';
        document.getElementById("result_h1").innerHTML = "Victory";
        document.getElementById("result_img_victory").style.display = 'block';
        document.getElementById("result_img_lose").style.display = 'none';
    } else {
        document.getElementById("mega_div_game_results").style.display = 'block';
        document.getElementById("mega_div_game_elements").style.display = 'none';
        document.getElementById("result_h1").innerHTML = "BOOOOOOM You Lost";
        document.getElementById("result_img_victory").style.display = 'none';
        document.getElementById("result_img_lose").style.display = 'block';
    }
})

tile_15.addEventListener('click', ()=>{
    console.log("Pulse Signal _> Tile 15");
    tile_1.disabled = true;
    tile_2.disabled = true;
    tile_3.disabled = true;
    tile_4.disabled = true;
    tile_5.disabled = true;
    tile_6.disabled = true;
    tile_7.disabled = true;
    tile_8.disabled = true;
    tile_9.disabled = true;
    tile_10.disabled = true;
    tile_11.disabled = true;
    tile_12.disabled = true;
    tile_13.disabled = true;
    tile_14.disabled = true;
    tile_15.disabled = true;
    tile_16.disabled = true;
    if(random_number == 15 ) {
        document.getElementById("mega_div_game_results").style.display = 'block';
        document.getElementById("mega_div_game_elements").style.display = 'none';
        document.getElementById("result_h1").innerHTML = "Victory";
        document.getElementById("result_img_victory").style.display = 'block';
        document.getElementById("result_img_lose").style.display = 'none';
    } else {
        document.getElementById("mega_div_game_results").style.display = 'block';
        document.getElementById("mega_div_game_elements").style.display = 'none';
        document.getElementById("result_h1").innerHTML = "BOOOOOOM You Lost";
        document.getElementById("result_img_victory").style.display = 'none';
        document.getElementById("result_img_lose").style.display = 'block';
    }
})


tile_16.addEventListener('click', ()=>{
    console.log("Pulse Signal _> Tile 16");
    tile_1.disabled = true;
    tile_2.disabled = true;
    tile_3.disabled = true;
    tile_4.disabled = true;
    tile_5.disabled = true;
    tile_6.disabled = true;
    tile_7.disabled = true;
    tile_8.disabled = true;
    tile_9.disabled = true;
    tile_10.disabled = true;
    tile_11.disabled = true;
    tile_12.disabled = true;
    tile_13.disabled = true;
    tile_14.disabled = true;
    tile_15.disabled = true;
    tile_16.disabled = true;
    if(random_number == 16 ) {
        document.getElementById("mega_div_game_results").style.display = 'block';
        document.getElementById("mega_div_game_elements").style.display = 'none';
        document.getElementById("result_h1").innerHTML = "Victory";
        document.getElementById("result_img_victory").style.display = 'block';
        document.getElementById("result_img_lose").style.display = 'none';
    } else {
        document.getElementById("mega_div_game_results").style.display = 'block';
        document.getElementById("mega_div_game_elements").style.display = 'none';
        document.getElementById("result_h1").innerHTML = "BOOOOOOM You Lost";
        document.getElementById("result_img_victory").style.display = 'none';
        document.getElementById("result_img_lose").style.display = 'block';
    }
})





