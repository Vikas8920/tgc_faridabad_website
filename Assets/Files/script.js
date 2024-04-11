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


    // form 11
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
        nextArrow: '<button type="button" class="slick-next">&gt;</button>'
    });

    // Read more
    // $(".read-more-btn").click(function(){
    //     let $this = $(this);
    //     let $moreText = $this.parent().next(".more");

    //     $moreText.slideToggle(300,function(){
    //         $this.text($this.text() === "Read more" ? "Read less" : "Read more");
    //     });
    // });

    // $(".read-more-btn").click(function(){
    //     var $this = $(this);
    //     var $moreText = $this.prev(".more");
    
    //     $moreText.slideToggle(300, function(){
    //       $this.text($moreText.is(":visible") ? "Read less" : "Read more");
    //     });
    //   });

    $('.summary').each(function() {
        var content = $(this).text();
        var words = content.split(' ');
    
        if (words.length > 10) {
          var visibleText = words.slice(0, 10).join(' ') + ' ';
          var hiddenText = words.slice(10).join(' ');
          var fullText = visibleText + '<span class="ellipsis">...</span><span class="more-text" style="display: none;">' + hiddenText + '</span>';
          var toggleLink = ' <a href="#" class="read-more">Read more</a>';
          
          $(this).html(fullText + toggleLink);
        }
      });
    
      $(document).on('click', '.read-more', function(e) {
        e.preventDefault();
        var $this = $(this);
        var $content = $this.parent();
        var $ellipsis = $content.find('.ellipsis');
        var $moreText = $content.find('.more-text');
    
        $ellipsis.toggle();
        $moreText.toggle();
        $this.text($moreText.is(':visible') ? 'Read less' : 'Read more');
    });
});