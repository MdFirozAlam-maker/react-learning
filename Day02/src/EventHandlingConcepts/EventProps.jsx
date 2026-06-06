export const EventProps = () => {
  const HandleWelcomeUser = (user) => {
    alert(`hey bhadwa ${user}`);
  };

  const handleHover = () => {
    alert(`Chl chutiye touch kiu kiya tune isko`);
  };

  return (
    <>
      <WelcomeUser
        onClick={() => HandleWelcomeUser("firoz")}
        onMouseEnter={handleHover}
      />
    </>
  );
};

const WelcomeUser = ({onClick, onMouseEnter}) => {
  const handlegreeting = () => {
    console.log(`Hey User, welcome aa hii gya tu`);
    onClick();
  };
  return (
    <>
      <button onClick={onClick}>Click</button>

      <button onMouseEnter={onMouseEnter}>
        Hover mt krna kiya to bhut maarunga
      </button>
      
      <button onClick={handlegreeting}>greetings</button>
    </>
  );
};
