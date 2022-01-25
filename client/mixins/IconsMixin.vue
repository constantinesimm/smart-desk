<script>
  import ukFlagIcon from '@/assets/images/flags/uk.png';
  import enFlagIcon from '@/assets/images/flags/en.png';
  import ruFlagIcon from '@/assets/images/flags/ru.png';

  import descriptionChatbot from '@/assets/images/landing/description-chatbot.jpeg';
  import automationIcon from '@/assets/images/landing/icons/automation.png';
  import communicationIcon from '@/assets/images/landing/icons/communication.png'
  import efficiencyIcon from '@/assets/images/landing/icons/efficiency.jpg'
  import marketingIcon from '@/assets/images/landing/icons/marketing.png'
  import salesIcon from '@/assets/images/landing/icons/sales.png'
  import supportIcon from '@/assets/images/landing/icons/support.png'

  import {
    mdiAlert,
    mdiCloseThick,
    mdiFacebook,
    mdiGoogle,
    mdiEyeOutline,
    mdiEyeOffOutline,
    mdiAccountOutline,
    mdiEmailOutline,
    mdiLockOutline,
    mdiCheckOutline,
    mdiMinusCircleOutline,
    mdiLoginVariant,
    mdiAccountPlus,
    mdiHeadSnowflakeOutline,
    mdiCheckboxMarkedCircleOutline
  } from '@mdi/js'

  export default {
    name: 'IconsMixin',
    data() {
      return {
        icons: {
          mdiAlert,
          mdiCloseThick,
          mdiFacebook,
          mdiGoogle,
          mdiEyeOutline,
          mdiEyeOffOutline,
          mdiAccountOutline,
          mdiEmailOutline,
          mdiLockOutline,
          mdiCheckOutline,
          mdiLoginVariant,
          mdiAccountPlus,
          mdiMinusCircleOutline,
          mdiHeadSnowflakeOutline,
          mdiCheckboxMarkedCircleOutline
        },
        flags: {
          enFlagIcon,
          ukFlagIcon,
          ruFlagIcon
        },
        landing: {
          descriptionChatbot,
          icons: {
            communicationIcon,
            efficiencyIcon,
            marketingIcon,
            salesIcon,
            supportIcon,
            automationIcon
          }
        }
      }
    }
  }
</script>
