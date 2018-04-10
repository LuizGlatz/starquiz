<template>
  <div class="characters">
    <Personagem v-for="char in chars" :key="char.id" :char="char"></Personagem>
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
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    .char {
      margin: 10px;
    }
  }
</style>
