var teacherName = "Jennifer Honey";
var department = "Physics";
var teacherRating = [1,2,3];

function getAvgRating(ratings) {
  var total = 0;
  for (i = 0; i < ratings.length; i++) {
      total += ratings[i];
  }
  return total / ratings.length;
}

function addTeacherRating(ratings,newRating) {
  var totalRating = ratings;
  totalRating.push(newRating);
  return totalRating;
}

var userRating = prompt("We would like for you to review . Please enter a rating between 0.0 - 5.0?");

if (userRating >=0 && userRating <=5) {
  teacherRating.push(userRating)
  var totalNewRating = 0;
    for (i = 0; i < teacherRating.length; i++) {
      totalNewRating += teacherRating[i];
    }
    var finalRating = (totalNewRating/ teacherRating.length);
    alert("Thanks for you review! " + teacherName + "'s average rating is now " + finalRating + " .")
} else {
  userRating = prompt("We would like for you to review . Please enter a rating between 0.0 - 5.0?")
}
