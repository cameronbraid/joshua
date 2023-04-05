function whenSubmit() {
  let firstName = document.getElementById("first-name").value;
  let lastName = document.getElementById("last-name").value;
  let email = document.getElementById("email").value;

  let user = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    sport: "",
    food: "",
  };

  let sportInfo = {
    favSport: "",
    comment: document.getElementById("sport-comment").value,
  };

  let radios = document.getElementsByName("sports");

  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      sportInfo.favSport = radios[i].value;
    }
  }

  user.sport = sportInfo;

  let foodInfo = {
    favFood: "",
    pizzaToppings: [],
  };

  let selects = document.getElementById("foods");

  for (let i = 0; i < 7; i++) {
    if (selects.selectedIndex === i) {
      foodInfo.favFood = selects[i].value;
    }
  }

  let pizzaToppings = document.getElementsByName("toppings");

  for (let i = 0; i < pizzaToppings.length; i++) {
    if (pizzaToppings[i].checked) {
      switch (foodInfo.pizzaToppings.length) {
        case 0:
          foodInfo.pizzaToppings[0] = pizzaToppings[i].value;
          break;
        case 1:
          foodInfo.pizzaToppings[1] = pizzaToppings[i].value;
          break;
        case 2:
          foodInfo.pizzaToppings[2] = pizzaToppings[i].value;
          break;
        case 3:
          foodInfo.pizzaToppings[3] = pizzaToppings[i].value;
          break;
        case 4:
          foodInfo.pizzaToppings[4] = pizzaToppings[i].value;
          break;
        case 5:
          foodInfo.pizzaToppings[5] = pizzaToppings[i].value;
          break;
        case 6:
          foodInfo.pizzaToppings[6] = pizzaToppings[i].value;
      }
    }
  }

  user.food = foodInfo;

  alert(
    `Your name is ${user.firstName} ${
      user.lastName
    } and your (or your parent's) email address is ${
      user.email
    }. Your favourite sport is ${
      user.sport.favSport
    }, and the reason you chose this was: "${
      user.sport.comment
    }". Your favourite food is ${
      user.food.favFood
    } and the toppings you would choose to have on a pizza are ${user.food.pizzaToppings.join(
      ", "
    )}.`
  );
}

window.whenSubmit = whenSubmit;
