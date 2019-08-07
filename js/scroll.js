//Scrolling
$(function() {
    $(".site-name").on('click', function() { 
        var position = $("#welcome").offset().top; 
        $("HTML, BODY").animate({ scrollTop: position }, 1000); 
    }); 

    $(".education-btn").on('click', function() { 
        var position = $("#education").offset().top; 
        $("HTML, BODY").animate({ scrollTop: position }, 1000); 
    });

    $(".experience-btn").on('click', function() { 
        var position = $("#experience").offset().top; 
        $("HTML, BODY").animate({ scrollTop: position }, 1000); 
    });

    $(".projects-btn").on('click', function() { 
        var position = $("#projects").offset().top; 
        $("HTML, BODY").animate({ scrollTop: position }, 1000); 
    });

    $(".hobbies-btn").on('click', function() { 
        var position = $("#hobbies").offset().top; 
        $("HTML, BODY").animate({ scrollTop: position }, 1000); 
    });

    $(".contact-btn").on('click', function() { 
        var position = $("#contact").offset().top; 
        $("HTML, BODY").animate({ scrollTop: position }, 1000); 
    });    
});