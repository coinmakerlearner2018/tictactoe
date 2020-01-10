
function operatorFn(){
    return {
        randomPlayer: () => {
            let ranNum = Math.round((Math.random() * 10) + 0.5);
            return ranNum%2 
            },
        OorXFirst: (counter) => {
            return counter === 0 ? alert('O start first') : alert('X start first')
            },

    }
}

var operator = operatorFn()

console.log(operator.randomPlayer)
 operator.OorXFirst(operator.randomPlayer())