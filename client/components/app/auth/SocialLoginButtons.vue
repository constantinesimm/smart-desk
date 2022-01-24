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
      this.loadFacebookSDK();
    },
    methods: {
      handleFacebookLogin() {
        console.log('handleFacebookLogin click')
        window.FB.login((response) => {
          console.log('facebook login response', response)

          this.$store
            .dispatch('user/socialLoginFacebook', {
              facebookAccessToken: response.authResponse.accessToken,
              facebookUserId: response.authResponse.userID
            })
            .then(response => {
              this.$showSuccess(response);

              this.$router.push({ name: 'DashboardPage' });
            })
            .catch(error => this.$showError(error));
        }, { scope: 'public_profile,email' });
      },
      async handleGoogleLogin() {
        console.log('handleGoogleLogin click')

        try {
          const googleUser = await this.$gAuth.signIn();
          const googleIdToken = googleUser.getAuthResponse().id_token;

          this.$store
            .dispatch('user/socialLoginGoogle', { googleIdToken })
            .then(response => {
              this.$showSuccess(response);

              this.$router.push({ name: 'DashboardPage' });
            })
            .catch(error => this.$showError(error));

        } catch (error) {
          console.log('error', error)
        }
      },
      loadFacebookSDK() {
        const scriptElem = document.createElement('script');

        scriptElem.innerHTML = `window.fbAsyncInit = function() {
            FB.init({
                appId      : ${ process.env.VUE_APP_FACEBOOK_APP_ID },
                cookie     : true,
                xfbml      : true,
                version    : 'v12.0'
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
