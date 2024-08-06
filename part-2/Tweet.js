const Tweet = (props) => {
  const date = new Date(props.date);

  // Format the date as MM-DD-YYYY using toLocaleDateString
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return (
    <div className="tweet">
      <p>My username is {props.username} </p>
      <p>My name is {props.name} </p>
      <p>Date: {formattedDate} </p>
      <p>Message: {props.message} </p>
    </div>
  );
};
