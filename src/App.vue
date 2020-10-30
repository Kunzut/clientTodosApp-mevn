<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;400;700&display=swap')

body
  font-family: 'Nunito', sans-serif
  font-weight: 400
  color: #000
.container
  width: 600px
  padding: 3rem 1rem 0 1rem
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
</style>
