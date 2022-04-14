const App = {
  data() {
    return { todos: [] };
  },

  mounted() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((todos) => (this.todos = this.prepareTodos(todos)))
      .catch((err) => console.log(err));
  },

  methods: {
    prepareTodos(todos) {
      return todos.map((todo) => ({
        ...todo,
        isDescription: this.isDescription(),
      }));
    },

    isDescription() {
      return Math.random() > 0.75;
    },

    getDate() {
      return new Date().getFullYear();
    },
  },
};

Vue.createApp(App).mount("#app");
