<template>
  <!-- style="background-color:#f4f5fa" -->
  <!-- <app-card>

    <app-card-header>
      Lets get Started!
    </app-card-header>
    <app-card-body>
      <div>
        <stepper-custom-header></stepper-custom-header>
        <stepper-transparent-header></stepper-transparent-header>
      </div>
    </app-card-body>
  </app-card> -->
  <!-- <div>
    <v-row>

    </v-row>
  </div> -->
  <div>
    <v-card>
      <v-img src="@/assets/images/pages/header-card-banner-main-en.png"></v-img>
      <v-card-title>Apply online for a Card </v-card-title>
      <v-card-text>
        Welcome to the world of American Express. Apply online for a Card most suitable to your needs by completing the 5 easy steps. The entire process takes less than 10 minutes.*
      </v-card-text>
      <v-divider></v-divider>
      <v-card-text class="position-relative">
        <div class="d-flex justify-space-between flex-wrap pt-0">
          <v-card-subtitle class="text-xs pa-0">
            If you are an existing American Express Saudi Arabia Card member
          </v-card-subtitle>
          <v-btn color="primary">
            click here
          </v-btn>
        </div>
      </v-card-text>
    </v-card>
    <br />
    <v-card>
      <v-card-title>Lets get Started!</v-card-title>
      <v-card-text>
        <div>
          <stepper-custom-header></stepper-custom-header>
        </div>
      </v-card-text>
    </v-card>
  </div>

  <!--  -->
</template>
<script>
import StepperCustomHeader from './StepperCustomHeader.vue'
import StepperTransparentHeader from './StepperTransparentHeader.vue'

export default {
  components: {
    StepperCustomHeader,
    StepperTransparentHeader,
  },
}
</script>
<style lang="scss" scoped>
.plan-banner {
  background-color: rgba(145, 85, 253, 0.12);
  padding: 0.563rem 0.688rem;
  border-radius: 4px;
  margin: 0.875rem 0 1.125rem 0;

  .banner-avatar {
    border: solid 1px var(--v-primary-base);
    border-radius: 4px;
  }
  sup {
    h1 {
      margin-top: 0.5rem;
    }
  }
}
</style>
