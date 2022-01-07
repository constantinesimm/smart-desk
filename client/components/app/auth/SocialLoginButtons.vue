<template>
  <v-card-actions class="d-flex justify-center">
    <v-btn
      v-for="link in socialLink"
      :key="link.icon"
      icon
      x-large
      class="ms-1"
      @click="link.method"
    >
      <v-icon :color="$vuetify.theme.dark ? link.colorInDark : link.color" x-large>
        {{ link.icon }}
      </v-icon>
    </v-btn>
  </v-card-actions>
</template>

<script>
  import IconsMixin from '@/mixins/IconsMixin';

  export default {
    name: 'SocialLoginButtons',
    mixins: [IconsMixin],
    data() {
      return {}
    },
    computed: {
      socialLink() {
        return [
          {
            icon: this.icons.mdiFacebook,
            color: '#4267b2',
            colorInDark: '#4267b2',
            method: this.handleFacebookLogin
          },
          {
            icon: this.icons.mdiGoogle,
            color: '#db4437',
            colorInDark: '#db4437',
            method: this.handleGoogleLogin
          },
        ]
      }
    },
    mounted() {
      console.log(process.env)
      this.loadFacebookSDK();
    },
    methods: {
      handleFacebookLogin() {
        console.log('handleFacebookLogin click')
        window.FB.login(function(response) {
          this.$store
            .dispatch('user/socialLoginFacebook', {
              accessToken: response.authResponse.accessToken,
              facebookUserId: response.authResponse.userID
            })
            .then(response => {
              this.$showSuccess(response);

              this.$router.push({ name: 'DashboardPage' });
            })
            .catch(error => this.$showError(error));
        });
      },
      handleGoogleLogin() {
        console.log('handleGoogleLogin click')
      },
      loadFacebookSDK() {
        const scriptElem = document.createElement('script');

        scriptElem.innerHTML = `window.fbAsyncInit = function() {
            FB.init({
                appId      : ${ process.env.VUE_APP_FACEBOOK_APP_ID },
                cookie     : true,
                xfbml      : true,
                version    : 'v13.0'
            });

            FB.AppEvents.logPageView();

        };

        (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
       `
        document.body.appendChild(scriptElem);
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>
