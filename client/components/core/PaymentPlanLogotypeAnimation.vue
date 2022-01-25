<template>
  <div class="logotype-wrapper" v-bind:style="wrapperStyle">
    <lottie-animation
      :animationData="animation"
      :loop="true"
      ref="anim"
    />
  </div>
</template>

<script>
  import yodaPlan from '@/assets/animation/yoda-plan.json';
  import jediPlan from '@/assets/animation/jedi-plan.json';
  import padawanPlan from '@/assets/animation/padawan-plan.json';

  export default {
    name: 'PaymentPlanLogotypeAnimation',
    props: {
      animType: {
        type: String,
        enum: ['yoda', 'jedi', 'padawan'],
        required: true
      },
      width: {
        type: Number,
        required: true
      },
      height: {
        type: Number,
        required: true
      }
    },
    computed: {
      animation() {
        const anims = {
          yoda: yodaPlan,
          jedi: jediPlan,
          padawan: padawanPlan
        };

        return anims[this.animType];
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
