
$(function () {

    // ========= Counter-UP Start =========
    
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    
    // ========= Countdown Timer Start =========
    
    const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;
    
      let birthday = "May 5, 2021 02:43:20",
          countDown = new Date(birthday).getTime(),
          x = setInterval(function() {    
    
            let now = new Date().getTime(),
                distance = countDown - now;
    
            document.getElementById("days").innerText = Math.floor(distance / (day)),
              document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
              document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
              document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
    
            //do something later when date is reached
            // ---- (Tariq-Edit) ------
    
            if (distance < 0) {
                let countdown = document.getElementById("count_down"),
                    photo = document.getElementById("count_down_photo")
    
            //   let headline = document.getElementById("headline"), 
            //   content = document.getElementById("content");
    
            //   headline.innerText = "It's my birthday!";
            //   content.style.display = "block";
    
              countdown.style.display = "none";
              photo.style.display = "block";
            
              clearInterval(x);
            }
            //seconds
          }, 0)
    
    // ========= Veno Box Start =========
    
        $('.venobox').venobox(); 

    // ========= Countdown2 Timer Start =========
    
    const second2 = 1000,
            minute2 = second2 * 60,
            hour2 = minute2 * 60,
            day2 = hour2 * 24;
    
      let birthday2 = "May 5, 2021 02:43:20",
          countDown2 = new Date(birthday2).getTime(),
          x2 = setInterval(function() {    
    
            let now2 = new Date().getTime(),
                distance2 = countDown2 - now2;
    
            document.getElementById("days2").innerText = Math.floor(distance2 / (day2)),
              document.getElementById("hours2").innerText = Math.floor((distance2 % (day2)) / (hour2)),
              document.getElementById("minutes2").innerText = Math.floor((distance2 % (hour2)) / (minute2)),
              document.getElementById("seconds2").innerText = Math.floor((distance2 % (minute2)) / second2);
    
            //do something later when date is reached
            // ---- (Tariq-Edit) ------
    
            if (distance2 < 0) {
                let countdown2 = document.getElementById("count_down2"),
                    photo2 = document.getElementById("count_down_photo2")
    
            //   let headline = document.getElementById("headline"), 
            //   content = document.getElementById("content");
    
            //   headline.innerText = "It's my birthday!";
            //   content.style.display = "block";
    
              countdown2.style.display = "none";
              photo2.style.display = "block";
            
              clearInterval(x2);
            }
            //seconds
          }, 0)
    
    });