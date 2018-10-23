<template>
  <div class="show_box">
    <div class="show"></div>
  </div>
</template>

<script>
  export default {
   name:'Show',
   mounted(){
     this.toNewPage()
   },
   methods:{
     toNewPage(){
       setTimeout(() => {
         this.$router.push({
           path:'/home/rank'
         })
      },3000)
     }
   }
  }
</script>

<style scoped>
  .show_box{
    width:100%;
    height: 100%;
  }
  .show{
    width:100%;
    height: 100%;
    background: url(../assets/img/1.jpg) no-repeat;
    background-size: cover;
  }
</style>
