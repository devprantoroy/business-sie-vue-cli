<template>
  <!-- loader  -->
  <LoaderView/>
  <!-- end loader -->
  <!-- header -->
   <HeaderView/>
  <!-- end header inner -->
  <!-- end header -->
    <router-view></router-view>
  <!--  footer -->
    <FooterView></FooterView>
  <!-- end footer -->
</template>

<script>
import HeaderView from '@/components/frontend/Header.vue';
import FooterView from '@/components/frontend/Footer.vue';
import LoaderView from '@/components/frontend/PreLoader.vue';
export default {
  name: "Master",
  components :{
    HeaderView,
    FooterView,
    LoaderView
  }
}
</script>

<style scoped>

</style>