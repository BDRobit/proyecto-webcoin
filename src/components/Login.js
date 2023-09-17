function Login() {
  return (
    <div className="container">
      <div className="Login">
        <form action="http://www.inacap.cl" method="post">
          <div class="form-group"><input className="form-control" name="nombre" placeholder="Ingrese su nombre" type="text" /></div>
          <div class="form-group"><input className="form-control" name="password" placeholder="Ingrese su password" type="password" /></div>
          <div class="form-group"><input className="btn btn-primary" name="ingreso" type="submit" value="Ingresar"/></div>
        </form>      
      </div>
    </div>
  );
}

export default Login;
