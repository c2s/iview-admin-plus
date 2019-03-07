<template>
  <div class="custom-bread-crumb">
    <Breadcrumb :style="{fontSize: `${fontSize}px`}">
      <BreadcrumbItem v-for="item in list" :to="item.to" :key="`bread-crumb-${item.name}`">
        {{ showTitle(item) }}
      </BreadcrumbItem>
    </Breadcrumb>
  </div>
</template>
<script>
import { showTitle } from '@/libs/util'
import './custom-bread-crumb.less'
export default {
  name: 'customBreadCrumb',
  props: {
    list: {
      type: Array,
      default: () => []
    },
    fontSize: {
      type: Number,
      default: 12
    }
  },
  methods: {
    showTitle (item) {
      return showTitle(item, this)
    }
  }
}
</script>
