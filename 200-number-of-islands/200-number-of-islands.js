/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let rows = grid.length;
    let columns = grid[0].length;
    let numOfIslands = 0;
    
    for(let row = 0; row < rows; row++ ){
        for(let col = 0; col < columns; col++){
            if(grid[row][col] === '1'){
                numOfIslands = numOfIslands + 1;
                
                // run dfs 
                dfs(grid,row,col)
            }
        }
    }
    return numOfIslands
};

function dfs(grid,row,col){
    // ignore invalid 
    if(row < 0 || row >= grid.length || col < 0 || col >= grid[0].length) return; 
        
    if(grid[row][col] === '0' ) return; // if visited, 0, -1

    grid[row][col] = '0'; // mark as visited

    dfs(grid, row-1, col) // left
    dfs(grid, row+1, col) // right
    dfs(grid, row, col-1) // down
    dfs(grid, row, col+1) // up
}