var teacherName = "Sally Jones";
var department = "Physics";
var teacherRating = [1,2,3];

function getAvgRating(ratings) {
  var total = 0;
  for (i = 0; i < ratings.length; i++) {
      total += ratings[i];
  }
  return total / ratings.length;
}
