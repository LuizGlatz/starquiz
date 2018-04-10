<template>
  <main>
    <div class="inline">
      <div class="game">
        <Logo></Logo>
        <h1>StarQuiz</h1>
      </div>

      <Contador v-if="$store.state.loaded" @finished="showModal"></Contador>
    </div>

    <router-view :chars="currentChars"></router-view>

    <div class="loading" v-if="!$store.state.loaded">
      <span class="fas fa-spinner fa-spin"></span>
      <p>
        CARREGANDO...
      </p>
    </div>

    <div class="pagination">
      <a :class="{ disabled: (page === 1) }" @click="previous">
        <span class="fas fa-angle-double-left"></span>
        Anterior
      </a>
      <a :class="{ disabled: (page === 9) }" @click="next">
        Próximo
        <span class="fas fa-angle-double-right"></span>
      </a>
    </div>

    <Modal id="ranking">
      <p slot="header" class="title">Quiz finalizado</p>

      <form @submit.prevent="saveUser">
        <div class="score">
          <p>{{this.user.score}}</p>
          Pontos
        </div>

        <div class="form-group">
          <label for="name">Nome</label>
          <input type="text" id="name" v-model="user.name">
        </div>
        <div class="form-group">
          <label for="email">E-mail</label>
          <input type="email" id="email" v-model="user.email">
        </div>

        <Botao>Salvar</Botao>
      </form>
    </Modal>
  </main>
</template>

<script>
  import Personagem from '@/components/Personagem'
  import Contador from '@/components/Contador'
  import Modal from '@/components/Modal'
  import Botao from '@/components/Botao'
  import Logo from '@/components/Logo'

  export default {
    data () {
      return {
        user: {
          score: 0,
          email: '',
          name: ''
        },
        page: 1
      }
    },
    computed: {
      currentChars () {
        if((this.page - 1) * 10 < this.$store.state.characters.length - 10) {
          return this.$store.state.characters.slice((this.page - 1) * 10, this.page * 10)
        } else {
          return this.$store.state.characters.slice((this.page - 1) * 10)
        }
      }
    },
    methods: {
      previous () {
        this.page--

        this.$router.push('/jogando/' + this.page)
      },
      next () {
        this.page++

        this.$router.push('/jogando/' + this.page)
      },
      showModal () {
        this.verifyAnswers()

        this.$store.commit('finished')

        this.$el.querySelector('.modal#ranking').classList.add('show')
      },
      verifyAnswers () {
        const chars = this.$store.state.characters

        chars.forEach(char => {
          if (char.name === char.answer) {
            this.user.score += char.score
          }
        })
      },
      saveUser () {
        if (this.user.name !== '') {
          const users = JSON.parse(localStorage.getItem('players')) || []

          users.push(this.user)

          users.sort((a, b) => {
            if (a.score > b.score) {
              return -1
            }

            if (a.score < b.score) {
              return 1
            }

            return 0
          })

          localStorage.setItem('players', JSON.stringify(users))

          this.$router.push('/classificacao')
        } else {
          this.$el.querySelector('.modal#ranking #name').classList.add('error')
        }
      }
    },
    components: {
      Personagem,
      Contador,
      Modal,
      Botao,
      Logo
    },
    beforeMount () {
      this.$router.push('/jogando/' + this.page)
    }
  }
</script>

<style lang="scss" scoped>
  main {
    padding: 10px 20px 0 20px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .loading {
      background: rgba($black, .75);
      position: fixed;
      color: $white;
      height: 100vh;
      width: 100vw;
      left: 0;
      top: 0;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;

      .fas {
        margin-bottom: 10px;
        font-size: 80px;
      }
    }

    .inline {
      width: 100%;
      display: flex;
      .game {
        display: flex;
        align-items: center;

        #Logo {
          width: 80px;
        }

        h1 {
          font-size: 50px;
        }
      }
    }

    .pagination {
      width: 100%;
      display: flex;
      justify-content: center;

      a {
        transition: all .2s ease-in-out;
        font-weight: bold;
        padding: 0 10px;
        font-size: 14px;
        height: 35px;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover, &:focus {
          cursor: pointer;
        }

        &.disabled {
          pointer-events: none;
        }

        &:first-child {
          color: $yellow;

          &:hover, &:focus {
            color: darken($yellow, 5);
          }

          &.disabled {
            color: lighten($yellow, 10);
          }
        }

        &:last-child {
          color: $blue;

          &:hover, &:focus {
            color: darken($blue, 5);
          }

          &.disabled {
            color: lighten($blue, 10);
          }
        }
      }
    }
  }

  @media (max-width: 460px) {
    main {
      .inline {
        .game {
          #Logo {
            height: 70px;
            width: auto;
          }

          h1 {
            font-size: 38px;
          }
        }
      }
    }
  }
</style>
