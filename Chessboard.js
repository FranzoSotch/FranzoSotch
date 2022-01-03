let element = "#";
for (let j = 0 ; j <= 2 ; j = j + 1){
    element = element + " #"
   } //width of Chessboard=4
for (let i = 1 ; i <= 8 ; i = i+1){
    if (i %2 == 1){
     y = " " + element;
     console.log(y);
    }
    else {
     console.log(element);
    }
} //Height of Chessboard = 8