$(document).ready(function(){
   
    
        $.ajax({
            type:"GET",
            url:"https://jsonplaceholder.typicode.com/todos",
            success:function(data){
               var output ="";
             var count=0;
               for(var i in data){
                 
                     output+=" <div class='card text-white bg-primary mb-3' style='max-width: 18rem;'> <div class='card-header'>"+data[i].id+"</div>";
                     output+="<div class='card-body'><h5 class='card-title'>"+data[i].title+"</h5>";
                     output+="<p class='card-text'><input type='checkbox' id='ck';'"+i+"/></p>";
                     
                     output+= "</div><br><br>";
              
               }
           $("#result").html(output);
             
                   $('input[type="checkbox"]').click(function(){
                      
                    if($(this).is(":checked"))
                    {
                       
                       count++;
                    }
                    else
                    {
                        count--;
                    }
                   
                       var mypromise = new Promise((resolve,reject)=>{
                    if(count>=5)
                    {
                     resolve();
                    }
                    else{
                        reject();
                    }
                       });
                    
                    
                
                mypromise.then(()=>{
                    alert("Congrats. 5 Tasks have been Successfully Completed")
                }); 
        
        
            });
                  
                }
            });
    
    
});



{/* <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
<div class="card-header">Header</div>
<div class="card-body">
  <h5 class="card-title">Primary card title</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div> */}