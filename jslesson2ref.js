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

  //********NOTES**********//

  function Course(courseName, courseDept, courseTeacher, courseSemester) {
    this.name = courseName;
    this.department = courseDept;
    this.teacher = courseTeacher;
    this.semester = courseSemester;
  }

  var objArray = [];
  objArray[0] = new Course("Literature", "English", teacherHoney.name, "Spring");
  objArray[1] = new Course("Calculus", "Math", teacherTest.name, "Fall");
  objArray[2] = new Course("Spanish", "Foreign Language", teacherTest.name, "Fall");
  objArray[3] = new Course("Biology", "Science", teacherTest.name, "Fall");
  objArray[4] = new Course("Chemistry", "Science", teacherTest.name, "Fall");
  objArray[5] = new Course("Test", "Science", teacherTest.name, "Fall");


  var coursesListFull = [
                  [courseLiterature.name, courseLiterature.department],
                  [courseCalculus.name, courseCalculus.department],
                  [courseSpanish.name, courseSpanish.department],
                  [courseBiology.name, courseBiology.department],
                  [courseChemistry.name, courseChemistry.department],

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
