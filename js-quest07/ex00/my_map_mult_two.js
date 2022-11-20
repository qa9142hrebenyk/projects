function my_map_mult_two(param_1) {
    let newArr = [];
    param_1.forEach(number => {
        newArr.push(number * 2)
    })
    return newArr;
};