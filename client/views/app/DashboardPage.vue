<template>
  <div>
    <v-checkbox
      v-for="(item, i) in discussionTopics8" :key="item.id"
      v-model="discussionTopics8[i].selected"
      :true-value="true"
      :false-value="false"
      :input-value="item.title"
      :value="item.selected"
      :label="item.title"
    >

    </v-checkbox>
  </div>
</template>

<script>
export default {
  name: 'DashboardPage',
  data() {
    return {
      discussionTopics8: [
        {
          title: "Недостаток мотивации",
          selected: true,
          id: 45,
        },
        {
          title: '"Не знаю, чем хочу заниматься"',
          selected: false,
          id: 46,
        },
        {
          title: "Недостаток мотивации",
          selected: true,
          id: 47,
        },
        {
          title: '"Не знаю, чем хочу заниматься"',
          selected: false,
          id: 48,
        },
        {
          title: "Недостаток мотивации",
          selected: true,
          id: 49,
        },
        {
          title: '"Не знаю, чем хочу заниматься"',
          selected: false,
          id: 50,
        },
        {
          title: "Недостаток мотивации",
          selected: true,
          id: 51,
        },
        {
          title: '"Не знаю, чем хочу заниматься"',
          selected: false,
          id: 52,
        }
      ]
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
