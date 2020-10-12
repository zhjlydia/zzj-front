<!-- @format -->

<template>
  <div>项目</div>
</template>
<script lang="ts">
/** @format */

import {Component, Vue} from 'vue-property-decorator'
import {namespace, State, Action} from 'vuex-class'
import {ActionMethod} from 'vuex'

import {Loading, Catch} from '@/plugins/decorators'
const project = namespace('project')

@Component
export default class Project extends Vue {
  @project.State
  repositories: any

  @project.Action
  fetch: ActionMethod

  async created() {
    await this.fetch()
  }
}
</script>

<style lang="less" scoped></style>
