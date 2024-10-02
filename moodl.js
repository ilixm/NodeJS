//OBJECT
const student = {
    firstName: "Marie",
    age: 20,
    courses: []
  }

  //Accédez et modifiez les valeurs de l'objet :
  student.age = 21
  student.grade= "A"

  // Add courses to the student object
  student.courses.push("Math", "Physics", "Chemistry");
  const physicsIndex = student.courses.indexOf("Physics");
  const firstTwoCourses = student.courses.slice(0, 2);
  


  //Affichez le nouveau tableau créé avec slice.
  console.log(firstTwoCourses);
  //Affichez dans la console l'objet student complet avec les modifications.
  console.log(student);
  //Affichez l'index de "Physics".
  console.log(physicsIndex);

