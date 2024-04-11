const cells = document.querySelectorAll('.cell');
        const restartButton = document.getElementById('restart');
        const btn1 = document.querySelector('.btn1');
        const btn2 = document.querySelector('.btn2');
              
        

        
        function selectSymbol(symbol) {
            btn1.disabled = true;
            btn2.disabled = true;
            currentPlayerSymbol = symbol;
        }

        btn2.addEventListener('click', () => {
    currentPlayer = 1;
});

btn1.addEventListener('click', () => {
    currentPlayer = 2;
});


   //CELL---click event//

   function iconFallatEnd() {
    if (!this.classList.contains('occupied')) {
        // Add the symbol to the cell
        this.classList.add('occupied', currentPlayerSymbol);
        
        if (checkWin()) {
           restartGame(); // Restart the game
        } 
        if (currentPlayer === 1) {
            currentPlayer = 2;
            currentPlayerSymbol = 'fa fa-circle';
        } else {
            currentPlayer = 1;
            currentPlayerSymbol = 'fa fa-times';
        }
        
    }
}

        

       

     

        // Function to restart the game
        function restartGame() {
            //Restart buttton-------------//
            cells.forEach(cell => {
                cell.classList.remove('occupied', 'fa-times', 'fa-circle');
            });
            //Restart buttton-------------//
        }

        // Add event listeners
        cells.forEach(cell => {
            cell.addEventListener('click', iconFallatEnd);
        });

        restartButton.addEventListener('click', restartGame);
        btn1.addEventListener('click', () => selectSymbol('fa-times'));
        btn2.addEventListener('click', () => selectSymbol('fa-circle'));