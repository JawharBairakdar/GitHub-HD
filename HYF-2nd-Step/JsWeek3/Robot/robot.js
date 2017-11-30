(function () {
    const state = {
        board: [
            ['T', 'T', '.', 'F'],
            ['T', '.', '.', '.'],
            ['.', '.', '.', '.'],
            ['R', '.', '.', 'W']
        ],
        robot: {
            x: 0,
            y: 0,
            dir: 'up',
        },
        flagReached: false,
        moves: 0
    };
    state.board.reverse();

    function render() {
        console.log('move:', state.moves);
        for (let row = state.board.length - 1; row >= 0; row--) {
            const cells = state.board[row];
            //console.log(cells);
            let line = '';
            for (let col = 0; col < cells.length; col++) {
                const cell = cells[col];
                line += ' ' + cell + ' ';
            }
            console.log(line);
        }
        if (state.flagReached) {
            console.log('Hurray! Flag reached!');
        }
    }
    function move() {
        let x = state.robot.x;
        let y = state.robot.y;
        let dir = state.robot.dir;

        if (dir === 'up') {
            // y = Math.min(y + 1, state.board.length - 1);
            y = (y < state.board.length - 1) ? y + 1 : y;
        } else if (dir === 'down') {
            y = (y > 0) ? y - 1 : 0;
        } else if (dir === 'left') {
            x = (x > 0) ? x - 1 : 0;
        } else if (dir === 'right') {
            x = (x < state.board[y].length - 1) ? x + 1 : x;
        }
        switch (dir) {
            case 'up':
                y = (y < state.board.length - 1) ? y + 1 : y;
                break;
            case 'down':
                
                break;    
            case 'left':
                
                break;    
            case 'right':
                
                break;    
        }   

        const tagetContents = state.board[y][x];
        if (tagetContents === '.' || tagetContents === 'F') {
            state.robot.x = x;
            state.robot.y = y;
            state.board[y][x] = 'R';
            if (tagetContents === 'F') {
                state.flagReached = true;
            }
        }

        state.moves += 1;

        render();
    }
    function turn(turnDirection) {

    }
    render();
    move();
    turn('right');
    move();
    move();
    move();
    turn('left');
    move();
    move();
})();