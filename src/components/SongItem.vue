<template>
  <div>
    <van-cell :title="name" :label="author + '-' + name" :key="id" center>
      <template #right-icon>
        <van-icon name="play-circle-o" size="0.7rem" @click="playFn" />
      </template>
    </van-cell>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    author: String,
    id: Number,
  },
  methods: {
    playFn() {
      this.$router.push({
        path: "/play",
        query: {
          id: this.id,
        },
      });
    },
  },
};
</script>

<style scoped>
.van-cell {
  border-bottom: 1px solid lightgray;
}
</style>