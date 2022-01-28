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
import appLogoBot from '@/assets/animation/app-logo-bot.json';
import padawanCustomer from '@/assets/animation/padawan-customer.json';
import jediCustomer from '@/assets/animation/jedi-customer.json';
import masterCustomer from '@/assets/animation/master-customer.json';

  export default {
    name: 'AnimatedLogotypes',
    props: {
      animationFile: {
        type: String,
        required: true
      },
      width: {
        type: Number|String,
        required: true
      },
      height: {
        type: Number|String,
        required: true
      }
    },
    computed: {
      animation() {
        const anims = {
          appLogo: appLogoBot,
          master: masterCustomer,
          jedi: jediCustomer,
          padawan: padawanCustomer
        };

        return anims[this.animationFile];
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
