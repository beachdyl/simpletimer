(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      todayFull = mm + "/" + dd + "/" + yyyy,
      todayTime = today.getTime(),
      hh = String(today.getHours()).padStart(2, "0"),
      MM = String(today.getMinutes()).padStart(2, "0");
  
  let sessions = [
    ["WARM UP", "16:00"],
      ["CODING", "16:10"],
      ["COOL DOWN", "16:55"],
      ["DISMISSAL", "17:00"],
    ["WARM UP", "17:15"],
      ["CODING", "17:25"],
      ["COOL DOWN", "18:10"],
      ["DISMISSAL", "18:15"],
    ["WARM UP", "18:30"],
      ["CODING", "18:40"],
      ["COOL DOWN", "19:25"],
      ["DISMISSAL", "19:30"],
  ]
  
  let dest = 0,
      name = "None?";
  for (i = 0; i < sessions.length; i++) {
    let testTime = new Date(todayFull + " " + sessions[i][1]).getTime();
    if (testTime > todayTime) {
      dest = testTime;
      name = sessions[i][0];
      console.log("Found " + name + " at " + dest + ". Now is " + todayTime);
      break;
    }
  }
  
  const countDown = dest,
      x = setInterval(function() {    

        const distance = countDown - todayTime;

        document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        if (distance < 0) {
          document.getElementById("headline").innerText = "Time to go home!";
          document.getElementById("countdown").style.display = "none";
          document.getElementById("content").style.display = "block";
          //clearInterval(x);
        } else {
          document.getElementById("headline").innerText = "Time until " + name;
        }
        //seconds
      }, 0)
  }());