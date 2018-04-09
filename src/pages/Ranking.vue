<template>
  <main>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>E-mail</th>
          <th>Pontos</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(player, index) in players" v-if="players.length > 0">
          <td>{{ index + 1 }}</td>
          <td>{{ player.name }}</td>
          <td>{{ player.email }}</td>
          <td>{{ player.score }}</td>
        </tr>
        <tr v-if="players.length === 0">
          <td colspan="4">
            Nenhum registro
          </td>
        </tr>
      </tbody>
    </table>

    <Botao @click="reload">Jogar Novamente</Botao>
  </main>
</template>

<script>
  import Botao from '@/components/Botao'

  export default {
    data () {
      return {
        players: JSON.parse(localStorage.getItem('players')) || []
      }
    },
    components: {
      Botao
    },
    methods: {
      reload () {
        window.location = window.location.origin + '/jogando/1'
      }
    }
  }
</script>

<style lang="scss" scoped>
  main {
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    table {
      box-shadow: 2px 4px 2px rgba(0, 0, 0, .3);
      border: 2px solid darken($yellow, 12.5);
      border-collapse: collapse;
      margin-bottom: 20px;
      background: $white;
      max-width: 75%;
      color: $black;
      width: 450px;

      thead {
        border-bottom: 1px solid darken($yellow, 12.5);

        tr {
          th {
            background: lighten($yellow, 5);
            color: $black;
            height: 40px;

            &:not(:last-child) {
              border-right: 1px solid darken($yellow, 12.5);
            }
          }
        }
      }

      tbody {
        tr {
          td {
            height: 34px;

            &:first-child {
              text-align: center;
            }
          }

          &:not(:last-child) {
            border-bottom: 1px solid darken($white, 5);
          }
        }
      }

      th, td {
        padding: 0 10px;
      }
    }
  }
</style>
