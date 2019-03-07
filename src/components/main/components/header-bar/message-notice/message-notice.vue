<template>
  <div class="custom-message-notice">
    <Badge :count="countComputed">
      <Button type="text" name="message" @click="messageNotice">
        <Icon :size="20" type="ios-notifications-outline"/>
      </Button>
    </Badge>
  </div>
</template>

<script>
import './message-notice.less'
export default {
  name: 'MessageNotice',
  props: {
    count: {
      type: Number,
      default: 0
    },
    hasRead: {
      type: Boolean,
      default: false
    },
    messageUnreadCount: {
      type: Number,
      default: 0
    }
  },
  computed: {
    countComputed () {
      return this.hasRead ? 0 : this.messageUnreadCount
    }
  },
  methods: {
    messageNotice () {
      this.$router.push({
        name: 'message_page'
      })
    }
  }
}
</script>
