import { apiReq } from '@/api.services'

export default {
    state: {
        todos: [],
    },
    actions: {
        async getTodos(ctx) {
            await apiReq.get('/todos')
                .then(res => {
                    const todos = res.data
                    ctx.commit('updateTodos', todos)
                })
                .catch(err => this.err = err)
        },
        async addTodo(ctx, todo) {
            await apiReq.post('/todos/add', todo)
                .then(res => {
                    console.log(res)
                    ctx.commit('addTodo', todo)
                })
                .catch(err => console.log(err))
        },
        async deleteTodo(ctx, id) {
            await apiReq.post('/todos/delete', { id })
                .then(res => {
                    console.log(res)
                })
                .catch(err => console.log(err))
        },
        async completedTodo(ctx, isCompleted) {
            await apiReq.post('/todos/completed', isCompleted)
        }
    },
    mutations: {
        updateTodos(state, todos) {
            state.todos = todos
        },
        addTodo(state, todo) {
            state.todos.push(todo)
        },
        completed(state, isCompleted) {
            state.todos.forEach(todo => {
                if (todo._id === isCompleted.id) {
                    todo.completed = isCompleted.completed
                }
            })
        }
    },
    getters: {
        allTodos(state) {
            return state.todos
        },
        todosCount(state) {
            return state.todos.length
        },
        getTodo: state => id => {
            state.todos.forEach(todo => {
                if (todo._id === id) {
                    return todo
                }
            })
        }
    }
}