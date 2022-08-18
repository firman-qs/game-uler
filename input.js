let inputDirection = { x: 0, y: 0 }
let lastInputDirection = { x: 0, y: 0 }

window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp': if (lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y: -1 }
            break
        case 'ArrowDown': if (lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y: 1 }
            break
        case 'ArrowLeft': if (lastInputDirection.x !== 0) break
            inputDirection = { x: -1, y: 0 }
            break
        case 'ArrowRight': if (lastInputDirection.x !== 0) break
            inputDirection = { x: 1, y: 0 }
            break
    }
})

window.addEventListener('click', (event) => {
    if (event.target.classList.contains('atas')) {
        if (lastInputDirection.y == 0) {
            inputDirection = { x: 0, y: -1 }
        }
    } else if (event.target.classList.contains('bawah')) {
        if (lastInputDirection.y == 0) {
            inputDirection = { x: 0, y: 1 }
        }
    } else if (event.target.classList.contains('kiri')) {
        if (lastInputDirection.x == 0) {
            inputDirection = { x: -1, y: 0 }
        }
    } else if (event.target.classList.contains('kanan')) {
        if (lastInputDirection.x == 0) {
            inputDirection = { x: 1, y: 0 }
        }
    }
})

// const btn = document.getElementsByClassName('btn')
// btn.forEach(element => {

// });


export function getInputDirection() {
    lastInputDirection = inputDirection
    return inputDirection
}