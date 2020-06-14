var input= document.querySelector('.input-section')
        var firstValue=0;
        var point =false;

        function buttonClicked(value){
            input.value+=value
        }

        function deleteButton(){
            
            for(var i =0;i< input.value.length;i++){
                
            }
        }
        function pointButton(value){
            if(point===false){
                input.value+=value
                point=true
            }
        }
        function operationButton(operator){
            firstValue= input.value +operator

            console.log(input.value + operator)
            clearButton()     
            point=false       
        }
        function equals(){
            
            input.value=eval(firstValue + input.value)
            point=false
        }

        function clearButton(){
            input.value=''
        }