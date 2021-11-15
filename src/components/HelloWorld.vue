<template>
  <v-container>
    <v-row class="justify-center">
      <v-col cols="12  pt-10">
        <form fixed>
          <v-text-field
            label="Numero de corredor"
            v-model="buscar"
            required
          ></v-text-field>


          <h3 class="pt-10" v-if="!hasResult">
            {{ msgError }}
          </h3>
        </form>
      </v-col>
      <v-col cols="12" class="d-flex justify-end " >


          <v-btn  v-if="buscar !== ''"  @click="buscar =''" color="red lighten-3">
            Borrar busqueda
          </v-btn>

      </v-col>

      <v-col cols="12">
  <v-simple-table >
    <template v-slot:default>
      <thead>
              <tr>
                <th class="text-center table-corredores pa-0 blue-grey lighten-5">
                  Dorsal
                </th>
                <th class="text-center pa-0 blue-grey lighten-4">
                  Nombre 
                </th>
                <th class="text-center pa-0 blue-grey lighten-5">
                  tiempo
                </th>
                <th class="text-center pa-0 blue-grey lighten-4">
                  Posicion
                  <br>
                  categoria
                </th>
                <th class="text-center pa-0 blue-grey lighten-5">
                  Posicion 
                  <br>
                  General
                  <br>
                  Por sexo
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in resultTimes" v-bind:key="item.number">
                <td class="text-center  pa-0 blue-grey lighten-5">{{ item.id }}</td>
                <td class="text-center   pa-0 blue-grey lighten-4" >{{ item.name }}</td>
                <td class="text-center pa-0 blue-grey lighten-5">{{ item.type }}</td>
                <td class="text-center pa-0 blue-grey lighten-4" width="10px">{{ item.language }}</td>
                <td class="text-center pa-0 blue-grey lighten-5" width="10px">{{ item.runtime }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import { mapActions } from 'vuex';
import datos from "../store/datosEjemplo.json";

export default {
  name: "HelloWorld",
  data: () => ({
    buscar: "",
    hasResult: true,
    times:[]
  }),

  mounted(){
    this.getTimes("");
    console.log(this.resultTimes)

  },


  computed: {
    ...mapState(["resultTimes"]),
  
  },
  methods: {
    ...mapActions(["getTimes"])
  },
  watch:{
    buscar: function(val){
      this.getTimes(val)
      
    }
  }

};
</script>

<style scoped>
.v-data-table{
  background:yellow;
  color:red;
  font-size: 3px;
}
.theme--light.v-data-table .td{
  background:rgb(10, 5, 80);
  color:rgb(47, 177, 134);
  font-size: 3px;
}
</style>