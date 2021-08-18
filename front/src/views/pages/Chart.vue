<template>
  <v-container fluid class="down-top-padding">
    <v-row>
      <v-col cols="12" lg="8">
        <v-card>
          <v-card-text class="pa-5">
            <div class="d-sm-flex align-center">
              <div>
                <h3
                  class="title blue-grey--text text--darken-2 font-weight-regular"
                >
                  Sales Overview
                </h3>
                <h6 class="subtitle-2 font-weight-light">
                  Ample Admin Vs Pixel Admin
                </h6>
              </div>
              <div class="ml-auto">
                <div class="d-flex align-center">
                  <div class="d-flex align-center px-2">
                    <span class="success--text">
                      <span class="overline">
                        <i class="mdi mdi-brightness-1 mr-2"></i>
                      </span>
                      <span class="font-weight-regular">Ample</span>
                    </span>
                  </div>
                  <div class="d-flex align-center px-2">
                    <span class="info--text">
                      <span class="overline">
                        <i class="mdi mdi-brightness-1 mr-2"></i>
                      </span>
                      <span class="font-weight-regular">Pixel</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-9">
              <v-sparkline
                type="bar"
                :fill="fill2"
                height="80px"
                :gradient="gradient2"
                :line-width="width2"
                :padding="padding2"
                :smooth="radius2 || false"
                :value="value2"
                auto-draw
              ></v-sparkline>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" lg="4">
        <v-card>
          <v-card-text class="pa-5">
            <h3
              class="title blue-grey--text text--darken-2 font-weight-regular"
            >
              Our Visitors
            </h3>
            <h6 class="subtitle-2 font-weight-light">
              Different Devices Used to Visit
            </h6>
            <div class="pb-6">
              <v-sparkline
                :fill="fill"
                height="145px"
                :gradient="gradient"
                :line-width="width"
                :padding="padding"
                :smooth="radius || false"
                :value="value"
                auto-draw
              ></v-sparkline>
            </div>
            <div
              class="d-flex align-center justify-center border-top pt-4 pb-2"
            >
              <div class="d-flex align-center px-3">
                <span class="info--text">
                  <span class="overline">
                    <i class="mdi mdi-brightness-1 mr-2"></i>
                  </span>
                  <span class="font-weight-regular">Mobile</span>
                </span>
              </div>
              <div class="d-flex align-center px-3">
                <span class="deep-purple--text text--lighten-1">
                  <span class="overline">
                    <i class="mdi mdi-brightness-1 mr-2"></i>
                  </span>
                  <span class="font-weight-regular">Desktop</span>
                </span>
              </div>
              <div class="d-flex align-center px-3">
                <span class="success--text">
                  <span class="overline">
                    <i class="mdi mdi-brightness-1 mr-2"></i>
                  </span>
                  <span class="font-weight-regular">Tablet</span>
                </span>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    
    </v-row>
  </v-container>
</template>

<script>
const gradients = [
  ["#6c757d"],
  ["#6c757d"],
  ["#6c757d", "#6c757d", "#6c757d"],
  ["#21c1d6", "21c1d6"],
  ["#21c1d6", "#21c1d6", "#21c1d6"],
  ["#21c1d6", "#21c1d6", "#21c1d6"],
];

const gradients2 = [
  ["#1e88e5"],
  ["#1e88e5"],
  ["#1e88e5", "#1e88e5", "#1e88e5"],
  ["#1e88e5", "#1e88e5"],
  ["#1e88e5", "#1e88e5", "#1e88e5"],
  ["#1e88e5", "#1e88e5", "#1e88e5"],
];

export default {
  name: "BasicDashboard",
  data: () => ({
    fill: true,
    gradient: gradients[4],
    gradients,
    padding: 8,
    radius: 50,
    value: [0, 2, 5, 9, 5, 10, 3, 5, 1, 8, 2, 9, 0],
    width: 1,

    fill2: true,
    gradient2: gradients2[4],
    gradients2,
    radius2: 0,
    padding2: 0,
    value2: [1, 2, 5, 9, 5, 10, 3, 5, 1, 8, 2, 9, 4],
    width2: 4,
    tasks: [
      {
        done: false,
        text: "Check emails of Mr.Shah",
      },
      {
        done: false,
        text: "Give salary to employee",
      },
    ],
    task: null,
    selected: [2],
    items: [
      {
        action: "15 min",
        headline: "Brunch this weekend?",
        title: "Ali Connors",
        subtitle:
          "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
      },
      {
        action: "2 hr",
        headline: "Summer BBQ",
        title: "me, Scrott, Jennifer",
        subtitle: "Wish I could come, but I'm out of town this weekend.",
      },
      {
        action: "6 hr",
        headline: "Oui oui",
        title: "Sandra Adams",
        subtitle: "Do you have Paris recommendations? Have you ever been?",
      },
      {
        action: "12 hr",
        headline: "Birthday gift",
        title: "Trevor Hansen",
        subtitle:
          "Have any ideas about what we should get Heidi for her birthday?",
      },
      {
        action: "18hr",
        headline: "Recipe to try",
        title: "Britta Holt",
        subtitle:
          "We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
      },
    ],
  }),
  computed: {
    completedTasks() {
      return this.tasks.filter((task) => task.done).length;
    },
    progress() {
      return (this.completedTasks / this.tasks.length) * 100;
    },
    remainingTasks() {
      return this.tasks.length - this.completedTasks;
    },
  },

  methods: {
    create() {
      this.tasks.push({
        done: false,
        text: this.task,
      });

      this.task = null;
    },
  },
};
</script>
