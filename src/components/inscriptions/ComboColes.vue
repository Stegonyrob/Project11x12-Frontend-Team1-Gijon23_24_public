<script setup>

import axios from 'axios';
import { ref } from 'vue';


const allSchools = ref([]);
const fetchColes = ref(null);

const fetchSchools = async () => {
    // const response = await axios.get("http://localhost:8080/api/v1/schools");
    const response = await axios.get("VITE_API_ENDPOINT_SCHOOLS");
    allSchools.value = response.data;
    console.log(response.data);
}

fetchSchools();

</script>
<template>
    <div class="combColes">
    <!-- <label for="coles" id="coles">Selecciona colegio</label> -->
    <select v-model="fetchColes" id="comboColes">
      <option value="null">Seleccione colegios</option>
      <option v-for="school in allSchools" v-bind:value="school.school_name" :key="school.id_schools" selected>
        {{ school.school_name }}
      </option>
    </select>
  </div>
</template>

<style scoped lang="scss">
@import '../../assets/scss/variables.scss';

</style>