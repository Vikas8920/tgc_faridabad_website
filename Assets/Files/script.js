$(document).ready(function(){
    //Faq Accordion
    $('.faq-accordion-header').click(function(){
        $(this).next('.faq-accordion-content').slideToggle();
    })


    // Popup1
    $("#openPopup").click(function(){
        $("#overlay").fadeIn();
        $("#popupForm").fadeIn();
    });

    $(".close").click(function(){
        $("#overlay").fadeOut();
        $("#popupForm").fadeOut();
    });

    // form1
    $("#form").submit(function(e){
        e.preventDefault();
        let name = $("#name").val();
        let email = $("#email").val();
        let phone = $("#phone").val();
        $("#nameError").text("");
        $("#emailError").text("");
        $("#phoneError").text("");

        if(name.trim() === ""){
            $("#nameError").text("Name is required.");
            return;
        }

        if(email.trim() === ""){
            $("#emailError").text("Email is required.");
            return;
        }

        if(!isValidEmail(email)){
            $("#emailError").text("Invalid email address.");
            return;
        }

        if(phone.trim() === ""){
            $("#phoneError").text("Phone number is required.");
            return;
        }

        if(!isValidPhoneNumber(phone)){
            $("#phoneError").text("Invalid phone number.");
            return;
          }

        $("#form").unbind('submit').submit();
    });

    function isValidEmail(email){
        let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return emailRegex.test(email);
    }

    function isValidPhoneNumber(phone){
        let phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phone);
    }


    // popup2
    $("#openPopup2").click(function(){
        $("#overlay2").fadeIn();
        $("#popupForm2").fadeIn();
    });

    $(".close2").click(function(){
        $("#overlay2").fadeOut();
        $("#popupForm2").fadeOut();
    });

    // form2
    $("#form2").submit(function(e){
        e.preventDefault();
        let name = $("#name2").val();
        let email = $("#email2").val();
        let phone = $("#phone2").val();
        $("#nameError2").text("");
        $("#emailError2").text("");
        $("#phoneError2").text("");

        if(name.trim() === ""){
            $("#nameError2").text("Name is required.");
            return;
        }

        if(email.trim() === ""){
            $("#emailError2").text("Email is required.");
            return;
        }

        if(!isValidEmail(email)){
            $("#emailError2").text("Invalid email address.");
            return;
        }

        if(phone.trim() === ""){
            $("#phoneError2").text("Phone number is required.");
            return;
        }

        if(!isValidPhoneNumber(phone)){
            $("#phoneError2").text("Invalid phone number.");
            return;
          }

        $("#form2").unbind('submit').submit();
    });

    function isValidEmail(email){
        let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return emailRegex.test(email);
    }

    function isValidPhoneNumber(phone){
        let phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phone);
    }


    // popup3
    $("#openPopup3").click(function(){
        $("#overlay3").fadeIn();
        $("#popupForm3").fadeIn();
    });

    $(".close3").click(function(){
        $("#overlay3").fadeOut();
        $("#popupForm3").fadeOut();
    });

    // form3
    $("#form3").submit(function(e){
        e.preventDefault();
        let name = $("#name3").val();
        let email = $("#email3").val();
        let phone = $("#phone3").val();
        $("#nameError3").text("");
        $("#emailError3").text("");
        $("#phoneError3").text("");

        if(name.trim() === ""){
            $("#nameError3").text("Name is required.");
            return;
        }

        if(email.trim() === ""){
            $("#emailError3").text("Email is required.");
            return;
        }

        if(!isValidEmail(email)){
            $("#emailError3").text("Invalid email address.");
            return;
        }

        if(phone.trim() === ""){
            $("#phoneError3").text("Phone number is required.");
            return;
        }

        if(!isValidPhoneNumber(phone)){
            $("#phoneError3").text("Invalid phone number.");
            return;
          }

        $("#form3").unbind('submit').submit();
    });

    function isValidEmail(email){
        let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return emailRegex.test(email);
    }

    function isValidPhoneNumber(phone){
        let phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phone);
    }


     // popup4
     $("#openPopup4").click(function(){
        $("#overlay4").fadeIn();
        $("#popupForm4").fadeIn();
    });

    $(".close4").click(function(){
        $("#overlay4").fadeOut();
        $("#popupForm4").fadeOut();
    });

    // form4
    $("#form4").submit(function(e){
        e.preventDefault();
        let name = $("#name4").val();
        let email = $("#email4").val();
        let phone = $("#phone4").val();
        $("#nameError4").text("");
        $("#emailError4").text("");
        $("#phoneError4").text("");

        if(name.trim() === ""){
            $("#nameError4").text("Name is required.");
            return;
        }

        if(email.trim() === ""){
            $("#emailError4").text("Email is required.");
            return;
        }

        if(!isValidEmail(email)){
            $("#emailError4").text("Invalid email address.");
            return;
        }

        if(phone.trim() === ""){
            $("#phoneError4").text("Phone number is required.");
            return;
        }

        if(!isValidPhoneNumber(phone)){
            $("#phoneError4").text("Invalid phone number.");
            return;
        }

        $("#form4").unbind('submit').submit();
    });

    function isValidEmail(email){
        let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return emailRegex.test(email);
    }

    function isValidPhoneNumber(phone){
        let phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phone);
    }


    // popup5
    $("#openPopup5").click(function(){
        $("#overlay5").fadeIn();
        $("#popupForm5").fadeIn();
    });

    $(".close5").click(function(){
        $("#overlay5").fadeOut();
        $("#popupForm5").fadeOut();
    });

    // form5
    $("#form5").submit(function(e){
        e.preventDefault();
        let name = $("#name5").val();
        let email = $("#email5").val();
        let phone = $("#phone5").val();
        $("#nameError5").text("");
        $("#emailError5").text("");
        $("#phoneError5").text("");

        if(name.trim() === ""){
            $("#nameError5").text("Name is required.");
            return;
        }

        if(email.trim() === ""){
            $("#emailError5").text("Email is required.");
            return;
        }

        if(!isValidEmail(email)){
            $("#emailError5").text("Invalid email address.");
            return;
        }

        if(phone.trim() === ""){
            $("#phoneError5").text("Phone number is required.");
            return;
        }

        if(!isValidPhoneNumber(phone)){
            $("#phoneError5").text("Invalid phone number.");
            return;
          }

        $("#form5").unbind('submit').submit();
    });

    function isValidEmail(email){
        let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return emailRegex.test(email);
    }

    function isValidPhoneNumber(phone){
        let phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phone);
    }


    // popup6
    $("#openPopup6").click(function(){
        $("#overlay6").fadeIn();
        $("#popupForm6").fadeIn();
    });

    $(".close6").click(function(){
        $("#overlay6").fadeOut();
        $("#popupForm6").fadeOut();
    });

    // form6
    $("#form6").submit(function(e){
        e.preventDefault();
        let name = $("#name6").val();
        let email = $("#email6").val();
        let phone = $("#phone6").val();
        $("#nameError6").text("");
        $("#emailError6").text("");
        $("#phoneError6").text("");

        if(name.trim() === ""){
            $("#nameError6").text("Name is required.");
            return;
        }

        if(email.trim() === ""){
            $("#emailError6").text("Email is required.");
            return;
        }

        if(!isValidEmail(email)){
            $("#emailError6").text("Invalid email address.");
            return;
        }

        if(phone.trim() === ""){
            $("#phoneError6").text("Phone number is required.");
            return;
        }

        if(!isValidPhoneNumber(phone)){
            $("#phoneError6").text("Invalid phone number.");
            return;
          }

        $("#form6").unbind('submit').submit();
    });

    function isValidEmail(email){
        let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return emailRegex.test(email);
    }

    function isValidPhoneNumber(phone){
        let phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phone);
    }

    // popup7
    $("#openPopup7").click(function(){
        $("#overlay7").fadeIn();
        $("#popupForm7").fadeIn();
    });

    $(".close7").click(function(){
        $("#overlay7").fadeOut();
        $("#popupForm7").fadeOut();
    });

    // form7
    $("#form7").submit(function(e){
        e.preventDefault();
        let name = $("#name7").val();
        let email = $("#email7").val();
        let phone = $("#phone7").val();
        $("#nameError7").text("");
        $("#emailError7").text("");
        $("#phoneError7").text("");

        if(name.trim() === ""){
            $("#nameError7").text("Name is required.");
            return;
        }

        if(email.trim() === ""){
            $("#emailError7").text("Email is required.");
            return;
        }

        if(!isValidEmail(email)){
            $("#emailError7").text("Invalid email address.");
            return;
        }

        if(phone.trim() === ""){
            $("#phoneError7").text("Phone number is required.");
            return;
        }

        if(!isValidPhoneNumber(phone)){
            $("#phoneError7").text("Invalid phone number.");
            return;
          }

        $("#form7").unbind('submit').submit();
    });

    function isValidEmail(email){
        let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return emailRegex.test(email);
    }

    function isValidPhoneNumber(phone){
        let phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phone);
    }

    // popup8
    $("#openPopup8").click(function(){
        $("#overlay8").fadeIn();
        $("#popupForm8").fadeIn();
    });

    $(".close8").click(function(){
        $("#overlay8").fadeOut();
        $("#popupForm8").fadeOut();
    });

    // form8
    $("#form8").submit(function(e){
        e.preventDefault();
        let name = $("#name8").val();
        let email = $("#email8").val();
        let phone = $("#phone8").val();
        $("#nameError8").text("");
        $("#emailError8").text("");
        $("#phoneError8").text("");

        if(name.trim() === ""){
            $("#nameError8").text("Name is required.");
            return;
        }

        if(email.trim() === ""){
            $("#emailError8").text("Email is required.");
            return;
        }

        if(!isValidEmail(email)){
            $("#emailError8").text("Invalid email address.");
            return;
        }

        if(phone.trim() === ""){
            $("#phoneError8").text("Phone number is required.");
            return;
        }

        if(!isValidPhoneNumber(phone)){
            $("#phoneError8").text("Invalid phone number.");
            return;
          }

        $("#form8").unbind('submit').submit();
    });

    function isValidEmail(email){
        let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return emailRegex.test(email);
    }

    function isValidPhoneNumber(phone){
        let phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phone);
    }


     // popup9
     $("#openPopup9").click(function(){
        $("#overlay9").fadeIn();
        $("#popupForm9").fadeIn();
    });

    $(".close9").click(function(){
        $("#overlay9").fadeOut();
        $("#popupForm9").fadeOut();
    });

    // form9
    $("#form9").submit(function(e){
        e.preventDefault();
        let name = $("#name9").val();
        let email = $("#email9").val();
        let phone = $("#phone9").val();
        $("#nameError9").text("");
        $("#emailError9").text("");
        $("#phoneError9").text("");

        if(name.trim() === ""){
            $("#nameError9").text("Name is required.");
            return;
        }

        if(email.trim() === ""){
            $("#emailError9").text("Email is required.");
            return;
        }

        if(!isValidEmail(email)){
            $("#emailError9").text("Invalid email address.");
            return;
        }

        if(phone.trim() === ""){
            $("#phoneError9").text("Phone number is required.");
            return;
        }

        if(!isValidPhoneNumber(phone)){
            $("#phoneError9").text("Invalid phone number.");
            return;
          }

        $("#form9").unbind('submit').submit();
    });

    function isValidEmail(email){
        let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return emailRegex.test(email);
    }

    function isValidPhoneNumber(phone){
        let phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phone);
    }


     // popup10
     $("#openPopup10").click(function(){
        $("#overlay10").fadeIn();
        $("#popupForm10").fadeIn();
    });

    $(".close10").click(function(){
        $("#overlay10").fadeOut();
        $("#popupForm10").fadeOut();
    });


    // form10
    $("#form10").submit(function(e){
        e.preventDefault();
        let name = $("#name10").val();
        let email = $("#email10").val();
        let phone = $("#phone10").val();
        $("#nameError10").text("");
        $("#emailError10").text("");
        $("#phoneError10").text("");

        if(name.trim() === ""){
            $("#nameError10").text("Name is required.");
            return;
        }

        if(email.trim() === ""){
            $("#emailError10").text("Email is required.");
            return;
        }

        if(!isValidEmail(email)){
            $("#emailError10").text("Invalid email address.");
            return;
        }

        if(phone.trim() === ""){
            $("#phoneError10").text("Phone number is required.");
            return;
        }

        if(!isValidPhoneNumber(phone)){
            $("#phoneError10").text("Invalid phone number.");
            return;
          }

        $("#form10").unbind('submit').submit();
    });

    function isValidEmail(email){
        let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return emailRegex.test(email);
    }

    function isValidPhoneNumber(phone){
        let phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phone);
    }
     
     // Modules download Brochure Forms and Popups
     //Popup 11
     $("#openPopup11").click(function(){
        $("#overlay11").fadeIn();
        $("#popupForm11").fadeIn();
    });

    $(".close11").click(function(){
        $("#overlay11").fadeOut();
        $("#popupForm11").fadeOut();
    });


    // form11
    $("#form11").submit(function(e){
        e.preventDefault();
        let name = $("#name11").val();
        let email = $("#email11").val();
        let phone = $("#phone11").val();
        $("#nameError11").text("");
        $("#emailError11").text("");
        $("#phoneError11").text("");

        if(name.trim() === ""){
            $("#nameError11").text("Name is required.");
            return;
        }

        if(email.trim() === ""){
            $("#emailError11").text("Email is required.");
            return;
        }

        if(!isValidEmail(email)){
            $("#emailError11").text("Invalid email address.");
            return;
        }

        if(phone.trim() === ""){
            $("#phoneError11").text("Phone number is required.");
            return;
        }

        if(!isValidPhoneNumber(phone)){
            $("#phoneError11").text("Invalid phone number.");
            return;
          }

        $("#form11").unbind('submit').submit();
    });

    function isValidEmail(email){
        let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return emailRegex.test(email);
    }

    function isValidPhoneNumber(phone){
        let phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phone);
    }


    //Popup 12
    $("#openPopup12").click(function(){
    $("#overlay12").fadeIn();
    $("#popupForm12").fadeIn();
});

$(".close12").click(function(){
    $("#overlay12").fadeOut();
    $("#popupForm12").fadeOut();
});


// form12
$("#form12").submit(function(e){
    e.preventDefault();
    let name = $("#name12").val();
    let email = $("#email12").val();
    let phone = $("#phone12").val();
    $("#nameError12").text("");
    $("#emailError12").text("");
    $("#phoneError12").text("");

    if(name.trim() === ""){
        $("#nameError12").text("Name is required.");
        return;
    }

    if(email.trim() === ""){
        $("#emailError12").text("Email is required.");
        return;
    }

    if(!isValidEmail(email)){
        $("#emailError12").text("Invalid email address.");
        return;
    }

    if(phone.trim() === ""){
        $("#phoneError12").text("Phone number is required.");
        return;
    }

    if(!isValidPhoneNumber(phone)){
        $("#phoneError12").text("Invalid phone number.");
        return;
        }

    $("#form12").unbind('submit').submit();
});

function isValidEmail(email){
    let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
}

function isValidPhoneNumber(phone){
    let phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
}


    //Popup 13
    $("#openPopup13").click(function(){
        $("#overlay13").fadeIn();
        $("#popupForm13").fadeIn();
    });
    
    $(".close13").click(function(){
        $("#overlay13").fadeOut();
        $("#popupForm13").fadeOut();
    });
    
    
    // form13
    $("#form13").submit(function(e){
        e.preventDefault();
        let name = $("#name13").val();
        let email = $("#email13").val();
        let phone = $("#phone13").val();
        $("#nameError13").text("");
        $("#emailError13").text("");
        $("#phoneError13").text("");
    
        if(name.trim() === ""){
            $("#nameError13").text("Name is required.");
            return;
        }
    
        if(email.trim() === ""){
            $("#emailError13").text("Email is required.");
            return;
        }
    
        if(!isValidEmail(email)){
            $("#emailError13").text("Invalid email address.");
            return;
        }
    
        if(phone.trim() === ""){
            $("#phoneError13").text("Phone number is required.");
            return;
        }
    
        if(!isValidPhoneNumber(phone)){
            $("#phoneError13").text("Invalid phone number.");
            return;
            }
    
        $("#form13").unbind('submit').submit();
    });
    
    function isValidEmail(email){
        let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return emailRegex.test(email);
    }
    
    function isValidPhoneNumber(phone){
        let phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phone);
    }


     //Popup 14
     $("#openPopup14").click(function(){
        $("#overlay14").fadeIn();
        $("#popupForm14").fadeIn();
    });
    
    $(".close14").click(function(){
        $("#overlay14").fadeOut();
        $("#popupForm14").fadeOut();
    });
    
    
    // form14
    $("#form14").submit(function(e){
        e.preventDefault();
        let name = $("#name14").val();
        let email = $("#email14").val();
        let phone = $("#phone14").val();
        $("#nameError14").text("");
        $("#emailError14").text("");
        $("#phoneError14").text("");
    
        if(name.trim() === ""){
            $("#nameError14").text("Name is required.");
            return;
        }
    
        if(email.trim() === ""){
            $("#emailError14").text("Email is required.");
            return;
        }
    
        if(!isValidEmail(email)){
            $("#emailError14").text("Invalid email address.");
            return;
        }
    
        if(phone.trim() === ""){
            $("#phoneError14").text("Phone number is required.");
            return;
        }
    
        if(!isValidPhoneNumber(phone)){
            $("#phoneError14").text("Invalid phone number.");
            return;
            }
    
        $("#form14").unbind('submit').submit();
    });
    
    function isValidEmail(email){
        let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return emailRegex.test(email);
    }
    
    function isValidPhoneNumber(phone){
        let phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phone);
    }



    //Popup 15
    $("#openPopup15").click(function(){
        $("#overlay15").fadeIn();
        $("#popupForm15").fadeIn();
    });
    
    $(".close15").click(function(){
        $("#overlay15").fadeOut();
        $("#popupForm15").fadeOut();
    });
    
    
    // form15
    $("#form15").submit(function(e){
        e.preventDefault();
        let name = $("#name15").val();
        let email = $("#email15").val();
        let phone = $("#phone15").val();
        $("#nameError15").text("");
        $("#emailError15").text("");
        $("#phoneError15").text("");
    
        if(name.trim() === ""){
            $("#nameError15").text("Name is required.");
            return;
        }
    
        if(email.trim() === ""){
            $("#emailError15").text("Email is required.");
            return;
        }
    
        if(!isValidEmail(email)){
            $("#emailError15").text("Invalid email address.");
            return;
        }
    
        if(phone.trim() === ""){
            $("#phoneError15").text("Phone number is required.");
            return;
        }
    
        if(!isValidPhoneNumber(phone)){
            $("#phoneError15").text("Invalid phone number.");
            return;
            }
    
        $("#form15").unbind('submit').submit();
    });
    
    function isValidEmail(email){
        let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return emailRegex.test(email);
    }
    
    function isValidPhoneNumber(phone){
        let phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phone);
    }


     //Popup 16
     $("#openPopup16").click(function(){
        $("#overlay16").fadeIn();
        $("#popupForm16").fadeIn();
    });
    
    $(".close16").click(function(){
        $("#overlay16").fadeOut();
        $("#popupForm16").fadeOut();
    });
    
    
    // form16
    $("#form16").submit(function(e){
        e.preventDefault();
        let name = $("#name16").val();
        let email = $("#email16").val();
        let phone = $("#phone16").val();
        $("#nameError16").text("");
        $("#emailError16").text("");
        $("#phoneError16").text("");
    
        if(name.trim() === ""){
            $("#nameError16").text("Name is required.");
            return;
        }
    
        if(email.trim() === ""){
            $("#emailError16").text("Email is required.");
            return;
        }
    
        if(!isValidEmail(email)){
            $("#emailError16").text("Invalid email address.");
            return;
        }
    
        if(phone.trim() === ""){
            $("#phoneError16").text("Phone number is required.");
            return;
        }
    
        if(!isValidPhoneNumber(phone)){
            $("#phoneError16").text("Invalid phone number.");
            return;
            }
    
        $("#form16").unbind('submit').submit();
    });
    
    function isValidEmail(email){
        let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return emailRegex.test(email);
    }
    
    function isValidPhoneNumber(phone){
        let phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phone);
    }



    //Popup 17
    $("#openPopup17").click(function(){
        $("#overlay17").fadeIn();
        $("#popupForm17").fadeIn();
    });
    
    $(".close17").click(function(){
        $("#overlay17").fadeOut();
        $("#popupForm17").fadeOut();
    });
    
    
    // form17
    $("#form17").submit(function(e){
        e.preventDefault();
        let name = $("#name17").val();
        let email = $("#email17").val();
        let phone = $("#phone17").val();
        $("#nameError17").text("");
        $("#emailError17").text("");
        $("#phoneError17").text("");
    
        if(name.trim() === ""){
            $("#nameError17").text("Name is required.");
            return;
        }
    
        if(email.trim() === ""){
            $("#emailError17").text("Email is required.");
            return;
        }
    
        if(!isValidEmail(email)){
            $("#emailError17").text("Invalid email address.");
            return;
        }
    
        if(phone.trim() === ""){
            $("#phoneError17").text("Phone number is required.");
            return;
        }
    
        if(!isValidPhoneNumber(phone)){
            $("#phoneError17").text("Invalid phone number.");
            return;
            }
    
        $("#form17").unbind('submit').submit();
    });
    
    function isValidEmail(email){
        let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return emailRegex.test(email);
    }
    
    function isValidPhoneNumber(phone){
        let phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phone);
    }



        //Popup 18
        $("#openPopup18").click(function(){
            $("#overlay18").fadeIn();
            $("#popupForm18").fadeIn();
        });
        
        $(".close18").click(function(){
            $("#overlay18").fadeOut();
            $("#popupForm18").fadeOut();
        });
        
        
        // form18
        $("#form18").submit(function(e){
            e.preventDefault();
            let name = $("#name18").val();
            let email = $("#email18").val();
            let phone = $("#phone18").val();
            $("#nameError18").text("");
            $("#emailError18").text("");
            $("#phoneError18").text("");
        
            if(name.trim() === ""){
                $("#nameError18").text("Name is required.");
                return;
            }
        
            if(email.trim() === ""){
                $("#emailError18").text("Email is required.");
                return;
            }
        
            if(!isValidEmail(email)){
                $("#emailError18").text("Invalid email address.");
                return;
            }
        
            if(phone.trim() === ""){
                $("#phoneError18").text("Phone number is required.");
                return;
            }
        
            if(!isValidPhoneNumber(phone)){
                $("#phoneError18").text("Invalid phone number.");
                return;
                }
        
            $("#form18").unbind('submit').submit();
        });
        
        function isValidEmail(email){
            let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
            return emailRegex.test(email);
        }
        
        function isValidPhoneNumber(phone){
            let phoneRegex = /^\d{10}$/;
            return phoneRegex.test(phone);
        }



        //Popup 19
        $("#openPopup19").click(function(){
            $("#overlay19").fadeIn();
            $("#popupForm19").fadeIn();
        });
        
        $(".close19").click(function(){
            $("#overlay19").fadeOut();
            $("#popupForm19").fadeOut();
        });
        
        
        // form19
        $("#form19").submit(function(e){
            e.preventDefault();
            let name = $("#name19").val();
            let email = $("#email19").val();
            let phone = $("#phone19").val();
            $("#nameError19").text("");
            $("#emailError19").text("");
            $("#phoneError19").text("");
        
            if(name.trim() === ""){
                $("#nameError19").text("Name is required.");
                return;
            }
        
            if(email.trim() === ""){
                $("#emailError19").text("Email is required.");
                return;
            }
        
            if(!isValidEmail(email)){
                $("#emailError19").text("Invalid email address.");
                return;
            }
        
            if(phone.trim() === ""){
                $("#phoneError19").text("Phone number is required.");
                return;
            }
        
            if(!isValidPhoneNumber(phone)){
                $("#phoneError19").text("Invalid phone number.");
                return;
                }
        
            $("#form19").unbind('submit').submit();
        });
        
        function isValidEmail(email){
            let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
            return emailRegex.test(email);
        }
        
        function isValidPhoneNumber(phone){
            let phoneRegex = /^\d{10}$/;
            return phoneRegex.test(phone);
        }



    
     //Popup 20
     $("#openPopup20").click(function(){
        $("#overlay20").fadeIn();
        $("#popupForm20").fadeIn();
    });
    
    $(".close20").click(function(){
        $("#overlay20").fadeOut();
        $("#popupForm20").fadeOut();
    });
    
    
    // form20
    $("#form20").submit(function(e){
        e.preventDefault();
        let name = $("#name20").val();
        let email = $("#email20").val();
        let phone = $("#phone20").val();
        $("#nameError20").text("");
        $("#emailError20").text("");
        $("#phoneError20").text("");
    
        if(name.trim() === ""){
            $("#nameError20").text("Name is required.");
            return;
        }
    
        if(email.trim() === ""){
            $("#emailError20").text("Email is required.");
            return;
        }
    
        if(!isValidEmail(email)){
            $("#emailError20").text("Invalid email address.");
            return;
        }
    
        if(phone.trim() === ""){
            $("#phoneError20").text("Phone number is required.");
            return;
        }
    
        if(!isValidPhoneNumber(phone)){
            $("#phoneError20").text("Invalid phone number.");
            return;
            }
    
        $("#form20").unbind('submit').submit();
    });
    
    function isValidEmail(email){
        let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return emailRegex.test(email);
    }
    
    function isValidPhoneNumber(phone){
        let phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phone);
    }



     //Popup 21
     $("#openPopup21").click(function(){
        $("#overlay21").fadeIn();
        $("#popupForm21").fadeIn();
    });
    
    $(".close21").click(function(){
        $("#overlay21").fadeOut();
        $("#popupForm21").fadeOut();
    });
    
    
    // form21
    $("#form21").submit(function(e){
        e.preventDefault();
        let name = $("#name21").val();
        let email = $("#email21").val();
        let phone = $("#phone21").val();
        $("#nameError21").text("");
        $("#emailError21").text("");
        $("#phoneError21").text("");
    
        if(name.trim() === ""){
            $("#nameError21").text("Name is required.");
            return;
        }
    
        if(email.trim() === ""){
            $("#emailError21").text("Email is required.");
            return;
        }
    
        if(!isValidEmail(email)){
            $("#emailError21").text("Invalid email address.");
            return;
        }
    
        if(phone.trim() === ""){
            $("#phoneError21").text("Phone number is required.");
            return;
        }
    
        if(!isValidPhoneNumber(phone)){
            $("#phoneError21").text("Invalid phone number.");
            return;
            }
    
        $("#form21").unbind('submit').submit();
    });
    
    function isValidEmail(email){
        let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return emailRegex.test(email);
    }
    
    function isValidPhoneNumber(phone){
        let phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phone);
    }


     //Popup 22
     $("#openPopup22").click(function(){
        $("#overlay22").fadeIn();
        $("#popupForm22").fadeIn();
    });
    
    $(".close22").click(function(){
        $("#overlay22").fadeOut();
        $("#popupForm22").fadeOut();
    });
    
    
    // form22
    $("#form22").submit(function(e){
        e.preventDefault();
        let name = $("#name22").val();
        let email = $("#email22").val();
        let phone = $("#phone22").val();
        $("#nameError22").text("");
        $("#emailError22").text("");
        $("#phoneError22").text("");
    
        if(name.trim() === ""){
            $("#nameError22").text("Name is required.");
            return;
        }
    
        if(email.trim() === ""){
            $("#emailError22").text("Email is required.");
            return;
        }
    
        if(!isValidEmail(email)){
            $("#emailError22").text("Invalid email address.");
            return;
        }
    
        if(phone.trim() === ""){
            $("#phoneError22").text("Phone number is required.");
            return;
        }
    
        if(!isValidPhoneNumber(phone)){
            $("#phoneError22").text("Invalid phone number.");
            return;
            }
    
        $("#form22").unbind('submit').submit();
    });
    
    function isValidEmail(email){
        let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return emailRegex.test(email);
    }
    
    function isValidPhoneNumber(phone){
        let phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phone);
    }

     //Popup 23
     $("#openPopup23").click(function(){
        $("#overlay23").fadeIn();
        $("#popupForm23").fadeIn();
    });
    
    $(".close23").click(function(){
        $("#overlay23").fadeOut();
        $("#popupForm23").fadeOut();
    });
    
    
    // form23
    $("#form23").submit(function(e){
        e.preventDefault();
        let name = $("#name23").val();
        let email = $("#email23").val();
        let phone = $("#phone23").val();
        $("#nameError23").text("");
        $("#emailError23").text("");
        $("#phoneError23").text("");
    
        if(name.trim() === ""){
            $("#nameError23").text("Name is required.");
            return;
        }
    
        if(email.trim() === ""){
            $("#emailError23").text("Email is required.");
            return;
        }
    
        if(!isValidEmail(email)){
            $("#emailError23").text("Invalid email address.");
            return;
        }
    
        if(phone.trim() === ""){
            $("#phoneError23").text("Phone number is required.");
            return;
        }
    
        if(!isValidPhoneNumber(phone)){
            $("#phoneError23").text("Invalid phone number.");
            return;
            }
    
        $("#form23").unbind('submit').submit();
    });
    
    function isValidEmail(email){
        let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return emailRegex.test(email);
    }
    
    function isValidPhoneNumber(phone){
        let phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phone);
    }


     //Popup 24
     $("#openPopup24").click(function(){
        $("#overlay24").fadeIn();
        $("#popupForm24").fadeIn();
    });
    
    $(".close24").click(function(){
        $("#overlay24").fadeOut();
        $("#popupForm24").fadeOut();
    });
    
    
    // form24
    $("#form24").submit(function(e){
        e.preventDefault();
        let name = $("#name24").val();
        let email = $("#email24").val();
        let phone = $("#phone24").val();
        $("#nameError24").text("");
        $("#emailError24").text("");
        $("#phoneError24").text("");
    
        if(name.trim() === ""){
            $("#nameError24").text("Name is required.");
            return;
        }
    
        if(email.trim() === ""){
            $("#emailError24").text("Email is required.");
            return;
        }
    
        if(!isValidEmail(email)){
            $("#emailError24").text("Invalid email address.");
            return;
        }
    
        if(phone.trim() === ""){
            $("#phoneError24").text("Phone number is required.");
            return;
        }
    
        if(!isValidPhoneNumber(phone)){
            $("#phoneError24").text("Invalid phone number.");
            return;
            }
    
        $("#form24").unbind('submit').submit();
    });
    
    function isValidEmail(email){
        let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return emailRegex.test(email);
    }
    
    function isValidPhoneNumber(phone){
        let phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phone);
    }


     //Popup 25
     $("#openPopup25").click(function(){
        $("#overlay25").fadeIn();
        $("#popupForm25").fadeIn();
    });
    
    $(".close25").click(function(){
        $("#overlay25").fadeOut();
        $("#popupForm25").fadeOut();
    });
    
    
    // form25
    $("#form25").submit(function(e){
        e.preventDefault();
        let name = $("#name25").val();
        let email = $("#email25").val();
        let phone = $("#phone25").val();
        $("#nameError25").text("");
        $("#emailError25").text("");
        $("#phoneError25").text("");
    
        if(name.trim() === ""){
            $("#nameError25").text("Name is required.");
            return;
        }
    
        if(email.trim() === ""){
            $("#emailError25").text("Email is required.");
            return;
        }
    
        if(!isValidEmail(email)){
            $("#emailError25").text("Invalid email address.");
            return;
        }
    
        if(phone.trim() === ""){
            $("#phoneError25").text("Phone number is required.");
            return;
        }
    
        if(!isValidPhoneNumber(phone)){
            $("#phoneError25").text("Invalid phone number.");
            return;
            }
    
        $("#form25").unbind('submit').submit();
    });
    
    function isValidEmail(email){
        let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return emailRegex.test(email);
    }
    
    function isValidPhoneNumber(phone){
        let phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phone);
    }


     //Popup 26
     $("#openPopup26").click(function(){
        $("#overlay26").fadeIn();
        $("#popupForm26").fadeIn();
    });
    
    $(".close26").click(function(){
        $("#overlay26").fadeOut();
        $("#popupForm26").fadeOut();
    });
    
    
    // form26
    $("#form26").submit(function(e){
        e.preventDefault();
        let name = $("#name26").val();
        let email = $("#email26").val();
        let phone = $("#phone26").val();
        $("#nameError26").text("");
        $("#emailError26").text("");
        $("#phoneError26").text("");
    
        if(name.trim() === ""){
            $("#nameError26").text("Name is required.");
            return;
        }
    
        if(email.trim() === ""){
            $("#emailError26").text("Email is required.");
            return;
        }
    
        if(!isValidEmail(email)){
            $("#emailError26").text("Invalid email address.");
            return;
        }
    
        if(phone.trim() === ""){
            $("#phoneError26").text("Phone number is required.");
            return;
        }
    
        if(!isValidPhoneNumber(phone)){
            $("#phoneError26").text("Invalid phone number.");
            return;
            }
    
        $("#form26").unbind('submit').submit();
    });
    
    function isValidEmail(email){
        let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return emailRegex.test(email);
    }
    
    function isValidPhoneNumber(phone){
        let phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phone);
    }


     //Popup 27
     $("#openPopup27").click(function(){
        $("#overlay27").fadeIn();
        $("#popupForm27").fadeIn();
    });
    
    $(".close27").click(function(){
        $("#overlay27").fadeOut();
        $("#popupForm27").fadeOut();
    });
    
    
    // form27
    $("#form27").submit(function(e){
        e.preventDefault();
        let name = $("#name27").val();
        let email = $("#email27").val();
        let phone = $("#phone27").val();
        $("#nameError27").text("");
        $("#emailError27").text("");
        $("#phoneError27").text("");
    
        if(name.trim() === ""){
            $("#nameError27").text("Name is required.");
            return;
        }
    
        if(email.trim() === ""){
            $("#emailError27").text("Email is required.");
            return;
        }
    
        if(!isValidEmail(email)){
            $("#emailError27").text("Invalid email address.");
            return;
        }
    
        if(phone.trim() === ""){
            $("#phoneError27").text("Phone number is required.");
            return;
        }
    
        if(!isValidPhoneNumber(phone)){
            $("#phoneError27").text("Invalid phone number.");
            return;
            }
    
        $("#form27").unbind('submit').submit();
    });
    
    function isValidEmail(email){
        let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return emailRegex.test(email);
    }
    
    function isValidPhoneNumber(phone){
        let phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phone);
    }



     //Popup 28
     $("#openPopup28").click(function(){
        $("#overlay28").fadeIn();
        $("#popupForm28").fadeIn();
    });
    
    $(".close28").click(function(){
        $("#overlay28").fadeOut();
        $("#popupForm28").fadeOut();
    });
    
    
    // form28
    $("#form28").submit(function(e){
        e.preventDefault();
        let name = $("#name28").val();
        let email = $("#email28").val();
        let phone = $("#phone28").val();
        $("#nameError28").text("");
        $("#emailError28").text("");
        $("#phoneError28").text("");
    
        if(name.trim() === ""){
            $("#nameError28").text("Name is required.");
            return;
        }
    
        if(email.trim() === ""){
            $("#emailError28").text("Email is required.");
            return;
        }
    
        if(!isValidEmail(email)){
            $("#emailError28").text("Invalid email address.");
            return;
        }
    
        if(phone.trim() === ""){
            $("#phoneError28").text("Phone number is required.");
            return;
        }
    
        if(!isValidPhoneNumber(phone)){
            $("#phoneError28").text("Invalid phone number.");
            return;
            }
    
        $("#form28").unbind('submit').submit();
    });
    
    function isValidEmail(email){
        let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return emailRegex.test(email);
    }
    
    function isValidPhoneNumber(phone){
        let phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phone);
    }


     //Popup 29
     $("#openPopup29").click(function(){
        $("#overlay29").fadeIn();
        $("#popupForm29").fadeIn();
    });
    
    $(".close29").click(function(){
        $("#overlay29").fadeOut();
        $("#popupForm29").fadeOut();
    });
    
    
    // form29
    $("#form29").submit(function(e){
        e.preventDefault();
        let name = $("#name29").val();
        let email = $("#email29").val();
        let phone = $("#phone29").val();
        $("#nameError29").text("");
        $("#emailError29").text("");
        $("#phoneError29").text("");
    
        if(name.trim() === ""){
            $("#nameError29").text("Name is required.");
            return;
        }
    
        if(email.trim() === ""){
            $("#emailError29").text("Email is required.");
            return;
        }
    
        if(!isValidEmail(email)){
            $("#emailError29").text("Invalid email address.");
            return;
        }
    
        if(phone.trim() === ""){
            $("#phoneError29").text("Phone number is required.");
            return;
        }
    
        if(!isValidPhoneNumber(phone)){
            $("#phoneError29").text("Invalid phone number.");
            return;
            }
    
        $("#form29").unbind('submit').submit();
    });
    
    function isValidEmail(email){
        let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return emailRegex.test(email);
    }
    
    function isValidPhoneNumber(phone){
        let phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phone);
    }


     //Popup 30
     $("#openPopup30").click(function(){
        $("#overlay30").fadeIn();
        $("#popupForm30").fadeIn();
    });
    
    $(".close30").click(function(){
        $("#overlay30").fadeOut();
        $("#popupForm30").fadeOut();
    });
    
    
    // form30
    $("#form30").submit(function(e){
        e.preventDefault();
        let name = $("#name30").val();
        let email = $("#email30").val();
        let phone = $("#phone30").val();
        $("#nameError30").text("");
        $("#emailError30").text("");
        $("#phoneError30").text("");
    
        if(name.trim() === ""){
            $("#nameError30").text("Name is required.");
            return;
        }
    
        if(email.trim() === ""){
            $("#emailError30").text("Email is required.");
            return;
        }
    
        if(!isValidEmail(email)){
            $("#emailError30").text("Invalid email address.");
            return;
        }
    
        if(phone.trim() === ""){
            $("#phoneError30").text("Phone number is required.");
            return;
        }
    
        if(!isValidPhoneNumber(phone)){
            $("#phoneError30").text("Invalid phone number.");
            return;
            }
    
        $("#form30").unbind('submit').submit();
    });
    
    function isValidEmail(email){
        let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return emailRegex.test(email);
    }
    
    function isValidPhoneNumber(phone){
        let phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phone);
    }


    //Popup 31
    $("#openPopup31").click(function(){
        $("#overlay31").fadeIn();
        $("#popupForm31").fadeIn();
    });
    
    $(".close31").click(function(){
        $("#overlay31").fadeOut();
        $("#popupForm31").fadeOut();
    });
    
    
    // form31
    $("#form31").submit(function(e){
        e.preventDefault();
        let name = $("#name31").val();
        let email = $("#email31").val();
        let phone = $("#phone31").val();
        $("#nameError31").text("");
        $("#emailError31").text("");
        $("#phoneError31").text("");
    
        if(name.trim() === ""){
            $("#nameError31").text("Name is required.");
            return;
        }
    
        if(email.trim() === ""){
            $("#emailError31").text("Email is required.");
            return;
        }
    
        if(!isValidEmail(email)){
            $("#emailError31").text("Invalid email address.");
            return;
        }
    
        if(phone.trim() === ""){
            $("#phoneError31").text("Phone number is required.");
            return;
        }
    
        if(!isValidPhoneNumber(phone)){
            $("#phoneError31").text("Invalid phone number.");
            return;
            }
    
        $("#form31").unbind('submit').submit();
    });
    
    function isValidEmail(email){
        let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return emailRegex.test(email);
    }
    
    function isValidPhoneNumber(phone){
        let phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phone);
    }


    //Popup 32
    $("#openPopup32").click(function(){
        $("#overlay32").fadeIn();
        $("#popupForm32").fadeIn();
    });
    
    $(".close32").click(function(){
        $("#overlay32").fadeOut();
        $("#popupForm32").fadeOut();
    });
    
    
    // form32
    $("#form32").submit(function(e){
        e.preventDefault();
        let name = $("#name32").val();
        let email = $("#email32").val();
        let phone = $("#phone32").val();
        $("#nameError32").text("");
        $("#emailError32").text("");
        $("#phoneError32").text("");
    
        if(name.trim() === ""){
            $("#nameError32").text("Name is required.");
            return;
        }
    
        if(email.trim() === ""){
            $("#emailError32").text("Email is required.");
            return;
        }
    
        if(!isValidEmail(email)){
            $("#emailError32").text("Invalid email address.");
            return;
        }
    
        if(phone.trim() === ""){
            $("#phoneError32").text("Phone number is required.");
            return;
        }
    
        if(!isValidPhoneNumber(phone)){
            $("#phoneError32").text("Invalid phone number.");
            return;
            }
    
        $("#form32").unbind('submit').submit();
    });
    
    function isValidEmail(email){
        let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return emailRegex.test(email);
    }
    
    function isValidPhoneNumber(phone){
        let phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phone);
    }


    //Popup 33
    $("#openPopup33").click(function(){
        $("#overlay33").fadeIn();
        $("#popupForm33").fadeIn();
    });
    
    $(".close33").click(function(){
        $("#overlay33").fadeOut();
        $("#popupForm33").fadeOut();
    });
    
    
    // form33
    $("#form33").submit(function(e){
        e.preventDefault();
        let name = $("#name33").val();
        let email = $("#email33").val();
        let phone = $("#phone33").val();
        $("#nameError33").text("");
        $("#emailError33").text("");
        $("#phoneError33").text("");
    
        if(name.trim() === ""){
            $("#nameError33").text("Name is required.");
            return;
        }
    
        if(email.trim() === ""){
            $("#emailError33").text("Email is required.");
            return;
        }
    
        if(!isValidEmail(email)){
            $("#emailError33").text("Invalid email address.");
            return;
        }
    
        if(phone.trim() === ""){
            $("#phoneError33").text("Phone number is required.");
            return;
        }
    
        if(!isValidPhoneNumber(phone)){
            $("#phoneError33").text("Invalid phone number.");
            return;
            }
    
        $("#form33").unbind('submit').submit();
    });
    
    function isValidEmail(email){
        let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return emailRegex.test(email);
    }
    
    function isValidPhoneNumber(phone){
        let phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phone);
    }


    //Popup 34
    $("#openPopup34").click(function(){
        $("#overlay34").fadeIn();
        $("#popupForm34").fadeIn();
    });
    
    $(".close34").click(function(){
        $("#overlay34").fadeOut();
        $("#popupForm34").fadeOut();
    });
    
    
    // form34
    $("#form34").submit(function(e){
        e.preventDefault();
        let name = $("#name34").val();
        let email = $("#email34").val();
        let phone = $("#phone34").val();
        $("#nameError34").text("");
        $("#emailError34").text("");
        $("#phoneError34").text("");
    
        if(name.trim() === ""){
            $("#nameError34").text("Name is required.");
            return;
        }
    
        if(email.trim() === ""){
            $("#emailError34").text("Email is required.");
            return;
        }
    
        if(!isValidEmail(email)){
            $("#emailError34").text("Invalid email address.");
            return;
        }
    
        if(phone.trim() === ""){
            $("#phoneError34").text("Phone number is required.");
            return;
        }
    
        if(!isValidPhoneNumber(phone)){
            $("#phoneError34").text("Invalid phone number.");
            return;
            }
    
        $("#form34").unbind('submit').submit();
    });
    
    function isValidEmail(email){
        let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return emailRegex.test(email);
    }
    
    function isValidPhoneNumber(phone){
        let phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phone);
    }



    //Popup 35
    $("#openPopup35").click(function(){
        $("#overlay35").fadeIn();
        $("#popupForm35").fadeIn();
    });
    
    $(".close35").click(function(){
        $("#overlay35").fadeOut();
        $("#popupForm35").fadeOut();
    });
    
    
    // form35
    $("#form35").submit(function(e){
        e.preventDefault();
        let name = $("#name35").val();
        let email = $("#email35").val();
        let phone = $("#phone35").val();
        $("#nameError35").text("");
        $("#emailError35").text("");
        $("#phoneError35").text("");
    
        if(name.trim() === ""){
            $("#nameError35").text("Name is required.");
            return;
        }
    
        if(email.trim() === ""){
            $("#emailError35").text("Email is required.");
            return;
        }
    
        if(!isValidEmail(email)){
            $("#emailError35").text("Invalid email address.");
            return;
        }
    
        if(phone.trim() === ""){
            $("#phoneError35").text("Phone number is required.");
            return;
        }
    
        if(!isValidPhoneNumber(phone)){
            $("#phoneError35").text("Invalid phone number.");
            return;
            }
    
        $("#form35").unbind('submit').submit();
    });
    
    function isValidEmail(email){
        let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return emailRegex.test(email);
    }
    
    function isValidPhoneNumber(phone){
        let phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phone);
    }


     //Popup 36
     $("#openPopup36").click(function(){
        $("#overlay36").fadeIn();
        $("#popupForm36").fadeIn();
    });
    
    $(".close36").click(function(){
        $("#overlay36").fadeOut();
        $("#popupForm36").fadeOut();
    });
    
    
    // form36
    $("#form36").submit(function(e){
        e.preventDefault();
        let name = $("#name36").val();
        let email = $("#email36").val();
        let phone = $("#phone36").val();
        $("#nameError36").text("");
        $("#emailError36").text("");
        $("#phoneError36").text("");
    
        if(name.trim() === ""){
            $("#nameError36").text("Name is required.");
            return;
        }
    
        if(email.trim() === ""){
            $("#emailError36").text("Email is required.");
            return;
        }
    
        if(!isValidEmail(email)){
            $("#emailError36").text("Invalid email address.");
            return;
        }
    
        if(phone.trim() === ""){
            $("#phoneError36").text("Phone number is required.");
            return;
        }
    
        if(!isValidPhoneNumber(phone)){
            $("#phoneError36").text("Invalid phone number.");
            return;
            }
    
        $("#form36").unbind('submit').submit();
    });
    
    function isValidEmail(email){
        let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return emailRegex.test(email);
    }
    
    function isValidPhoneNumber(phone){
        let phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phone);
    }


    //Popup 37
    $("#openPopup37").click(function(){
        $("#overlay37").fadeIn();
        $("#popupForm37").fadeIn();
    });
    
    $(".close37").click(function(){
        $("#overlay37").fadeOut();
        $("#popupForm37").fadeOut();
    });
    
    
    // form37
    $("#form37").submit(function(e){
        e.preventDefault();
        let name = $("#name37").val();
        let email = $("#email37").val();
        let phone = $("#phone37").val();
        $("#nameError37").text("");
        $("#emailError37").text("");
        $("#phoneError37").text("");
    
        if(name.trim() === ""){
            $("#nameError37").text("Name is required.");
            return;
        }
    
        if(email.trim() === ""){
            $("#emailError37").text("Email is required.");
            return;
        }
    
        if(!isValidEmail(email)){
            $("#emailError37").text("Invalid email address.");
            return;
        }
    
        if(phone.trim() === ""){
            $("#phoneError37").text("Phone number is required.");
            return;
        }
    
        if(!isValidPhoneNumber(phone)){
            $("#phoneError37").text("Invalid phone number.");
            return;
            }
    
        $("#form37").unbind('submit').submit();
    });
    
    function isValidEmail(email){
        let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return emailRegex.test(email);
    }
    
    function isValidPhoneNumber(phone){
        let phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phone);
    }



    //Popup 38
    $("#openPopup38").click(function(){
        $("#overlay38").fadeIn();
        $("#popupForm38").fadeIn();
    });
    
    $(".close38").click(function(){
        $("#overlay38").fadeOut();
        $("#popupForm38").fadeOut();
    });
    
    
    // form38
    $("#form38").submit(function(e){
        e.preventDefault();
        let name = $("#name38").val();
        let email = $("#email38").val();
        let phone = $("#phone38").val();
        $("#nameError38").text("");
        $("#emailError38").text("");
        $("#phoneError38").text("");
    
        if(name.trim() === ""){
            $("#nameError38").text("Name is required.");
            return;
        }
    
        if(email.trim() === ""){
            $("#emailError38").text("Email is required.");
            return;
        }
    
        if(!isValidEmail(email)){
            $("#emailError38").text("Invalid email address.");
            return;
        }
    
        if(phone.trim() === ""){
            $("#phoneError38").text("Phone number is required.");
            return;
        }
    
        if(!isValidPhoneNumber(phone)){
            $("#phoneError38").text("Invalid phone number.");
            return;
            }
    
        $("#form38").unbind('submit').submit();
    });
    
    function isValidEmail(email){
        let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return emailRegex.test(email);
    }
    
    function isValidPhoneNumber(phone){
        let phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phone);
    }


        //Popup 39
        $("#openPopup39").click(function(){
            $("#overlay39").fadeIn();
            $("#popupForm39").fadeIn();
        });
        
        $(".close39").click(function(){
            $("#overlay39").fadeOut();
            $("#popupForm39").fadeOut();
        });
        
        
        // form39
        $("#form39").submit(function(e){
            e.preventDefault();
            let name = $("#name39").val();
            let email = $("#email39").val();
            let phone = $("#phone39").val();
            $("#nameError39").text("");
            $("#emailError39").text("");
            $("#phoneError39").text("");
        
            if(name.trim() === ""){
                $("#nameError39").text("Name is required.");
                return;
            }
        
            if(email.trim() === ""){
                $("#emailError39").text("Email is required.");
                return;
            }
        
            if(!isValidEmail(email)){
                $("#emailError39").text("Invalid email address.");
                return;
            }
        
            if(phone.trim() === ""){
                $("#phoneError39").text("Phone number is required.");
                return;
            }
        
            if(!isValidPhoneNumber(phone)){
                $("#phoneError39").text("Invalid phone number.");
                return;
                }
        
            $("#form39").unbind('submit').submit();
        });
        
        function isValidEmail(email){
            let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
            return emailRegex.test(email);
        }
        
        function isValidPhoneNumber(phone){
            let phoneRegex = /^\d{10}$/;
            return phoneRegex.test(phone);
        }





   

    // form 100
    $("#form100").submit(function(e){
        e.preventDefault();
        let name = $("#name100").val();
        let email = $("#email100").val();
        let phone = $("#phone100").val();
        $("#nameError100").text("");
        $("#emailError100").text("");
        $("#phoneError100").text("");

        if(name.trim() === ""){
            $("#nameError100").text("Name is required.");
            return;
        }

        if(email.trim() === ""){
            $("#emailError100").text("Email is required.");
            return;
        }

        if(!isValidEmail(email)){
            $("#emailError100").text("Invalid email address.");
            return;
        }

        if(phone.trim() === ""){
            $("#phoneError100").text("Phone number is required.");
            return;
        }

        if(!isValidPhoneNumber(phone)){
            $("#phoneError100").text("Invalid phone number.");
            return;
          }

        $("#form100").unbind('submit').submit();
    });

    function isValidEmail(email){
        let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return emailRegex.test(email);
    }

    function isValidPhoneNumber(phone){
        let phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phone);
    }

   

    

    // sticky bar
    $(window).ready(function(){
        $(window).scroll(function(){
            let heroBottom = $('.hero').offset().top;
            let scrollTop = $(window).scrollTop();

            if(scrollTop <= heroBottom){
                $('#stickyBar').addClass('sticky2');
            }else{
                $('#stickyBar').removeClass('sticky2')
            }
        });
    });


    // Blog
    $('.slider').slick({
        arrows: true,
        prevArrow: '<button type-"button" class="slick-prev">&lt;</button>',
        nextArrow: '<button type="button" class="slick-next">&gt;</button>',
        dots: true,
        slidesToShow: 4,
        responsive: [
            {
              breakpoint: 1029,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });

    // Read more Functionality
    $('.summary').each(function() {
        let content = $(this).text();
        let words = content.split(' ');
    
        if (words.length > 0) {
            let visibleText = words.slice(0, 0).join(' ') + ' ';
            let hiddenText = words.slice(0).join(' ');
            let fullText = visibleText + '<span class="ellipsis"></span><span class="more-text" style="display: none;">' + hiddenText + '</span>';
            let toggleLink = ' <a href="#" class="read-more">Read more</a>';
          
          $(this).html(fullText + toggleLink);
        }
      });
    
      $(document).on('click', '.read-more', function(e) {
        e.preventDefault();
        let $this = $(this);
        let $content = $this.parent();
        let $moreText = $content.find('.more-text');

        $moreText.toggle();
        $this.text($moreText.is(':visible') ? 'Read less' : 'Read more');
    });
});