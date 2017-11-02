
var keylist="abcdefghijklmnopqrstuvqxyz123456789@#$%^&*";
     var temp = '';
    function generatepass(plength){
        temp=''
       
        for(var i=0; i<plength; i++){
    temp+=keylist.charAt(Math.floor(Math.random()*keylist.length))
        }
        return temp;
    }
        function populateform(enterlength){
            document.passGen.output.value = generatepass(enterlength);  
            }
        function textInput(){
            if(this.form.length.value!=NaN){
    document.getElementById('genpass').innerHTML = "Plz enter the length";  
        }
            
        }
    function mOver(obj){
    obj.style.background ="black";
    obj.style.color = "maroon";
    obj.innervalue = "Click here to generate password";  
    }
        function mOut(obj){
            obj.style.color = "black";
            obj.style.background = "green";
            obj.innervalue = "Click here to generate new password";
        }

