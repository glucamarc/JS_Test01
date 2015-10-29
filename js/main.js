//(function(){


$(document).ready(function(event) {
    $("#btTestA").on("click",function(){
       var x = testA(); 
    });

}); // Fine document



function testA() {
    console.log($("#field1").val());
    var defer = Q.defer();
    var v = $("#field1").val("bbb");
}



//})();
