/**
 * @param {Arr} Arr Array which we're going to sort 
 * @returns {Array} Sorted Array is returned
 * 
*/
function BubbleSort(Arr) {

    for (let item1 in Arr) {
        for (let item2 in Arr) {
            if (Arr[item1] < Arr[item2]) {
                let A = Arr[item1]
                Arr[item1] = Arr[item2]
                Arr[item2] = A;
                
            };
        };
    };
    return Arr

}