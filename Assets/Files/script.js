$(document).ready(function(){
    //Download Syllabus
    $('#close').click(function(){
        $('.syllabus_container').hide();
    })
    
    //Details Accordion
    // $('.details-accordion-header').click(function(){
    //     $(this).next('.details-accordion-content').slideToggle();
    // })

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
        //let $ellipsis = $content.find('.ellipsis');
        let $moreText = $content.find('.more-text');
    
        //$ellipsis.toggle();
        $moreText.toggle();
        $this.text($moreText.is(':visible') ? 'Read less' : 'Read more');
    });
});