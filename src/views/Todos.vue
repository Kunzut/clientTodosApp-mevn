<template>
  <div class="container">
    <add-todo />
    <todo
      v-for="todo in allTodos"
      :title="todo.title"
      :category="todo.category"
      :completed="todo.completed"
      :_id="todo._id"
    />
  </div>
</template>

<script>
import AddTodo from '@/components/AddTodo'
import Todo from '@/components/Todo'
import { apiReq } from '@/api.services'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Todos',
  data() {
    return {
      err: null
    }
  },
  computed: mapGetters(['allTodos']),
  mounted() {
    this.getTodos()
  },
  updated() {
    this.getTodos()
  },
  components: {
    AddTodo, Todo
  },
  methods: mapActions(['getTodos'])
}
</script>

<style lang="sass" scoped>

</style>