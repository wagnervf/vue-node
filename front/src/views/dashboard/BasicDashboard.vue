<template>
  <v-container fluid class="down-top-padding">
    <v-row>
      <v-col cols="12" lg="12">
        <v-card class="mb-7">
          <v-card-text class="pa-5">
            <h3
              class="title blue-grey--text text--darken-2 font-weight-regular mb-4"
            >
              Task
            </h3>
            <v-text-field
              v-model="task"
              label="What are you working on?"
              filled
              @keydown.enter="create"
            >
              <v-fade-transition v-slot:append>
                <v-icon v-if="task" @click="create">add_circle</v-icon>
              </v-fade-transition>
            </v-text-field>

            <h2 class="font-weight-medium success--text text-center">
              Tasks:&nbsp;
              <v-fade-transition leave-absolute>
                <span :key="`tasks-${tasks.length}`">{{ tasks.length }}</span>
              </v-fade-transition>
            </h2>

            <v-divider class="mt-4"></v-divider>

            <v-row class="my-1" align="center">
              <span class="mx-4 info--text"
                >Remaining: {{ remainingTasks }}</span
              >

              <v-divider vertical></v-divider>

              <span class="mx-4 success--text"
                >Completed: {{ completedTasks }}</span
              >

              <v-spacer></v-spacer>

              <v-progress-circular
                :value="progress"
                class="mr-2"
              ></v-progress-circular>
            </v-row>

            <v-divider class="mb-4"></v-divider>

            <v-card v-if="tasks.length > 0">
              <v-slide-y-transition class="py-0" group>
                <template v-for="(task, i) in tasks">
                  <v-divider v-if="i !== 0" :key="`${i}-divider`"></v-divider>

                  <v-list-item :key="`${i}-${task.text}`">
                    <v-list-item-action>
                      <v-checkbox
                        v-model="task.done"
                        :color="(task.done && 'grey') || 'primary'"
                      >
                        <template v-slot:label>
                          <div
                            :class="
                              (task.done && 'grey--text') ||
                                'blue-grey--text text--darken-2'
                            "
                            class="ml-4 text-truncate"
                            v-text="task.text"
                          ></div>
                        </template>
                      </v-checkbox>
                    </v-list-item-action>

                    <v-spacer></v-spacer>

                    <v-scroll-x-transition>
                      <v-icon v-if="task.done" color="success"
                        >mdi-check</v-icon
                      >
                    </v-scroll-x-transition>
                  </v-list-item>
                </template>
              </v-slide-y-transition>
            </v-card>
          </v-card-text>
        </v-card>
        <v-card>
          <v-card-text>
            <h3
              class="title blue-grey--text text--darken-2 font-weight-regular"
            >
              Inbox
            </h3>
            <v-list two-line>
              <v-list-item-group
                v-model="selected"
                multiple
                active-class="info--text"
              >
                <template v-for="(item, index) in items">
                  <v-list-item :key="item.title">
                    <template v-slot:default="{ active }">
                      <v-list-item-content>
                        <v-list-item-title
                          v-text="item.title"
                        ></v-list-item-title>
                        <v-list-item-subtitle
                          class="text--primary"
                          v-text="item.headline"
                        ></v-list-item-subtitle>
                        <v-list-item-subtitle
                          v-text="item.subtitle"
                        ></v-list-item-subtitle>
                      </v-list-item-content>

                      <v-list-item-action>
                        <v-list-item-action-text
                          v-text="item.action"
                        ></v-list-item-action-text>
                        <v-icon v-if="!active" color="grey lighten-1"
                          >mdi-star-outline</v-icon
                        >

                        <v-icon v-else color="yellow">mdi-star</v-icon>
                      </v-list-item-action>
                    </template>
                  </v-list-item>

                  <v-divider
                    v-if="index + 1 < items.length"
                    :key="index"
                  ></v-divider>
                </template>
              </v-list-item-group>
            </v-list>
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
