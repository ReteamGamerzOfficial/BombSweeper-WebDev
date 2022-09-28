// Functional Codes
function game_back() {
    document.getElementById("mega_div_game_results").style.display = 'none';
    document.getElementById("mega_div_game_elements").style.display = 'block';
    game_button.disabled = false;
    game_start();
    document.getElementById("game_played").innerHTML = "Games Played -> " + number_of_games_played;
    document.getElementById("game_won").innerHTML = "Games Won -> " + number_of_game_won;
    document.getElementById("game_lost").innerHTML = "Games Lost -> " + number_of_game_lost;
    document.getElementById("game_winstreak").innerHTML = "Winstreak -> " + winstreak;

}

// Page Loader Codes
window.onload = function() {
    console.log("Page Loaded :")
    document.getElementById("mega_div_game_results").style.display = 'none';
    document.getElementById("mega_div_game_elements").style.display = 'block';
    document.getElementById("stop_game").style.display = 'none';
    document.getElementById("start_game").style.display = 'block';
    document.getElementById("mega_div_statistics").style.display = 'none';
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




// Random Number Generator Variables

var random_number = 0;
var number_of_games_played = 0;
var number_of_game_won = 0;
var number_of_game_lost = 0; 
var winstreak = 0;
var game_button = document.getElementById("start_game");
var statistics_button = document.getElementById("tester_button");
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

function reset() {
    number_of_games_played = 0;
    number_of_game_won = 0;
    number_of_game_lost = 0; 
    winstreak = 0;

    document.getElementById("game_played").innerHTML = "Games Played -> 0";
    document.getElementById("game_won").innerHTML = "Games Won -> 0";
    document.getElementById("game_lost").innerHTML = "Games Lost -> 0";
    document.getElementById("game_winstreak").innerHTML = "Winstreak -> 0";
}

function game_stop() {

    document.getElementById("stop_game").style.display = 'none';
    document.getElementById("start_game").style.display = 'block';
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
    console.log("Console _> Game Has Stopped");
    document.getElementById("mega_div_statistics").style.display = 'none';
    document.getElementById("mega_div_game_elements").style.display = 'block';
}


function game_start() {
    random_number = Math.floor((Math.random() * 10) + 7);
    document.getElementById("start_game").style.display = 'none';
    document.getElementById("stop_game").style.display = 'block';
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

    document.getElementById("mega_div_statistics").style.display = 'none';
    document.getElementById("mega_div_game_elements").style.display = 'block';

}



// Tiles Code

tile_1.addEventListener('click', ()=>{
    console.log("Pulse Signal _> Tile 1");
    number_of_games_played  = number_of_games_played + 1;
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
        number_of_game_won = number_of_game_won + 1;
        winstreak = winstreak + 1;
    } else {
        document.getElementById("mega_div_game_results").style.display = 'block';
        document.getElementById("mega_div_game_elements").style.display = 'none';
        document.getElementById("result_h1").innerHTML = "BOOOOOOM You Lost";
        document.getElementById("result_img_victory").style.display = 'none';
        document.getElementById("result_img_lose").style.display = 'block';
        number_of_game_lost = number_of_game_lost + 1;
        winstreak = 0;
    }
})

tile_2.addEventListener('click', ()=>{
    console.log("Pulse Signal _> Tile 2");
    number_of_games_played  = number_of_games_played + 1;
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
        number_of_game_won = number_of_game_won + 1;
        winstreak = winstreak + 1;
    } else {
        document.getElementById("mega_div_game_results").style.display = 'block';
        document.getElementById("mega_div_game_elements").style.display = 'none';
        document.getElementById("result_h1").innerHTML = "BOOOOOOM You Lost";
        document.getElementById("result_img_victory").style.display = 'none';
        document.getElementById("result_img_lose").style.display = 'block';
        number_of_game_lost = number_of_game_lost + 1;
        winstreak = 0;
    }
})

tile_3.addEventListener('click', ()=>{
    console.log("Pulse Signal _> Tile 3");
    number_of_games_played  = number_of_games_played + 1;
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
        number_of_game_won = number_of_game_won + 1;
        winstreak = winstreak + 1;
    } else {
        document.getElementById("mega_div_game_results").style.display = 'block';
        document.getElementById("mega_div_game_elements").style.display = 'none';
        document.getElementById("result_h1").innerHTML = "BOOOOOOM You Lost";
        document.getElementById("result_img_victory").style.display = 'none';
        document.getElementById("result_img_lose").style.display = 'block';
        number_of_game_lost = number_of_game_lost + 1;
        winstreak = 0;
    }
})


tile_4.addEventListener('click', ()=>{
    console.log("Pulse Signal _> Tile 4");
    number_of_games_played  = number_of_games_played + 1;
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
        number_of_game_won = number_of_game_won + 1;
        winstreak = winstreak + 1;
    } else {
        document.getElementById("mega_div_game_results").style.display = 'block';
        document.getElementById("mega_div_game_elements").style.display = 'none';
        document.getElementById("result_h1").innerHTML = "BOOOOOOM You Lost";
        document.getElementById("result_img_victory").style.display = 'none';
        document.getElementById("result_img_lose").style.display = 'block';
        number_of_game_lost = number_of_game_lost + 1;
        winstreak = 0;
    }
})


tile_5.addEventListener('click', ()=>{
    console.log("Pulse Signal _> Tile 5");
    number_of_games_played  = number_of_games_played + 1;
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
        number_of_game_won = number_of_game_won + 1;
        winstreak = winstreak + 1;
    } else {
        document.getElementById("mega_div_game_results").style.display = 'block';
        document.getElementById("mega_div_game_elements").style.display = 'none';
        document.getElementById("result_h1").innerHTML = "BOOOOOOM You Lost";
        document.getElementById("result_img_victory").style.display = 'none';
        document.getElementById("result_img_lose").style.display = 'block';
        number_of_game_lost = number_of_game_lost + 1;
        winstreak = 0;
    }
})


tile_6.addEventListener('click', ()=>{
    console.log("Pulse Signal _> Tile 6");
    number_of_games_played  = number_of_games_played + 1;
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
        number_of_game_won = number_of_game_won + 1;
        winstreak = winstreak + 1;
    } else {
        document.getElementById("mega_div_game_results").style.display = 'block';
        document.getElementById("mega_div_game_elements").style.display = 'none';
        document.getElementById("result_h1").innerHTML = "BOOOOOOM You Lost";
        document.getElementById("result_img_victory").style.display = 'none';
        document.getElementById("result_img_lose").style.display = 'block';
        number_of_game_lost = number_of_game_lost + 1;
        winstreak = 0;
    }
})


tile_7.addEventListener('click', ()=>{
    console.log("Pulse Signal _> Tile 7");
    number_of_games_played  = number_of_games_played + 1;
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
        number_of_game_won = number_of_game_won + 1;
        winstreak = winstreak + 1;
    } else {
        document.getElementById("mega_div_game_results").style.display = 'block';
        document.getElementById("mega_div_game_elements").style.display = 'none';
        document.getElementById("result_h1").innerHTML = "BOOOOOOM You Lost";
        document.getElementById("result_img_victory").style.display = 'none';
        document.getElementById("result_img_lose").style.display = 'block';
        number_of_game_lost = number_of_game_lost + 1;
        winstreak = 0;
    }
})


tile_8.addEventListener('click', ()=>{
    console.log("Pulse Signal _> Tile 8");
    number_of_games_played  = number_of_games_played + 1;
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
    if(random_number == 8 ) {
        document.getElementById("mega_div_game_results").style.display = 'block';
        document.getElementById("mega_div_game_elements").style.display = 'none';
        document.getElementById("result_h1").innerHTML = "Victory";
        document.getElementById("result_img_victory").style.display = 'block';
        document.getElementById("result_img_lose").style.display = 'none';
        number_of_game_won = number_of_game_won + 1;
        winstreak = winstreak + 1;
    } else {
        document.getElementById("mega_div_game_results").style.display = 'block';
        document.getElementById("mega_div_game_elements").style.display = 'none';
        document.getElementById("result_h1").innerHTML = "BOOOOOOM You Lost";
        document.getElementById("result_img_victory").style.display = 'none';
        document.getElementById("result_img_lose").style.display = 'block';
        number_of_game_lost = number_of_game_lost + 1;
        winstreak = 0;
    }
})


tile_9.addEventListener('click', ()=>{
    console.log("Pulse Signal _> Tile 9");
    number_of_games_played  = number_of_games_played + 1;
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
        number_of_game_won = number_of_game_won + 1;
        winstreak = winstreak + 1;
    } else {
        document.getElementById("mega_div_game_results").style.display = 'block';
        document.getElementById("mega_div_game_elements").style.display = 'none';
        document.getElementById("result_h1").innerHTML = "BOOOOOOM You Lost";
        document.getElementById("result_img_victory").style.display = 'none';
        document.getElementById("result_img_lose").style.display = 'block';
        number_of_game_lost = number_of_game_lost + 1;
        winstreak = 0;
    }
})


tile_10.addEventListener('click', ()=>{
    console.log("Pulse Signal _> Tile 10");
    number_of_games_played  = number_of_games_played + 1;
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
        number_of_game_won = number_of_game_won + 1;
        winstreak = winstreak + 1;
    } else {
        document.getElementById("mega_div_game_results").style.display = 'block';
        document.getElementById("mega_div_game_elements").style.display = 'none';
        document.getElementById("result_h1").innerHTML = "BOOOOOOM You Lost";
        document.getElementById("result_img_victory").style.display = 'none';
        document.getElementById("result_img_lose").style.display = 'block';
        number_of_game_lost = number_of_game_lost + 1;
        winstreak = 0;
    }
})


tile_11.addEventListener('click', ()=>{
    console.log("Pulse Signal _> Tile 11");
    number_of_games_played  = number_of_games_played + 1;
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
        number_of_game_won = number_of_game_won + 1;
        winstreak = winstreak + 1;
    } else {
        document.getElementById("mega_div_game_results").style.display = 'block';
        document.getElementById("mega_div_game_elements").style.display = 'none';
        document.getElementById("result_h1").innerHTML = "BOOOOOOM You Lost";
        document.getElementById("result_img_victory").style.display = 'none';
        document.getElementById("result_img_lose").style.display = 'block';
        number_of_game_lost = number_of_game_lost + 1;
        winstreak = 0;
    }
})


tile_12.addEventListener('click', ()=>{
    console.log("Pulse Signal _> Tile 12");
    number_of_games_played  = number_of_games_played + 1;
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
        number_of_game_won = number_of_game_won + 1;
        winstreak = winstreak + 1;
    } else {
        document.getElementById("mega_div_game_results").style.display = 'block';
        document.getElementById("mega_div_game_elements").style.display = 'none';
        document.getElementById("result_h1").innerHTML = "BOOOOOOM You Lost";
        document.getElementById("result_img_victory").style.display = 'none';
        document.getElementById("result_img_lose").style.display = 'block';
        number_of_game_lost = number_of_game_lost + 1;
        winstreak = 0;
    }
})

tile_13.addEventListener('click', ()=>{
    console.log("Pulse Signal _> Tile 13");
    number_of_games_played  = number_of_games_played + 1;
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
        number_of_game_won = number_of_game_won + 1;
        winstreak = winstreak + 1;
    } else {
        document.getElementById("mega_div_game_results").style.display = 'block';
        document.getElementById("mega_div_game_elements").style.display = 'none';
        document.getElementById("result_h1").innerHTML = "BOOOOOOM You Lost";
        document.getElementById("result_img_victory").style.display = 'none';
        document.getElementById("result_img_lose").style.display = 'block';
        number_of_game_lost = number_of_game_lost + 1;
        winstreak = 0;
    }
})


tile_14.addEventListener('click', ()=>{
    console.log("Pulse Signal _> Tile 14");
    number_of_games_played  = number_of_games_played + 1;
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
        number_of_game_won = number_of_game_won + 1;
        winstreak = winstreak + 1;
    } else {
        document.getElementById("mega_div_game_results").style.display = 'block';
        document.getElementById("mega_div_game_elements").style.display = 'none';
        document.getElementById("result_h1").innerHTML = "BOOOOOOM You Lost";
        document.getElementById("result_img_victory").style.display = 'none';
        document.getElementById("result_img_lose").style.display = 'block';
        number_of_game_lost = number_of_game_lost + 1;
        winstreak = 0;
    }
})

tile_15.addEventListener('click', ()=>{
    console.log("Pulse Signal _> Tile 15");
    number_of_games_played  = number_of_games_played + 1;
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
        number_of_game_won = number_of_game_won + 1;
        winstreak = winstreak + 1;
    } else {
        document.getElementById("mega_div_game_results").style.display = 'block';
        document.getElementById("mega_div_game_elements").style.display = 'none';
        document.getElementById("result_h1").innerHTML = "BOOOOOOM You Lost";
        document.getElementById("result_img_victory").style.display = 'none';
        document.getElementById("result_img_lose").style.display = 'block';
        number_of_game_lost = number_of_game_lost + 1;
        winstreak = 0;
    }
})


tile_16.addEventListener('click', ()=>{
    console.log("Pulse Signal _> Tile 16");
    number_of_games_played  = number_of_games_played + 1;
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
        number_of_game_won = number_of_game_won + 1;
        winstreak = winstreak + 1;
    } else {
        document.getElementById("mega_div_game_results").style.display = 'block';
        document.getElementById("mega_div_game_elements").style.display = 'none';
        document.getElementById("result_h1").innerHTML = "BOOOOOOM You Lost";
        document.getElementById("result_img_victory").style.display = 'none';
        document.getElementById("result_img_lose").style.display = 'block';
        number_of_game_lost = number_of_game_lost + 1;
        winstreak = 0;
    }
})





