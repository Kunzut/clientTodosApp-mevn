<template>
  <div>
    <div class="card" @submit.prevent="completedTodo(isCompleted)">
      <div class="card-body">
        <form @submit="completedTodo">
          <h5 class="card-title">{{ title }}</h5>
          <p class="card-text">{{ category }}</p>
          <input type="hidden" :value="{ _id }" name="id">
          <div class="card-buttons">
            <div class="btn-group-toggle" data-toggle="buttons">
              <label class="btn btn-outline-success" :class="{active : completed}">
                <input type="checkbox" value="false" name="completed" v-model="isCompleted.completed"> Complete
              </label>
            </div>
            <button type="button" class="btn btn-outline-danger" @click.prevent="deleteTodo(_id)">Delete</button>
          </div>
          <button class="btn btn-light btn-save " type="submit">Save</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {
      isCompleted: {
        id: this._id,
        completed: false
      }
    }
  },
  props: {
    _id: {
      type: String,
    },
    title: {
      type: String,
      default: ''
    },
    category: {
      type: String,
      default: 'default-cat'
    },
    completed: {
      type: Boolean,
      default: false
    },
  },
  computed: mapGetters(['getTodo', 'allTodos']),
  methods: mapActions(['deleteTodo', 'completedTodo'])
}
</script>

<style lang="sass" scoped>
.card
  width: 600px
  border-width: 2px
  border-color: rgba(#000, .4)
  margin-bottom: .5rem
  &-title
    text-align: center
    margin: 0
  &-text
    text-align: end
    margin: .3rem 0
  &-buttons
    display: flex
    justify-content: space-between
.btn
  margin-bottom: .3rem
  &-save
    width: 100%

</style>