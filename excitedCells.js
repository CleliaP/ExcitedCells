
function cells (array, K) {

    var previous;
    var next; 
    let arrayLength = array.length
    var tempArray = Array(arrayLength)

    if(array) {

        while( K > 0) {

            for(i= 0; i < arrayLength; i++) {
                //if my index equals the first element of my array, my previous value is the value of my last element of my array
                // Else i take the previous value of my array 
                if(i === 0) {
                    previous = array[arrayLength - 1];
                } else {
                    previous = array[i - 1]
                }

                //if my index equals the last element of my array, my next value is the value of my first element of my array
                // Else i take the newt value of my array 
                if(i === arrayLength - 1) {
                    next = array[0]
                } else {
                    next = array[i + 1]
                }

                if( previous=== 1 && next === 1  || previous=== 0 && next === 0) {
                    tempArray[i] =0
                } else if(previous === 1 && next === 0 || previous === 0 && next === 1) {
                    tempArray[i] = 1
                }
            }

            // I change my array with the value of my temporary array for the next iteration
            for(i= 0; i < arrayLength; i++) {
                array[i] = tempArray[i]
            }
            K--
            console.log("K:", K, "results:", tempArray)
        }
    }
}

function main() {
    let array = [1,0,1,1];
    let K = 2;
    cells(array, K)
}

main()
