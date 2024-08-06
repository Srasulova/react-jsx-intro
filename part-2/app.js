const App = () => {
  return (
    <div>
      <Tweet
        username="Srasulova"
        name="Sabina"
        message="Hello there"
        date={Date.now()}
      />

      <Tweet
        username="Limonchello"
        name="Limon"
        message="Tweet tweet"
        date={Date.now()}
      />

      <Tweet
        username="BigTurkey"
        name="turkey"
        message="Baca baca"
        date={Date.now()}
      />
    </div>
  );
};
