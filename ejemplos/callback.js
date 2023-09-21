'use sctrict';

function suma(a, b, callback){
    //hace algo que tarda mucho
    const lasuma = a + b
    callback(lasuma)
}

const result = suma(2, 3, function(result){
    console.log(result);
});
