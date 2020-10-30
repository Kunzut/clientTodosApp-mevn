<template>
  <div>
    <form class="form-add" @submit.prevent="addTodo(todo)">
      <div class="form-group">
        <label for="exampleFormControlInput1">Todo</label>
        <input class="form-control" id="exampleFormControlInput1" v-model="todo.title">
      </div>
      <div class="form-group">
        <label for="exampleFormControlSelect1">Select category</label>
        <select class="form-control" id="exampleFormControlSelect1" v-model="todo.category">
          <option value="Home">Home</option>
          <option value="Work">Work</option>
        </select>
      </div>
      <button type="submit" class="btn btn-success">Add todo</button>
    </form>
    <hr />
  </div>
</template>

<script>
import { mapActions } from 'vuex'


export default {
  name: 'AddTodo',
  data() {
    return {
      todo: {
        title: '',
        category: '',
        completed: false
      }
    }
  },
  methods: mapActions(['addTodo'])
}
</script>

<style lang="sass" scoped>
.form-group
  width: 600px
hr
  width: 100%
  background-color: rgba(#000, .4)
  margin-bottom: 3rem

</style>