# Brute force solution time complexity = O(k*n) space = O(k*n)

def rotate_array_from_k(arr, k):
    if k == 0:
        return arr
    else:
        return rotate_array_from_k(arr[1:] + [arr[0]], k-1)
    
print(rotate_array_from_k([1,2,3],1))


#Efficient 

def reverse(arr, start, end):
    while(start<end):
        arr[start], arr[end] = arr[end], arr[start]
        start += 1
        end -= 1
        
        
def rotate_array(arr, k):
    n = len(arr)
    k = k%n
    
    reverse(arr, 0, n - 1)
    reverse(arr, 0, k-1)
    reverse(arr, k, n-1)
    
    return arr

arr = [1,2,3,4,5]
k = 2

rotated_array = rotate_array(arr, k)
print(rotated_array)

