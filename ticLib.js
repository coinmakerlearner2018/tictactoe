
function cleanerFn(){
    return {
        elementsIdReset: (collectionOfElements) => {
            collectionOfElements.forEach( (element) => element.dataset.id = 'reset')        

        }, 
        emptyChildElements: (collectionOfElements) => {
            collectionOfElements.forEach( (element) => $(element).empty() )           
        }
            
    }

}



function elementsEventListenerHandler(){
    return{
        elementsEventListenerAdder: (collectionOfElements, fn) => {
            collectionOfElements.forEach ( 
                function(element){
                    element.addEventListener('click', fn)
                }
            )
                    
        },
        groupEventListenerRemover: (collectionOfElements, fn) => {
                    collectionOfElements.forEach ( 
                        function(element){
                            element.addEventListener('click', fn)
                        }
                    )
                }
          
            }
    }



    

function operatorFn(){
    return {
        ...elementsEventListenerHandler(),
        randomPlayerNum: () => {
            let ranNum = Math.round((Math.random() * 10) + 0.5);
            return ranNum%2
            },
        oOrXFirst: (counter) => {
            return counter === 0 ? alert('O start first') : alert('X start first')
            },
            
    //    isWinOrDraw: (player, playerCounter, wCombo, numberOfGame, boxElement, fn) => {
    //         wCombo.forEach( (setOfCombo) => {

    //             let winningCounter = 0
    //             let winningNumber = 0
    //             var win = 0
                

    //             for(let i = 0; i < playerCounter.length; i++){
    //                 winningNumber = setOfCombo.indexOf(playerCounter[i])

    //                 if(winningNumber !== -1){
    //                     winningCounter++
                        
    //                 }
                    
    //             }
                    
    //             if(winningCounter === 3 && player === 0){
    //                 alert(`O is the winner`)
    //                 win = true
    //                 //
    //                 groupEventListenerRemover(boxElement, fn)
    //             }else if (winningCounter === 3 && player === 1){
    //                 alert(`X is the winner`)
    //                 win = true
    //                 //
    //                 groupEventListenerRemover(boxElement, fn)

    //             }else if(win === 0 && numberOfGame === 8){
    //                 alert(`DRAW`)
    //                 groupEventListenerRemover(boxElement, fn)
    //                     }

    //         })


    //    }
    }
}