<template>
  <v-container>
    <v-row class="pt-10 d-flex justify-center">
      <v-col class="" cols="12" sm="8">
        <v-file-input accept="image/*" label="File input"></v-file-input>
        <v-text-field label="Another input"></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" class="d-flex justify-center">
        <v-btn color="green">
          Cargar datos
        </v-btn>
      </v-col>
      <v-col cols="12" sm="6" class="d-flex justify-center">

      <div class="text-center">
        <v-dialog v-model="dialog" width="500">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="red" dark v-bind="attrs" v-on="on">
              Terminar carrera
            </v-btn>
          </template>
          <v-card>
            <v-card-title class="text-h5 grey lighten-2">
              ¿ Seguro quieres terminar la carrera?
            </v-card-title>
            <v-card-text>
              Eliminara el archivo guardado en la base de datos con todos los
              resultados, puede volver a cargar el archivo.
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="dialog = false">
                ok
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="dialog = false">
                VOLVER
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "About",
  data: () => ({
    dialog: false
  })
};
</script>
