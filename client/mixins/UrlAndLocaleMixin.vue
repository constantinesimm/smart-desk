<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'UrlAndLocaleMixin',
    computed: {
      ...mapGetters({
        currentLocale: 'app/getSelectedLocale'
      }),
      appUrls() {
        const baseUrl = process.env.VUE_APP_URL;

        return {
          loginPage: `${ baseUrl }/auth/login?lang=${ this.currentLocale }`,
          registerPage: `${ baseUrl }/auth/register?lang=${ this.currentLocale }`
        }
      },
    }
  }
</script>
