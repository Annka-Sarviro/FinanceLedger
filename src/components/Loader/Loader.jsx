import loader from "../../assets/gallery/loading.gif";

const Loader = () => {
  const mystyle = {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: "20",
  };
  return (
    <div style={mystyle}>
      <img src={loader} alt="" />
    </div>
  );
};

export default Loader;
