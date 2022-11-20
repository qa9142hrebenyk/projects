function my_count_on_it(param_1) {
    let lengthArr = [];
    param_1.forEach(string =>{
        lengthArr.push(string.length);
    }); 
    return lengthArr;
};