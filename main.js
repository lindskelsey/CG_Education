//**************teacher object***********//

function Teacher(teacherName, teacherDepartment, teacherRatings) {
  this.name = teacherName;
  this.department = teacherDepartment;
  this.ratings = teacherRatings;
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
var teacherTaylor = new Teacher("Eric Taylor", "Physical Ed.", [2.5,3.0,4.0]);
var teacherHoney = new Teacher("Jennifer Honey", "English", [3.5,4.0,5.0]);
var teacherTest = new Teacher("Test", "English", [3.5,4.0,5.0]);


var userRating = prompt("We would like for you to review " + teacherHoney.name + "." + " Please enter a rating between 0.0 - 5.0?");


if (userRating >=0 && userRating <=5) {
  teacherHoney.ratings.push(parseInt(userRating))
    alert("Thanks for you review! " + teacherHoney.name + "'s average rating is now " + teacherHoney.getAvgRating(teacherHoney.ratings) + " .")
} else {
  userRating = prompt("We would like for you to review . Please enter a rating between 0.0 - 5.0?");
  }


//***********Course Prototype**********//

function Course(courseName, courseDept, courseTeacher, courseSemester) {
  this.name = courseName;
  this.department = courseDept;
  this.teacher = courseTeacher;
  this.semester = courseSemester;
}

//******************Course Array***********//

var courseArray = [];
courseArray[0] = new Course("Literature", "English", teacherHoney.name, "Spring");
courseArray[1] = new Course("Calculus", "Math", teacherTest.name, "Fall");
courseArray[2] = new Course("Spanish", "Foreign Language", teacherTest.name, "Fall");
courseArray[3] = new Course("Biology", "Science", teacherTest.name, "Fall");
courseArray[4] = new Course("Chemistry", "Science", teacherTest.name, "Fall");
courseArray[5] = new Course("Test", "Science", teacherTest.name, "Fall");

//******************Just Depts**********//

var deptValues = [];
 for (i = 0; i < courseArray.length; i++){
    deptValues[i] = courseArray[i]["department"];
 }

//******************User Prompt***********//

var userDept = prompt("Please enter the department you are looking for a course in");

//*****************************************//

function filterByDepartment(userDept, courseArray){
    var courseList = [];
    for (var i=0; i < courseArray.length; i++) {
        if (userDept == courseArray[i].department) {
        courseList.push(courseArray[i].name);
      }
    }
    return courseList;
}

if (deptValues.indexOf(userDept) !== -1) {
  alert("The following courses are available in the " + userDept + " department:" + filterByDepartment(userDept,courseArray) + ".");
} else {
  prompt("Please enter the department you are looking for a course in")
};


  //*******Student object********//

function Student(studentName, studentMajor, studentEmail, studentAvgGpa, studentCourses) {
  this.name = studentName;
  this.major = studentMajor;
  this.email = studentEmail;
  this.gpa = studentAvgGpa;
  this.courses = studentCourses;
}

Student.prototype = {
  addCourse: function (newCourse) {
    this.courses.push(newCourse)
  },
  dropCourse: function(removeCourse) {
    for(var i = this.courses.length-1; i--;){
	     if (this.courses[i] === removeCourse) this.courses.splice(i, 1);
    }
  },
  changeMajor: function(newMajor) {
    this.major = newMajor;
  }
};

var studentTest = new Student("Test Name", "Biology", "test@test.com", 3.5, ["Literature", "Physics", "Spanish"]);

//*** Grad year prompt***//

//**JS 3**//

var welcomeCollegeStudent = function (classYear) {
  alert("Welcome " + classYear + "!")
};

var welcomeHsStudent = function (classYearHS) {
  alert("You're still a " + classYearHS + " in high school!")
};


//************//

var today = new Date();
var currentYear = today.getFullYear();
var currentMonth = today.getMonth();

function welcomeStudentsByGraduatingClass() {
  var enteredGradYear = prompt("Enter your graduation year");
  var enteredGradMonth = prompt("Enter your graduation month (May or December)");
  var yearDiff = enteredGradYear - currentYear;

if(yearDiff <= 4 && yearDiff >= 0) {
  if (currentMonth <= 4) {
      if (yearDiff == 0 && (enteredGradMonth == "May" || enteredGradMonth == "December")) {
        classYear = "Senior"
      } else if (yearDiff == 1 && (enteredGradMonth == "May" || enteredGradMonth == "December")){
        classYear = "Junior"
      } else if (yearDiff == 2 && (enteredGradMonth == "May" || enteredGradMonth == "December")){
        classYear = "Sophomore"
      } else if (yearDiff == 3 && (enteredGradMonth == "May" || enteredGradMonth == "December")){
        classYear = "Freshman"
      }
        welcomeCollegeStudent(classYear)
  } else if (currentMonth > 4 && currentMonth <= 11) {
          if (yearDiff == 0 && enteredGradMonth == "December") {
          classYear = "Senior"
        } else if (yearDiff == 1 && enteredGradMonth == "May"){
          classYear = "Senior"
        } else if (yearDiff == 1 && enteredGradMonth == "December"){
          classYear = "Junior"
        } else if (yearDiff == 2 && enteredGradMonth == "May"){
          classYear = "Junior"
        } else if (yearDiff == 2 && enteredGradMonth == "December"){
          classYear = "Sophomore"
        } else if (yearDiff == 3 && enteredGradMonth == "May"){
          classYear = "Sophomore"
        } else if (yearDiff == 3 && enteredGradMonth == "December"){
          classYear = "Freshman"
        } else if (yearDiff == 4 && enteredGradMonth == "May"){
          classYear = "Freshman"
        }
          welcomeCollegeStudent(classYear)
      }

} else if (yearDiff >= 4 && yearDiff <= 9) {
    if (currentMonth <= 4) {
          if (yearDiff == 5 && (enteredGradMonth == "May" || enteredGradMonth == "December")) {
            classYear = "Senior"
          } else if (yearDiff == 6 && (enteredGradMonth == "May" || enteredGradMonth == "December")){
            classYear = "Junior"
          } else if (yearDiff == 7 && (enteredGradMonth == "May" || enteredGradMonth == "December")){
            classYear = "Sophomore"
          } else if (yearDiff == 8 && (enteredGradMonth == "May" || enteredGradMonth == "December")){
            classYear = "Freshman"
          }
          welcomeHsStudent(classYear)
    } else if (currentMonth > 4 && currentMonth <= 11) {
        if (yearDiff == 5 && enteredGradMonth == "December") {
          classYear = "Senior"
        } else if (yearDiff == 6 && enteredGradMonth == "May"){
          classYear = "Senior"
        } else if (yearDiff == 6 && enteredGradMonth == "December"){
          classYear = "Junior"
        } else if (yearDiff == 7 && enteredGradMonth == "May"){
          classYear = "Junior"
        } else if (yearDiff == 7 && enteredGradMonth == "December"){
          classYear = "Sophomore"
        } else if (yearDiff == 8 && enteredGradMonth == "May"){
          classYear = "Sophomore"
        } else if (yearDiff == 8 && enteredGradMonth == "December"){
          classYear = "Freshman"
        } else if (yearDiff == 9 && enteredGradMonth == "May"){
          classYear = "Freshman"
        }
          welcomeHsStudent(classYear)
      }
    }
    else if (yearDiff > 9
            || (currentMonth <= 4 && yearDiff > 8)
            || (currentMonth > 4 && yearDiff == 9 && enteredGradMonth == "December")) {
      alert("Whoa, you have a few more years until college...")
  }
    else {
      alert("You've already graduated! Congrats!")
    }
}

welcomeStudentsByGraduatingClass();
