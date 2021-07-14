$(function(){
    $('#productPage').submit(function(){
       let name = $('#name').val();
       let price = $('#price').val();
       console.log('i am clicing');
       $('#productPage').append("Added Successfully!");
       $.post('/addToCart',{'name':name,'price':price})
       .done(function({data}){
          let response = JSON.parse(data);
          $('#number').text(Object.keys(response.value).length+" items");
       });
    });
 });