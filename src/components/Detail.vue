<template>
  <div class="detail-box">
    <div class="detail">
      <img :src="detail.album_500_500">
      <div>
        <h4>歌名：{{ detail.album_title }}</h4>
        <p>歌手：{{ detail.artist_name }}</p>
        <p>国家：{{ detail.country }}</p>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
   name:'Detail',
   data(){
     return{
       detail:''
     }
   },
   created(){
     this.detai()
    },
   methods:{
     detai(){
       let newId = this.$route.query.id
       let url = 'http://api.apiopen.top/musicRankingsDetails?type=1$newId'
       let _this = this
       axios.get(url,{
          query:{
            id:newId
          }
       }).then(res =>{
         console.log(res.data.result)
         let a = res.data.result
        for(var i = 0;i<a.length;i++){
          let b = res.data.result[i].album_id
          if(newId == b){
            _this.detail = res.data.result[i]
          }
        }
       }).catch(e => alert(e))
       
     }
   }
  }
</script>
<style scoped>
  .detail-box{
    margin-top: 4rem;
  }
  .detail{
    width:100%;
  }
  .detail img{
    width:100%
  }
  .detail>div{
    width:95%;
    margin: 0 auto;
  }
  .detail h4{
    font-size: 1rem;
    line-height: 1.5rem;
  }
  .detail p{
    line-height: 1.5rem;
    font-family: cursive;
    font-size: .8rem;
    color:#333;
  }
</style>


