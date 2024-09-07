// Get  to DOM elements
const gameContainer = document.querySelector(".container"),
  userResult = document.querySelector(".user_result img"),
  cpuResult = document.querySelector(".cpu_result img"),
  result = document.querySelector(".result"),
  optionImages = document.querySelectorAll(".option_image");

optionImages.forEach((image, index) => {
  image.addEventListener("click", function () {
    gameContainer.classList.add("start");
    userResult.src = cpuResult.src = "images/rock.png";
    result.textContent = "Wait...";
    let randomNum = Math.floor(Math.random() * 3);
    optionImages.forEach((img) => img.classList.remove("active"));
    image.classList.add("active");
    setTimeout(() => {
      gameContainer.classList.remove("start");
      let imageSource = image.querySelector("img").src;
      userResult.src = imageSource;

      let cpuImage = [
        "images/rock.png",
        "images/paper.png",
        "images/scissors.png",
      ][randomNum];
      cpuResult.src = cpuImage;
      let userOutcome = ["R", "P", "S"][index];
      let cpuOutcome = ["R", "P", "S"][randomNum];
      let outCome = userOutcome + cpuOutcome;
      let possibleResut = {
        RP: "Cpu",
        RS: "User",
        PR: "User",
        PS: "Cpu",
        SR: "Cpu",
        SP: "User",
      };
      if (userOutcome === cpuOutcome) {
        result.textContent = "Draw";
      } else {
        result.textContent = `${possibleResut[outCome]} won!`;
      }
    }, 2500);
  });
});
