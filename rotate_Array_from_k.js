const reverse = function(num, start, end){

    while(start<end){
        [num[start], num[end]] = [num[end], num[start]];
        start++;
        end--;
    }
}

const rotate = function(num, k){
    k = k%num.length;
    reverse(num,0, num.length-1); // full array reverse
    reverse(num, 0, k-1);// from 0 index to k-1
    reverse(num, k, num.length-1);

    return num;
}

console.log(rotate([1, 2, 3, 4, 5], 2));