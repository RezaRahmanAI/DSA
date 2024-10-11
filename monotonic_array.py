def monotonic(array):
    first = array[0]
    last = array[-1]
    
    if(first>last):
        for i in range(len(array)-1):
            if array[i] < array[i+1] : return False
            
    elif(first == last):
        for i in range(len(array) -1):
            if array[i] != array[i+1]: return False
    else:
        for i in range(len(array)-1):
            if array[i] > array[i+1]: return False
            
    return True


print(monotonic([1, 2, 3]))  # True
print(monotonic([3, 2, 1]))  # True
print(monotonic([1, 1, 1]))  # True
print(monotonic([1, 3, 2]))  # False
