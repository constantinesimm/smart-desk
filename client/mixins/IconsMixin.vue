<script>
import {
  mdiAlert,
  mdiFacebook,
  mdiGoogle,
  mdiEyeOutline,
  mdiEyeOffOutline,
  mdiAccountOutline,
  mdiEmailOutline,
  mdiLockOutline,
  mdiCheckOutline,
  mdiMinusCircleOutline,
  mdiCheckboxMarkedCircleOutline
} from '@mdi/js'

  export default {
    name: 'IconsMixin',
    data() {
      return {
        icons: {
          mdiAlert,
          mdiFacebook,
          mdiGoogle,
          mdiEyeOutline,
          mdiEyeOffOutline,
          mdiAccountOutline,
          mdiEmailOutline,
          mdiLockOutline,
          mdiCheckOutline,
          mdiMinusCircleOutline,
          mdiCheckboxMarkedCircleOutline
        },
        socialLink: [
          {
            icon: mdiFacebook,
            color: '#4267b2',
            colorInDark: '#4267b2',
          },
          {
            icon: mdiGoogle,
            color: '#db4437',
            colorInDark: '#db4437',
          },
        ],
      }
    }
  }
</script>
