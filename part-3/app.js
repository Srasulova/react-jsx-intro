const App = () => {
  return (
    <div className="container">
      <Person
        name="Alexander"
        age={25}
        hobbies={["Reading", "Hiking", "Gaming"]}
      />
      <Person name="John" age={17} hobbies={["Swimming", "Painting"]} />
      <Person
        name="Elizabeth"
        age={22}
        hobbies={["Cooking", "Traveling", "Music"]}
      />
    </div>
  );
};
