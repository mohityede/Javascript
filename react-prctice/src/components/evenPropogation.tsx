const box = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const grandParentBox = {
  width: "500px",
  height: "500px",
  background: "blue",
};

const parentBox = {
  width: "350px",
  height: "350px",
  background: "black",
};

const childBox = {
  width: "200px",
  height: "200px",
  background: "green",
};

function EventPropogation() {
  const grandParentClickHandler = () => {
    console.log("grandparent clicked");
  };
  const parentClickHandler = () => {
    console.log("parent clicked");
  };
  const childClickHandler = () => {
    console.log("child clicked");
  };
  return (
    <>
      <div
        style={{ ...box, ...grandParentBox }}
        onClick={grandParentClickHandler}
      >
        GrandParent
        <div
          style={{ ...box, ...parentBox }}
          onClickCapture={parentClickHandler}
        >
          Parent
          <div style={{ ...box, ...childBox }} onClick={childClickHandler}>
            child
          </div>
        </div>
      </div>
    </>
  );
}

export default EventPropogation;
