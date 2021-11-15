<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
         <router-link to="/" class="" color="white">
        <v-btn>
          <v-icon >
            mdi-camera-timer
          </v-icon>
        </v-btn>
         </router-link>
      </div>

      <v-spacer></v-spacer>


        <span class="mr-2">Carrera Cerro Colorado </span>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  })
};
</script>
