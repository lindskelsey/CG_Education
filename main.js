var teacher = {
name: "Jennifer Honey", department: "English",
ratings: [3.0,4.5,5.0],
addRating: function (newRating) {
  var totalRating = ratings;
  this.ratings.push(newRating);
    },
getAvgRating: function () {
  var total = 0;
  for(i=0; i < this.ratings.length; i++) {
      total = total + this.ratings[i];
    }
  return total / this.ratings.length;
  }

};

var userRating = prompt("We would like for you to review " + teacher.name + "." + " Please enter a rating between 0.0 - 5.0?");


if (userRating >=0 && userRating <=5) {
  teacher.ratings.push(parseInt(userRating))
    alert("Thanks for you review! " + teacher.name + "'s average rating is now " + teacher.getAvgRating(teacher.ratings) + " .")
} else {
  userRating = prompt("We would like for you to review . Please enter a rating between 0.0 - 5.0?");
  }
