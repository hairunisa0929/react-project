import UserGreeting from "./components/ClassComponent";
import GuestGreeting from "./components/FunctionalComponent";

function App() {
  const name = "Forger";
  const image = "https://www.purina.co.uk/sites/default/files/2023-03/Hero%20Pedigree%20Cats.jpg";

  const onClickButton = (role) => alert(`Logged in as ${role}`);

  return (
    <>
      {/* <UserGreeting userName={name} /> */}
      <GuestGreeting userName={name} image={image} />
    </>
  );
}

export default App;
