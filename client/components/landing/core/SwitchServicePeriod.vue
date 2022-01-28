<template>
  <v-row justify="center">
    <v-col cols="12" md="5" class="d-flex justify-space-around align-center">
      <v-btn text plain color="primary" @click="handleSelectServicePeriod(30)">
        <v-scroll-x-transition class="mr-2">
          <i class="fas fa-check fa-lg" :style="{'visibility': selectedPeriod === 30 ? 'visible' : 'hidden' }"></i>
        </v-scroll-x-transition>

        <div class="ml-2">
          {{ $vuetify.lang.t('$vuetify.landing.pricingBlock.paymentPeriodMonth') }}
        </div>
      </v-btn>

      <v-scroll-x-transition>
        <div :class="`label--dense switch-period ${ transformSwitch }--value`">
          <div class="label--selection-controls__input">
            <div :class="`label--selection-controls__ripple ${ transformSwitch }--value`"></div>
            <div :class="`switch-period__track  ${ transformSwitch }--value`"></div>
            <div :class="`switch-period__thumb  ${ transformSwitch }--value`"></div>
          </div>
        </div>
      </v-scroll-x-transition>

      <v-btn text plain color="success" @click="handleSelectServicePeriod(365)">
        <v-expand-x-transition>
          <i class="fas fa-check fa-lg" :style="{'visibility': selectedPeriod === 365 ? 'visible' : 'hidden' }"></i>
        </v-expand-x-transition>

        <div class="ml-2">
          {{ $vuetify.lang.t('$vuetify.landing.pricingBlock.paymentPeriodYear') }}
        </div>
      </v-btn>
    </v-col>
    <v-col cols="12" v-if="selectedPeriod === 365" class="d-flex justify-center">
      <v-alert
        dense
        text
        color="success"
        width="50%"
      >
        {{$vuetify.lang.t('$vuetify.landing.pricingBlock.discountBadge')}}
      </v-alert>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    name: 'SwitchServicePeriod',
    data() {
      return {
        selectedPeriod: 365
      }
    },
    computed: {
      transformSwitch() {
        const options = {
          30: 'primary',
          365: 'success'
        };

        return options[this.selectedPeriod];
      }
    },
    methods: {
      handleSelectServicePeriod(period) {
        this.selectedPeriod = period;

        this.$emit('select-service-period', period)
      }
    },
    mounted() {
      this.handleSelectServicePeriod(this.selectedPeriod)
    }
  }
</script>

<style lang="scss" scoped>
  .success--value {
    color: #56ca00;
  }
  .primary--value {
    color: #377fea;
  }

  .switch-period {
    margin-top: 5px;
    margin-left: 10px;
    margin-right: 10px;

    &__track {
      background-color: currentColor;
      pointer-events: none;
      transition: inherit;
      border-radius: 8px;
      width: 36px;
      height: 14px;
      left: 2px;
      position: absolute;
      opacity: 0.6;
      right: 2px;
      top: calc(50% - 6px);
    }

    &__thumb {
      background-color: currentColor;
      pointer-events: none;
      transition: inherit;
      border-radius: 50%;
      top: calc(50% - 10px);
      height: 20px;
      position: relative;
      width: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
    }

    &.label--dense {
      .switch-period__thumb {
        width: 18px;
        height: 18px;
      }

      .switch-period__track {
        height: 12px;
        width: 40px;
      }

      .label--selection-controls__ripple {
        top: calc(50% - 22px);
      }
    }

    &.success--value {
      .label--selection-controls__ripple {
        transform: translate(20px, 0);
      }
      .switch-period__thumb {
        transform: translate(26px, 0);
      }
    }

    &.primary--value {
      .label--selection-controls__ripple {
        transform: translate(0, 0);
      }
      .switch-period__thumb {
        transform: translate(0, 0);
      }
    }

    .label--selection-controls {
      &__input {
        width: 38px;
        color: inherit;
        display: inline-flex;
        flex: 0 0 auto;
        position: relative;
        transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
        transition-property: transform;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      &__ripple {
        top: calc(50% - 24px);
      }
    }

    .label--selection-controls__ripple {
      left: -14px;
    }
  }

</style>
