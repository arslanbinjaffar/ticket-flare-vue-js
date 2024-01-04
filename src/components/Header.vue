<template>
  <nav>
   <div class="nav_left">
    <img src="/logo.svg" alt="logo">
    <div class="">
      <p class="m-0 d-flex gap-2">
        <img src="/map-pinned.svg" alt="">
      venues
      </p>
      <p class="m-0 m-0 d-flex gap-2">
        <img src="/list-minus.svg" alt="list">
        Categories
      <img src="/chevron-down.svg" alt="dropdown icon">
      </p>
      <p class="m-0 m-0 d-flex gap-2">
        <img src="/grip-vertical.svg" alt="">
        More
      <img src="/chevron-down.svg" alt="dropdown icon">

      </p>
      
    </div>
   </div>
   <div class="nav_right">
    <p class="d-flex gap-2">
      <img src="/fingerprint.svg" alt="icon">
      login
    </p>
    <p class="d-flex gap-2">
      <img src="/user-2.svg" alt="icon">
      Register
    </p>
     <button>
      <img src="/calendar-days.svg" alt="icon">
      Browse Events
    </button>
    </div>
  </nav>
</template>

<script>
import Button from './Button'

export default {
  name: 'Header',
  props: {
    title: String,
    showAddTask: Boolean,
  },
  components: {
    Button,
  },
  computed: {
    homePage() {
      if (this.$route.path === '/') {
        return true
      } else {
        return false
      }
    },
  },
}
</script>


<style scoped>
nav {
  padding:16px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid  #EDECF0;
  background:  #FFf;
}
.nav_left{
  display: flex;
  align-items: center;
  gap: 80px;
}
.nav_left div{
  display: flex ;
  gap: 40px;
  align-items: center;
}
.nav_right{
  display: flex;
  align-items: center;
  gap: 30px;
}
p{
  margin: 0;
color: #39364F;
font-family: Outfit;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
button{
padding: 12px 20px;
display: flex;
align-items: center;
gap: 8px;
border-radius: 8px;
background: var(--Primary, #2176FF);
border: none;
outline: none;
color: var(--White, #FFF);
font-family: Outfit;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
</style>
