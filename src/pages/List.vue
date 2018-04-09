<template>
  <div class="characters">
    <div class="inline">
      <Personagem v-for="char in chars.slice(0, 5)" :key="char.id" :char="char"></Personagem>
    </div>

    <div class="inline">
      <Personagem v-for="char in chars.slice(5)" :key="char.id" :char="char"></Personagem>
    </div>
  </div>
</template>

<script>
  import Personagem from '@/components/Personagem'

  export default {
    components: {
      Personagem
    },
    props: {
      chars: {
        typer: Array,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .characters {
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    .inline {
      display: flex;
      justify-content: space-between;

      &:not(:last-child) {
        margin-bottom: 20px;
      }
    }

    .char:not(:last-child) {
      margin-right: 20px;
    }
  }
</style>
