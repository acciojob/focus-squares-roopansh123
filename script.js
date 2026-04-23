
const squares = document.querySelectorAll(".square");

squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
        squares.forEach((sq) => {
            if (sq !== square) {
                sq.style.backgroundColor = "#6F4E37"; 
            }
        });
    });

    square.addEventListener("mouseout", () => {
        squares.forEach((sq) => {
            sq.style.backgroundColor = "#E6E6FA"; });
    });
});
