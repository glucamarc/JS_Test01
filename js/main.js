//(function(){


$(document).ready(function(event) {
    $("#btTest01").on("click",function(){
       var x = test01(); 
    });

    $("#btQTest").on("click",function(){
       var p = testQ(); 
    });
}); // Fine document



function test01() {
//    var arr = [10,1,20,1.2,10,100,1];
//    console.log(_.uniq(arr,true));
    
    
    var arr =[];
    var data1 = {
        nome:"a",
        eta:10
    }
    var data2 = {
        nome:"b",
        eta:20
    }
    var data3 = {
        nome:"c",
        eta:30
    }
    arr.push(data1,data2,data3);
    console.log(arr);
    
    
    var val = _.result(_.find(arr, function(chr){
        return chr.eta == 20;
    }), 'nome');
    console.log(val);
    
    
    var objVal = _.find(arr, function(items){
        return items.nome == 'b';
    });
    console.log(objVal); // Restituisce l'oggetto trovato per key
    

    console.log(_.pluck(arr,'nome')); // Restituisce i valori di nome

    
    //var indexVal = _.findIndex(arr, { nome: 'b' }); // Equivalente alla sintassi sotto
    var indexVal = _.findIndex(arr, function(chr){
        return chr.nome === 'b';
    });
    console.log(indexVal);
    
    arr.splice(indexVal,1);
    console.log(arr);

    
}


function testQ(){
    var a = 10;
    var b = 20;
    //FIXME: addWithPromise non restituisce un promise!!!
    //var promise = addWithPromise(a,b);
    var promise = Q(add(a,b));
    console.log(promise);
    promise.then(function(result){
       //assert.equal(result, a+b);          
       console.log(result + " : " + a+b);          
    });
}

function addWithPromise(a,b){
	var defer = Q.defer();
	// risolvi il promise subito in questo caso
    defer.resolve(a+b);

    return defer.promise;
}
function add(a,b){
    return a+b;
}




//})();
