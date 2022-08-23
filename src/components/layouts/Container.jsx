const Container = ({ children }) => {
  return (
    <>
      <div className="container " style={{ marginTop: "130px" }}>
        <div className="row">
          <div className="col-md-12 ">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Container;
