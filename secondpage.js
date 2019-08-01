$(document).ready(function(){
   
    
        $.ajax({
            type:"GET",
            url:"https://jsonplaceholder.typicode.com/todos",
            success:function(data){
               var output ="";
             var count=0;
               for(var i in data){
                 
                     output+="<div class='card' style='width: 18rem;padding: 35px;'><table><tr><td>"+data[i].id+"</td><td></td>";
                     output+="<td>"+data[i].title+"</td>";
                     output+="<td></td><td><input type='checkbox' id='ck';'"+i+"/></td>";
                     
                     output+= "</tr></table></div><br>";
              
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



    