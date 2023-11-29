function App() {
  const name = "Pikachu";
  const imgUrl =
    "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png";

  // return (
  //   <div>
  //     {/* curly braces as text */}
  //     <p>Hello, my name is {name}</p>

  //     {/* curly braces as attribute */}
  //     <img src={imgUrl} alt="foto" />
  //   </div>
  // );

  // conditional rendering
  const isLoggedIn = false;

  // if else
  // if (isLoggedIn) {
  //   return <h1 className="text-2xl font-bold">Hello {name}!</h1>;
  // }

  // return <h1 className="text-2xl font-bold">Please login</h1>;

  // ternary and logical operator
  const messages = [
    {
      id: 1,
      subject: "Hello World",
    },
    {
      id: 2,
      subject: "Good bye world",
    },
    {
      id: 3,
      subject: "What's up, world?",
    },
  ];

  return (
    <>
      {/* ternary */}
      {isLoggedIn ? (
        <h1 className="text-2xl font-bold">Hello {name}!</h1>
      ) : (
        <h1 className="text-2xl font-bold">Please login</h1>
      )}

      {/* logical operator */}
      {messages.length > 0 && (
        <>
          <h2 className="mb-2 font-bold">
            You have {messages.length} unread messages.
          </h2>

          {messages.map((message) => (
            <p>{message.subject}</p>
          ))}
        </>
      )}
    </>
  );
}

export default App;
