//**************teacher object***********//

function Teacher(teacherName, teacherDept, ratingsArray) {
  this.name = undef;
  this.department = "English";
  this.ratings = [3.0,4.5,5.0];
}

Teacher.prototype = {
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

var teacherKeating = new Teacher("John Keating", "English", [3.5,4.0,4.0]);
var teacherTaylor = new Teacher("Eric Taylor", "Physical Ed.", [2.5,3.0,4.0])

var userRating = prompt("We would like for you to review " + teacherKeating.name + "." + " Please enter a rating between 0.0 - 5.0?");


if (userRating >=0 && userRating <=5) {
  teacher.ratings.push(parseInt(userRating))
    alert("Thanks for you review! " + teacher.name + "'s average rating is now " + teacher.getAvgRating(teacher.ratings) + " .")
} else {
  userRating = prompt("We would like for you to review . Please enter a rating between 0.0 - 5.0?");
  }


//***********course object**********//

var course = {
  name: "Literature",
  department: "English",
  teacher: teacher.name,
  semester: "Spring",
}

var coursesListFull = [
                [course.name,course.department],
                ["Spanish", "Foreign Language"],
                ["Geometry", "Math"],
                ["Physics", "Science"],
                ["Biology", "Science"],
                ["Calculus", "Math"]
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

var fullDeptList = ["Math", "Science", "English", "Foreign Language"];

var userDept = prompt("Please enter the department you are looking for a course in")

  if (fullDeptList.indexOf(userDept) !== -1) {
    alert("The following courses are available in the " + userDept + " department:" + filterByDepartment(coursesListFull,userDept) + ".");
  } else {
    prompt("Please enter the department you are looking for a course in")
  };

  var getDeptList = function (coursesArray, indexDept){
      var deptList = [];
      for(var i=0; i<coursesArray.length; i++){
        deptList.push(coursesArray[i][indexDept]);
      }
      return deptList;
  };
