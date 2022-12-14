<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<b-card>
			<b-form-group label="Nome">
				<b-form-input type="text" size="lg"
				v-model="usuario.nome"
				placeholder="Informe o Nome"
				></b-form-input>
			</b-form-group>
			<b-form-group label="E-mail:">
				<b-form-input type="email" size="lg"
				v-model="usuario.email"
				placeholder="Informe o E-mail"
				></b-form-input>
			</b-form-group>
			<hr>
			<b-button @click="salvar" size="lg" variant="primary">Salvar</b-button>
			<b-button class="ml-2" @click="obterUsuarios" size="lg" variant="success">Obter Usuários</b-button>
		</b-card>
		<b-list-group>
			<b-list-group-item v-for="(usuario, index) in usuarios" :key="index">
				<strong>Nome: </strong> {{ usuario.nome }}<br>
				<strong>E-mail: </strong> {{ usuario.email }}<br>
				<strong>ID: </strong> {{ index }}
			</b-list-group-item>
		</b-list-group>
	</div>
</template>

<script>
export default {
  data() {
    return {
      usuarios: [],
      usuario: {
        nome: "",
        email: "",
      },
    };
  },

  methods: {
    // POST para fazer a inclusão dos dados no FireBase
    salvar() {
      this.$http.post("usuarios.json", this.usuario).then((resp) => {
        this.usuario.nome = "";
        this.usuario.email = "";
      });
    },

    // GET para consultar
    obterUsuarios() {
      this.$http.get("usuarios.json").then((resposta) => {
        this.usuarios = resposta.data;
        // console.log(this.usuarios);
      });
    },
  },

  // 	----- TESTANDO A API -----
  //   created() {
  //     this.$http
  //       .post("usuarios.json", {
  //         nome: "Dimas",
  //         email: "dimas.capelari@gmail.com",
  //       })
  //       .then((resposta) => console.log(resposta));
  //   },
  //
  // ----- TESTE COMO SE FOSSE MAIS UMA API -----
  //   created() {
  //     this.$teste
  //       .post("usuarios.json", {
  //         nome: "Dimas",
  //         email: "dimas.capelari@gmail.com",
  //       })
  //       .then((resposta) => console.log(resposta));
  //   },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 1.5rem;
}

#app h1 {
  text-align: center;
  margin: 50px;
}
</style>
