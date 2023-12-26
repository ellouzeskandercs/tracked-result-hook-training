import "./ComponentDesign.css";

export const ComponentDesign = ({
  data,
  showLoader = false,
  onClick,
  nbOfRenders,
}) => {
  return (
    <div
      style={{
        padding: 32,
        backgroundColor: "red",
        borderRadius: 32,
        position: "relative",
      }}
    >
      {showLoader && <span className="loader"></span>}
      <div style={{ display: showLoader ? "none" : "block" }}>
        <p>Component has rendered {nbOfRenders} times</p>
        <p>Current data: {data}</p>
        <button onClick={onClick}>refetech</button>
      </div>
    </div>
  );
};
