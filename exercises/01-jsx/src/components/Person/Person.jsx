const Person = () => {
  const person = {
    name: "Peter Piper",
    birthYear: 1940,
    occupation: "Musician",
    age() {
      let currentYear = new Date(Date.now()).getFullYear();
      return currentYear - person.birthYear;
    },
  };

  /**
   * Create a function that get's Peter Piper's age from his birth year.
   * You can get today's year with:
   * @example new Date(Date.now()).getFullYear()
   */

  function calculateAge (birthYear) {
      const currentYear = new Date().getFullYear()
      const age = currentYear - birthYear;
      return age    
  }

  return (
    <div>
      <h1>Featured Person</h1>
      {/* Using JSX, plugin name below from the person object */}
<<<<<<< HEAD
      <div>Name: ${Person.name}</div>
      {/* Using JSX, plugin occupation below from the person object */}
      <div>Occupation: ${Person.occupation}</div>
      {/* Using JSX, plugin the birth year using a function that converts age to birth year */}
      <div>Age: calculateAge()</div>
=======
      <div>Name: {person.name}</div>
      {/* Using JSX, plugin occupation below from the person object */}
      <div>Occupation: {person.occupation} </div>
      {/* Using JSX, plugin the birth year using a function that converts age to birth year */}
      <div>Age: {person.age()}</div>
>>>>>>> 1102a559497e14c7cbd0096e6cec5a4f1808d6fb
    </div>
  );
};

export default Person;
