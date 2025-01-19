$("document").ready(function() {

    $(".welcome-message").hide().fadeIn(2000);
    $(".welcome-submessage").hide().fadeIn(2500);

    let hobbies = {
        "hobby-1" : ["Urbanism", "I love expoloring everything about cities, especially their architecture. I prepare a 'walk guide' for every city I live in, and once participated in the New York's 'Great Saunter' event to walk around the Manhattan's 32 miles of shoreline in 10 hours. I also love traveling, and follow multiple podcasts (like 'Urbanist') to learn more about cities aroudn the world."],
        "hobby-2" : ["Sports","I played basketball for 11 years and was the captain of my high school Junior Varsity team, and won multiple medals from local and international tournaments. Moreover, I practiced kickboxing for 2 years. I have been spending more time in local Voleyball tournaments and golf ranges lately. I am an avid fan of Seattle Seahawks and Michigan sports."],
        "hobby-3" : ["Strategy & Card Games","I grew up trying to find solutions to the riddles that my grandpa would ask me during our family gatherings. I enjoy playing chess, checkers, and backgammon with my friends, even over Facetime! Also, I love Texas Hold'em Poker, and was one of the top 12 players out of 100+ in Flow Traders Summer 2019 Poker Tournament. I am also an amateur cardist, learning cardistry tricks!"],
    }

    //Hobby Section

    $(".hobby-item").click(function () {
        let class_list = this.classList;
        $(this).slideUp();
        if ($(this).css('border-radius') === "100%") {
            $(this).css('border-radius',0);
            $(this).css('font-size',"18px");
            $(this).html(hobbies[class_list[1]][1]);
        }
        else {
            $(this).css('border-radius',"100%");
            $(this).css('font-size',"30px");
            $(this).html(hobbies[class_list[1]][0]); 
        }
        $(this).slideDown();
    });
});

