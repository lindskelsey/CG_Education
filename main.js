

var teacherName = "Jennifer Honey";
var department = "English";
var teacherRating = [3.0,4.5,5.0];

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

var userRating = prompt("We would like for you to review " + teacherName + "." + " Please enter a rating between 0.0 - 5.0?");


if (userRating >=0 && userRating <=5) {
  teacherRating.push(parseInt(userRating))
    alert("Thanks for you review! " + teacherName + "'s average rating is now " + getAvgRating(teacherRating) + " .")
} else {
  userRating = prompt("We would like for you to review . Please enter a rating between 0.0 - 5.0?")
}


var coursesListFull = [
                ["course1","English"],
                ["course2", "English"],
                ["course3", "Math"],
                ["course4", "Science"],
                ["course5", "Science"],
                ["course6", "Math"]
              ];

function filterByDepartment (coursesArray, selectDept) {
  var courseList = [];
  for (var i = 0; i < coursesArray.length; i++) {
    if (coursesArray[i][1] == selectDept){
      courseList.push(coursesArray[i][0]);
    }
  }
    return courseList;
}
