
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
                            element.removeEventListener('click', fn)
                        }
                    )
                }
          
            }
    }

    
    var ElementRemover = elementsEventListenerHandler()


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
            
       isWinOrDraw: (playerNum, playerSelectedGrids, wCombo, numberOfGame, boxElement, fn) => {

                let win = 0
                
               
            
                wCombo.forEach( (setOfCombo) => {

                    let winningCounter = 0
                    let winningNumber = 0
               
                

                for(let i = 0; i < playerSelectedGrids.length; i++){
                    winningNumber = setOfCombo.indexOf(playerSelectedGrids[i])

                    if(winningNumber !== -1){
                        winningCounter++
                        
                    }
                    
                }
                    console.log(`${win} win count`) 

                if(winningCounter === 3 && playerNum === 0){
                    alert(`O is the winner`)
                    win = true

                    //how to call function 

                    ElementRemover.groupEventListenerRemover(boxElement, fn)

                }else if (winningCounter === 3 && playerNum === 1){
                    alert(`X is the winner`)
                    win = true
                    

                    ElementRemover.groupEventListenerRemover(boxElement, fn)

                }else if(win === 0 && numberOfGame === 8){
                    
                        
                    alert(`DRAW`)
                    win = true

                    ElementRemover.groupEventListenerRemover(boxElement, fn)

                        }

            })


       }
    }
}



// winningCobo.forEach( (item) => {
//     // For winner O
//         let winningCounter = 0
//         let winningNumber = 0
//         for(let i = 0; i < counterX.length; i++){
//                 winningNumber = item.indexOf(counterX[i])
//                 if(winningNumber !== -1){
//                     winningCounter++
//                 }
//         }

//         if(winningCounter === 3){
//             alert(`X is the winner`)

//             winner = true
            
//              //Remove grid event listener
//         listofSubBoxes.forEach ( 
//             function(item){item.removeEventListener('click', ox)
       
//             })
//         }

// })


// //draw
// if(winner === 0 && gameCounter === 8){
//     alert(`DRAW`)

//         winner = true
//     //Remove grid event listener
//     listofSubBoxes.forEach ( 
//         function(item){item.removeEventListener('click', ox)
   
//         })

// }