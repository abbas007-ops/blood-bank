const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("logged in ...");
    let user = { name: "John Doe", role: "user" };
    localStorage.setItem("authUser", JSON.stringify(user));
    window.location.href = "/home";
  };
  
  return (
    <div className="row">
      <div className="col-md-3"></div>
      <div className="col-md-6">
        <div className="bg-secondary mb-3" style={{ padding: "30px" }}>
          <h3 className="mb-4">Login</h3>
          <form>
            <div className="form-group">
              <label for="name">Email</label>
              <input
                type="text"
                name="user"
                required
                className="form-control border-0"
              />
            </div>

            <div className="form-group">
              <label for="email">Password</label>
              <input
                type="password"
                name="passwd"
                required
                className="form-control border-0"
              />
            </div>

            <button
              className="btn btn-outline-primary"
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
