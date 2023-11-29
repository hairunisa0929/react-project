import UserGreeting from "./components/ClassComponent";
import GuestGreeting from "./components/FunctionalComponent";

function App() {
  const name = "Forger";

  const onClickButton = (role) => alert(`Logged in as ${role}`);

  return (
    <>
      {/* <UserGreeting userName={name} /> */}
      <GuestGreeting userName={name} getRole={onClickButton} />
    </>
  );
}

export default App;
