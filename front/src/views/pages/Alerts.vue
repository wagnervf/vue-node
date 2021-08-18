<template>
  <v-container fluid class="down-top-padding">
    <v-row>
      <v-col cols="12" sm="12" lg="12">
        <BaseCard heading="Alert - Text">
          <AlertText></AlertText>
        </BaseCard>
      </v-col>

      <v-col cols="12" sm="12" lg="12">
        <BaseCard heading="Alert - Coloured Border">
          <AlertColorBorder></AlertColorBorder>
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "Alerts",

  data: () => ({
  }),
  components: {
      AlertText: () => import('@/components/vuetifyComponents/alerts/AlertText'),
      AlertColorBorder: () => import('@/components/vuetifyComponents/alerts/AlertColorBorder')
  }

};
</script>
