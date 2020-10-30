<template>
  <div class="home">
    <div class="container">
      <router-link to="/todos">
        <button type="button" class="btn btn-dark">Go todos</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {

  }
}
</script>

<style lang="sass" scoped>
.btn
  margin-top: 10rem
  font-size: 4rem
  border-radius: 15px
  padding: 1rem 2rem
</style>
