/**
 * Created by asus on 2017/7/6.
 */
function reduce(arr,iteratee){
    var index = 0,
        length = arr.length,
        memo = arr[index];
    for(index +=1; index<length;index+=1){
        memo = iteratee(memo,arr[index])
    }
    return memo;
}