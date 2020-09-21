<!-- @format -->

<template>
  <div>仓库</div>
</template>
<script lang="ts">
/** @format */

import {Component, Vue} from 'vue-property-decorator'
import {namespace, State, Action} from 'vuex-class'
import {ActionMethod} from 'vuex'

import {Loading, Catch} from '@/plugins/decorators'
const repository = namespace('repository')

@Component
export default class Repository extends Vue {
  @repository.State
  repositories: any

  @repository.Action
  fetch: ActionMethod

  async created() {
    await this.fetch()
  }
}
</script>

<style lang="less" scoped></style>
