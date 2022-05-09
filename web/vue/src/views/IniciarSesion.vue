<template>
  <div class="container">
    <form>
      <div class="col-md-12 text-center">
        <h2>Inicia sesión</h2>
      </div>
      <div class="form-group col-6">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
        <small id="emailHelp" class="form-text text-muted"
          >We'll never share your email with anyone else.</small
        >
      </div>
      <div class="form-group col-6">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
      <div class="col-md-12 text-center">
        <h4>¿No tienes usuario?</h4>
        <p>
          <a href="#" @click="crearCuenta" class="link_crear_cuenta">
            Crea tu cuenta
          </a>
        </p>
      </div>
    </form>
  </div>
</template>