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


var userRating = prompt("We would like for you to review " + teacherHoney.name + "." + " Please enter a rating between 0.0 - 5.0?");


if (userRating >=0 && userRating <=5) {
  teacherHoney.ratings.push(parseInt(userRating))
    alert("Thanks for you review! " + teacherHoney.name + "'s average rating is now " + teacherHoney.getAvgRating(teacherHoney.ratings) + " .")
} else {
  userRating = prompt("We would like for you to review . Please enter a rating between 0.0 - 5.0?");
  }


//***********course object**********//

function Course(courseName, courseDept, courseTeacher, courseSemester) {
  this.name = courseName;
  this.department = courseDept;
  this.teacher = courseTeacher;
  this.semester = courseSemester;
}

var courseLiterature = new Course("Literature", "English", teacherHoney.name, "Spring");

var coursesListFull = [
                [courseLiterature.name,courseLiterature.department],
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
