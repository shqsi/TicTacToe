function game() {
    $('.game-cell').forEach(cell => {
        cell.click(function() {
            cellClicked(cell);
        });
    });
}

let player = 'X';

function cellClicked(cell) {
    
}
