const evenarr = []

function even(){
    for (let i = 1 ; i <= 50 ; i++){
        if(i%2 === 0){
            evenarr.push(i)
        }
    }
    return evenarr
}

