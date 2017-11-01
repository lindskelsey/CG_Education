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
                ["Literature","English"],
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

//**Trying to get Array into one Dept List**//

  var getDeptList = function (coursesArray, indexDept){
      var deptList = [];
      for(var i=0; i<coursesArray.length; i++){
        deptList.push(coursesArray[i][indexDept]);
      }
      return deptList;
  };

//**JS 3**//

var welcomeCollegeStudent = function (classYear) {
  alert("Welcome " + classYear + "!")
};

var welcomeHSStudent = function (classYearHS) {
  alert("You're still a " + classYearHS + " in high school!")
};

var getGradDate = function (gradMonth, gradYear) {
  var gradDate = gradMonth + " " + gradYear;
  return gradDate

};

//************//

var today = new Date();
var currentYear = today.getFullYear();

function welcomeStudentsByGraduatingClass() {
    var enteredGradYear = prompt("Enter your graduation year");
    var enteredGradMonth = prompt("Enter your graduation month (May or December)");
    if (enteredGradYear == currentYear && enteredGradMonth == "December"){
      classYear = "Senior"
      welcomeCollegeStudent(classYear)
    } else if (enteredGradYear - currentYear == 1 && enteredGradMonth == "May") {
        classYear = "Senior"
        welcomeCollegeStudent(classYear)
    } else if (enteredGradYear - currentYear == 1 && enteredGradMonth == "December") {
          classYear = "Junior"
          welcomeCollegeStudent(classYear)
    } else if (enteredGradYear - currentYear == 2 && enteredGradMonth == "May") {
          classYear = "Junior"
          welcomeCollegeStudent(classYear)
    } else if (enteredGradYear - currentYear == 2 && enteredGradMonth == "December") {
          classYear = "Sophomore"
          welcomeCollegeStudent(classYear)
    } else if (enteredGradYear - currentYear == 3 && enteredGradMonth == "May") {
          classYear = "Sophomore"
          welcomeCollegeStudent(classYear)
    } else if (enteredGradYear - currentYear == 3 && enteredGradMonth == "December") {
          classYear = "Freshman"
          welcomeCollegeStudent(classYear)
    } else if (enteredGradYear - currentYear == 4 && enteredGradMonth == "May") {
          classYear = "Freshman"
          welcomeCollegeStudent(classYear)
};

welcomeStudentsByGraduatingClass();
