import Message from "./Message";

function GreetingCard() {
  return (
    <div className="card">
      <h2>🎂 Happy Birthday!</h2>
      <Message />
      <h4>From: Your Friend ❤️</h4>
    </div>
  );
}

export default GreetingCard;