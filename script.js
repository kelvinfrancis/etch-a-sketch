const container = document.querySelector('#container');
const squareGrid = document.createElement('div');
const btn = document.querySelector('button');

function createGrid(grid)
{
    for (let i = 0; i < grid; i++) 
    {
        const squares = document.createElement('div');
        squares.setAttribute('class', 'squares');

        for (let j = 0; j < grid; j++) 
        {
            const box = document.createElement('div');
            box.setAttribute('class', 'boxes');
            box.addEventListener('mousemove', () => 
            {
                box.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
            })
            squares.appendChild(box);
        }
        squareGrid.appendChild(squares);
    }
    container.appendChild(squareGrid);
}

let grid = 16;
createGrid(grid);

btn.addEventListener('click', () => 
{
    grid = +prompt("Set the number of squares per side for the nee grid (MAX: 100x100)")
    if (grid >= 0 && grid <= 100) 
    {
        squareGrid.textContent = '';
        createGrid(grid);
    }
    else if (grid > 100)
    {
        alert("Grid sizes is bigger than 100x100");
    }
    else if (grid < 0)
    {
        alert("Grid size is lower than 0x0");
    }
    else
    {
        alert("Is not a number!");
    }
})
