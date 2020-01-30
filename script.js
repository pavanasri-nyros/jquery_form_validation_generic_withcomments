//When the document is ready then the function will be executed
$(document).ready(function(){

    //Displaying the error message for the text field
    $("input:text").focus(function(){

         //"this" will take the(input:text) 
        //here taking the value of the text field length and if the value is 0 
        if(this.value.length==0)
        {
            //first the span tag will be added as one of the sibiling to the text fields and the  content will be hidden 
            $(this).siblings("span").hide();

            //Here the content will be append to after the parent of the text field and applying css to the text in span
            $(this).parent().append("<span> This is the required field</sapn>").css({'color':'black'});

        }
    });


    //Displaying the error message for the email
    $('input[type="email"]').focus(function(){

        //Here taking length of the value of the email which is entered by the user if it equal to 0 then
        if(this.value.length == 0){

            //first the span tag will be added as one of the sibiling to the email fields and the  content will be hidden 
            $(this).siblings("span").hide();

            //Here the content will be append to after the parent of the email field and applying css to the text in span
            $(this).parent().append("<span> This is the required field</sapn>").css({'color':'black'});
         }
    });



    //Displaying the error message for the phone
    $('input[type="tel"]').focus(function(){

        //Here taking length of the value of the tel which is entered by the user if it equal to 0 then
        if(this.value.length == 0){

            //first the span tag will be added as one of the sibiling to the tel fields and the  content will be hidden 
            $(this).siblings("span").hide();

            //Here the content will be append to after the parent of the tel field and applying css to the text in span
            $(this).parent().append("<span> This is the required field</sapn>").css({'color':'black'});
         }
    });
 

    //checkbox
    $('input[type="checkbox"]').focus(function(){

        //Here taking length of the value of the checkbox which is entered by the user if it equal to 0 then
         if(this.value.length == 0){

            //hides
            $(this).siblings("span").hide();

            //adds the span tag to the parent 
            $(this).parent().append("<span> This is the required field</sapn>").css({'color':'black'});
         }
    });




    //Keyup functions when the user entered the content then the value  will be validated

    //Text field validation

    $("input:text").on('keyup',function(){

        //Taking the min length of the text field and storing in the minlength variable
        var minLength  = $("input:text").attr("min");

        //SToring the value length of the text field
        var text_length = (this).value.length;


        //Storing the value of the text field
        var text_value = (this).value;

        //Regular expression for the test field
        var text_reg = /^[A-Za-z0-9 ]{1,25}$/ ;


        //if the length of the value is 0 then
        if(text_length == 0)
        {
            //hides
            $(this).siblings("span").hide();
            //adds the span tag and adding the css to the span tag
            $(this).parent().append("<span>This is the required field</span>").css({'color':'black'});
             return false;
        }
        
        //if the text length is less than  min length then
        else if(text_length<=minLength)
        {
            ////hides
            $(this).siblings("span").hide();

            //adds the span tag and adding the css to the span tag
            $(this).parent().append("<span> Atleast more than " +minLength+ "</span>").css({'color':'black'});
            return false;
        }

        //here it will check the text value with the regular expression of the text field and minlength then
        else if(text_reg.test(text_value) == true && text_length>=minLength)
        {
            //hides
            $(this).siblings("span").hide();
            //no content will be displayed
            $(this).parent().append("<span> </span>");
            return true;
        }

    });

    //Email field validation

    $('input[type="email"]').on('keyup',function(){

        //storing the value of the length of the email
        var email_length = (this).value.length;
        

        //storing the value of the email
        var email_value = (this).value;

        //Regular expression for the email
        var email_reg = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

        //if the length of the email is 0 then
        if(email_length == 0){

            //hides
            $(this).siblings("span").hide();

            //adds the span with styles
            $(this).parent().append("<span>This is the required field</span>").css({'color':'black'});
             return false;
        }

        //if the email value is not matched with regular expression then
        else if(email_length > 0 && email_reg.test(email_value)!= true){
            //hides
            $(this).siblings("span").hide();
            //adds the span tag with styles
            $(this).parent().append("<span>Enter a valid mail</span>").css({'color':'black'});
            return false;
        }

        //if the email value is matched with regulare expression then
        else if(email_reg.test(email_value) == true)
        {  
            //hides
            $(this).siblings("span").hide();

            //no content will be displayed
            $(this).parent().append("<span> </span>");
            return true;
        }

    });



    //Phone number validation
    $('input[type="tel"]').on('keyup',function(){

        //takes the value of the number and stores in the num_length
        var num_length = (this).value.length;

        //stores the value of thes number
        var num_value = (this).value;

        //regular expression for the number
        var num_reg = /^[0-9]{1,30}$/;


        //if the length of the number is equal to 0 then
        if(num_length == 0)
        {
            //hides
            $(this).siblings("span").hide();

            //adds the span tag with styles
            $(this).parent().append("<span>This is the required field</span>").css({'color':'black'});
             return false;
        }

        //if the num value is not matched with regular expression of the number then
        else if(num_reg.test(num_value) == false)
        { 
            //hides
            $(this).siblings("span").hide();

            //adds the span with styles
            $(this).parent().append("<span>Chars not allowed</span>").css({'color':'black'});
            return false;
        }
  
        //if the number is greater than 10 or less than 9 then
        else if(num_length > 10 || num_length <= 9)
        {
            //hides
            $(this).siblings("span").hide();

            //adds the span tag and styles
            $(this).parent().append("<span> Not a valid number</span>").css({'color':'black'});
             return false;
        }

        //if the regular expression of the number is matched then
        else if(num_reg.test(num_value) == true)
        {  
            //hides
            $(this).siblings("span").hide();

            //adds the span with no content
            $(this).parent().append("<span> </span>");
            return true;
        }

    });

    //check box validation
    $('input[type="checkbox"]').keyup(function() 
    { 
        //if user checked no content will be displayed
        if ($("input[type=checkbox]").is(":checked"))
         { 

            //hides
            $(this).siblings("span").hide();
        
            //adds the span tag
            $(this).parent().append("<span> </span>");
            return true;
            
        } 
        else
         {
             //hides
            $(this).siblings("span").hide();

            //error message will be displayed
            $(this).parent().append("<span>This is the required field</span>").css({'color':'black'});
             return false;
        } 
    });





//When the user submitted the form then this function will be validated
    $("form button").on('click',function(){
        //setting the flag value to 1
        var flag =1;

        //here we are validating the each field of the input tag
        $("input").each(function(){
            //text field
            if(this.type=="text"){

                //storing the text value 
                var text_value = this.value;
                //storing the  value length of the text
                var text_length = text_value.length;

                //if the test is between 0 or less than or equal to 3 then
                if(text_length == 0 || text_length <= 3){

                    //focus the field(moves to the focus event)
                    this.focus();

                    //set to 0
                    flag = 0;
                    return false;
                }

            }


            //Email field
            else if(this.type == "email"){

                //storing the value of the email
                var email_value = this.value;

                //storing the length of the email
                var email_length = email_value.length;

                //regular expression for the email 
                var email_reg =  /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
 
                //if the email length is 0 or not matched with regular expression then
                if(email_length == 0 || email_reg.test(email_value)!=true ){
                   
                    //moves to the focus event
                    this.focus();

                    //set to 0
                    flag = 0;
                    return false;
                }

            }
            //phone field

            else if(this.type=="tel"){
                //stores the number value 
                var num_value = this.value;

                //stores the length of the number
                var num_length = num_value.length;

                //regular expression for the number
                var num_reg=  /^[0-9]{1,30}$/;

                //if the number length is equal to 0 or less then or equal to 9 then
                if(num_length == 0 || num_length <=9)
                {

                    //moves to the focus event
                    this.focus();
                    //set to 0
                    flag = 0;
                    return false;
                }

                //If the regular expression is not matched with the value then
                else if(num_reg.test(num_value)==false){

                    //moves to the focus event
                    this.focus();

                    //set to 0
                    flag = 0;
                    return false;
                }

                //if the number length is greater than 10 then
                else if(num_length >10){

                    //moves to the focus event
                    this.focus();

                    //set to 0
                    flag = 0;
                    return false;
                }

            }

           //radio button
            else if(this.type=="radio")
            {
                //if the radio button is not checked then 
                if(!$("input:radio").is(':checked'))
                {
                //moves to the focus event
                $('input:radio').focus();
                //set to 0
                flag=0;
                return false;
        }
        }

        //checkbox validation
        else if(this.type=="checkbox"){

                //if the checkbox is not checked then
                if(!$("input:checkbox").is(":checked"))
                {
                //moves to the focus event
                $('input:checkbox').focus();

                //set to 0
                flag = 0;
                return false;
               }
        }

        //Drop down validation
        else if(this.type=="select-one")
        { 
                //if option is not selected then
                if ($('select option:selected').index()==0)
                {

                //moves to the focus event
                $('select').focus();

                //set to 0
                flag=0;
                return false;
             }
        }
        });

        //if the flag set 0 then it wont submit the form

                        if(flag==0)
                        return false;

       //if the flag set to 1 then the alert message will be displayed.
                        else if(flag ==1)
                        {
                        alert("Event registeration successful");
                        return true;
                        }


    });

});