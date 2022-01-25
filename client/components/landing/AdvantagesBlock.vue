<template>
  <div class="block-wrapper">
    <v-container>
      <v-row>
        <v-col cols="5">
          <!--
          <logotype-animation :height="500" :width="500" />
          -->
        </v-col>
        <v-col cols="7">
          <v-card elevation="0"  style="background: rgb(242, 242, 242);">
            <h2 class="pt-15">
              {{ $vuetify.lang.t('$vuetify.landing.advantagesBlock.title') }}
            </h2>
            <div class="pt-5 pb-5">
              {{ $vuetify.lang.t('$vuetify.landing.advantagesBlock.subtitle') }}
            </div>

            <div class="messengers-icons-container" style="margin-top: 50px">
              <v-card elevation="4" class="d-flex justify-space-around">
                <div class="messegers-icon telegram-icon">
                  <i class="fab fa-telegram fa-3x"></i>

                  <div class="text"> Telegram </div>
                </div>

                <div class="messegers-icon viber-icon">
                  <i class="fab fa-viber fa-3x"></i>

                  <div class="text"> Viber </div>
                </div>

                <div class="messegers-icon fb-messenger-icon">
                  <i class="fab fa-facebook-messenger fa-3x"></i>

                  <div class="text"> FB Messenger </div>
                </div>
              </v-card>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  import IconsMixin from '@/mixins/IconsMixin';
  const LogotypeAnimation = () => import('@/components/core/LogotypeAnimation');

  export default {
    name: 'AdvantagesBlock',
    mixins: [IconsMixin],
    components: {
      LogotypeAnimation
    }
  }
</script>

<style lang="scss" scoped>
  .block-wrapper {
    background: rgb(242, 242, 242);
  }

  .messengers-icons-container {
    .messegers-icon {
      display: flex;
      flex-direction: row;
      justify-content: center;
      background: #ffffff;
      padding: 5px 0;

      &.telegram-icon, &.viber-icon, &.fb-messenger-icon {
        .text {
          display: flex;
          align-items: center;
          margin-left: 10px;
          font-size: 18px;
        }
      }

      &.telegram-icon {
        i {
          color: #377fea;
        }

        .text {
          color: #377fea;
        }
      }

      &.viber-icon {
        i {
          color: #665CAC;
        }

        .text {
          color: #665CAC;
        }
      }

      &.fb-messenger-icon {
        i {
          color: #00c6ff;
        }

        .text {
          color: #00c6ff;
        }
      }

      &:hover {
        cursor: pointer;

        &.telegram-icon-btn {
          background: #377fea5c;
        }
      }
    }
  }
</style>
