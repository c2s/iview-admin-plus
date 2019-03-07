<template>
  <div class="setting">
    <Button type="text" @click="showWindowBDrawer = true">
      <Icon :size="20" type="ios-settings"/>
    </Button>
    <drag-drawer v-model="showWindowBDrawer"
                 :width.sync="width1"
                 :min-width="300"
                 :placement="placementComputed"
                 :draggable="draggable"
                 :scrollable="true">
      <div slot="header">
        <Icon type="md-aperture" :size="18"></Icon>
        <b>主题设置</b>
      </div>
      <Card>
        <p slot="title">整体风格</p>
        <RadioGroup v-model="themeModel" type="button" @on-change="changeTheme">
          <Radio label="亮色"></Radio>
          <Radio label="暗色"></Radio>
        </RadioGroup>
      </Card>
      <Card>
        <p slot="title">主题颜色</p>
        <p>Content of card</p>
        <p>Content of card</p>
        <p>Content of card</p>
      </Card>
      <Card>
        <p slot="title">The standard card</p>
        <p>Content of card</p>
        <p>Content of card</p>
        <p>Content of card</p>
      </Card>
    </drag-drawer>
  </div>
</template>

<script>
import DragDrawer from '_c/drag-drawer'
import { mapActions } from 'vuex'

export default {
  name: 'ThemeSetting',
  components: {
    DragDrawer
  },
  data () {
    return {
      showWindowBDrawer: false,
      showContainerBDrawer: false,
      showBDrawer3: false,
      width1: 300,
      width2: 200,
      placement: false,
      draggable: true
    }
  },
  props: {},
  computed: {
    themeModel: {
      get () {
        const themeName = this.$store.state.app.MainThemeSetting
        return themeName === 'light' ? '亮色' : themeName === 'dark' ? '暗色' : '暗色'
      },
      set () {}
    },
    placementComputed () {
      return this.placement ? 'left' : 'right'
    }
  },
  methods: {
    ...mapActions([
      'theme',
      'themeColor'
    ]),
    changeTheme (val) {
      this.theme(val === '亮色' ? 'light' : val === '暗色' ? 'dark' : 'dark')
      this.themeColor(val === '亮色' ? '#fff' : val === '暗色' ? '#263238' : '#263238')
    },
    handleResize (event) {
      const { atMin } = event
      /* eslint-disable */
        console.log(atMin);
      }
    }
  }
</script>

<style lang="less">
  .setting {
    margin-right: 12px;
    .ivu-badge-dot {
      top: 20px;
    }
    .ivu-btn.ivu-btn-text {
      padding: 5px 1px 6px;
    }
    .drag-drawer-inner-box {
      position: relative;
      width: 500px;
      height: 400px;
      background: pink;
      border: 1px solid pink;
    }
  }
</style>
