const Person = (props) => {
  // Truncate the name if it's longer than 8 characters
  const displayName =
    props.name.length > 8 ? props.name.slice(0, 6) : props.name;

  // Determine the message based on age
  const ageMessage = props.age >= 18 ? "please go vote!" : "you must be 18";

  return (
    <div className="person">
      <p>Learn some information about this person</p>
      <p>Name: {displayName} </p>
      <p>Age: {props.age} </p>
      <h3>{ageMessage}</h3>
      <ul>
        {props.hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
};
