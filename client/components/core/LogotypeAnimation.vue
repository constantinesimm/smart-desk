<template>
  <div class="logotype-wrapper" v-bind:style="wrapperStyle">
    <lottie-animation
      :animationData="robotAnimation"
      :loop="true"
      ref="anim"
    />
  </div>
</template>

<script>
  import robotAnimation from '@/assets/animation/robot.json';

  export default {
    name: 'LogotypeAnimation',
    props: {
      width: {
        type: Number,
        required: true
      },
      height: {
        type: Number,
        required: true
      }
    },
    data() {
      return {
      }
    },
    computed: {
      robotAnimation() {
        return robotAnimation;
      },
      wrapperStyle() {
        return {
          width: `${ this.width }px`,
          height: `${ this.height }px`
        }
      }
    }
  }
</script>
