<template>
  <v-stepper
    v-model="activeStep"
    class="custom-header"
  >
    <!-- Header -->
    <v-stepper-header>
      <!-- Header: Step 1 -->
      <v-stepper-step
        :complete="activeStep > 1"
        step="1"
      >
        <div class="d-flex align-center">
          <!-- <span class="text--primary text-4xl font-weight-bold me-3">01</span> -->
          <div class="d-flex flex-column">
            <span class="text--primary text-xl font-weight-semibold">About You</span>
            <span class="text--secondary text-xs">Setup your account details</span>
          </div>
        </div>
      </v-stepper-step>

      <v-divider></v-divider>

      <!-- Header: Step 2 -->
      <v-stepper-step
        :complete="activeStep > 2"
        step="2"
      >
        <div class="d-flex align-center">
          <!-- <span class="text--primary text-4xl font-weight-bold me-3">02</span> -->
          <div class="d-flex flex-column">
            <span class="text--primary text-xl font-weight-semibold">Select a Card</span>
            <span class="text--secondary text-xs">Any card of your choice</span>
          </div>
        </div>
      </v-stepper-step>

      <v-divider></v-divider>

      <!-- Header: Step 3 -->
      <v-stepper-step
        :complete="activeStep > 3"
        step="3"
      >
        <div class="d-flex align-center">
          <!-- <span class="text--primary text-4xl font-weight-bold me-3">03</span> -->
          <div class="d-flex flex-column">
            <span class="text--primary text-xl font-weight-semibold">More Information</span>
            <span class="text--secondary text-xs">Your personal details</span>
          </div>
        </div>
      </v-stepper-step>

      <v-divider></v-divider>

      <!-- Header: Step 4 -->
      <v-stepper-step
        :complete="activeStep > 4"
        step="4"
      >
        <div class="d-flex align-center">
          <!-- <span class="text--primary text-4xl font-weight-bold me-3">04</span> -->
          <div class="d-flex flex-column">
            <span class="text--primary text-xl font-weight-semibold">Review Details</span>
            <span class="text--secondary text-xs">Your personal details</span>
          </div>
        </div>
      </v-stepper-step>
      <v-divider></v-divider>

      <!-- Header: Step 5 -->
      <v-stepper-step step="5">
        <div class="d-flex align-center">
          <!-- <span class="text--primary text-4xl font-weight-bold me-3">05</span> -->
          <div class="d-flex flex-column">
            <span class="text--primary text-xl font-weight-semibold">E-Sign And Upload</span>
            <span class="text--secondary text-xs">Sign and upload your application</span>
          </div>
        </div>
      </v-stepper-step>
    </v-stepper-header>

    <!-- Stepper Items -->
    <v-stepper-items>
      <!-- Stepper Content: Step 1 -->
      <v-stepper-content step="1">
        <v-card
          class="mb-8"
          color="secondary"
          height="200px"
        ></v-card>

        <div class="d-flex justify-end">
          <v-btn
            color="primary"
            @click="activeStep = 2"
          >
            Save and Continue
          </v-btn>
        </div>
      </v-stepper-content>

      <!-- Stepper Content: Step 2 -->
      <v-stepper-content step="2">
        <v-card
          class="mb-8"
          color="secondary"
          height="200px"
        ></v-card>

        <div class="d-flex justify-end">
          <!-- <v-btn
            outlined
            @click="activeStep = 1"
          >
            Previous
          </v-btn> -->
          <v-btn
            color="primary"
            @click="activeStep = 3"
          >
            Save and Continue
          </v-btn>
        </div>
      </v-stepper-content>

      <!-- Stepper Content: Step 3 -->
      <v-stepper-content step="3">
        <v-card
          class="mb-8"
          color="secondary"
          height="200px"
        ></v-card>

        <div class="d-flex justify-end">
          <!-- <v-btn
            outlined
            @click="activeStep = 1"
          >
            Previous
          </v-btn> -->
          <v-btn
            color="primary"
            @click="activeStep = 4"
          >
            Save and Continue
          </v-btn>
        </div>
      </v-stepper-content>

      <!-- Stepper Content: Step 2 -->
      <v-stepper-content step="4">
        <v-card
          class="mb-8"
          color="secondary"
          height="200px"
        ></v-card>

        <div class="d-flex justify-end">
          <!-- <v-btn
            outlined
            @click="activeStep = 1"
          >
            Previous
          </v-btn> -->
          <v-btn
            color="primary"
            @click="activeStep = 5"
          >
            Save and Continue
          </v-btn>
        </div>
      </v-stepper-content>
      <!-- Stepper Content: Step 3 -->
      <v-stepper-content step="5">
        <v-card
          class="mb-8"
          color="secondary"
          height="200px"
        ></v-card>

        <div class="d-flex justify-center">
          <!-- <v-btn
            outlined
            @click="activeStep = 2"
          >
            Previous
          </v-btn> -->
          <v-btn
            color="primary"
            class="me-2"
          >
            Complete
          </v-btn>
        </div>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
export default {
  data() {
    return {
      activeStep: 1,
    }
  },
}
</script>
