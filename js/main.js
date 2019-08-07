$("document").ready(function() {

    $(".welcome-message").hide().fadeIn(2000);
    $(".welcome-submessage").hide().fadeIn(2500);

    let hobbies = {
        "hobby-1" : ["Superhero Enthusiast", 
        "I am a huge Marvel and DC comics and movies fan. I have watched the entire Marvel Cinematic Universe for 2 times, some movies 3. I read a total of 8 comic book series, and still counting. My favorite superhero movie is Captain America: Civil War, and my favorite comic book series is Injustice."],
        "hobby-2" : ["Sports Fan","I played basketball for 11 years in total as a PF. I was the captain of my high school Junior Varsity team, and won multiple medals from local and international tournaments. Moreover, I practiced kickboxing for 2 years. I have been a Galatasary SK fan as far as I can remember."],
        "hobby-3" : ["Strategy & Card Games","I grew up trying to find solutions to the riddles that my grandpa would ask me during our family gatherings. I enjoy playing chess, checkers, and backgammon with my friends, even over Facetime! Also, I love Texas Hold'em Poker, and was one of the top 12 players out of 100+ in Flow Traders Summer 2019 Poker Tournament."],
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

