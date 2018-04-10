<template>
  <div class="char">
    <img :src="'/static/imgs/chars/' + char.name + '.png'" alt="Imagem do personagem">

    <div class="inline">
      <Botao @click="showForm" id="answer" :class="{blocked: ($store.state.finished || char.answer !== '')}">
        <span class="fas fa-question"></span>
      </Botao>

      <Botao @click="showDetails" id="details" :class="{blocked: $store.state.finished}">
        <span class="fas fa-ellipsis-h"></span>
      </Botao>
    </div>

    <form @submit.prevent="addAnswer">
      <input type="text" v-model="answer" @change="addAnswer">
    </form>

    <Modal class="details">
      <p slot="header" class="title">Details</p>

      <div class="inline">
        <img :src="'/static/imgs/chars/' + char.name + '.png'" alt="Imagem do personagem">

        <div class="infos">
          <p>Specie: {{ char.species.join(', ') }}</p>

          <p>Height: {{ char.height }}</p>

          <p>Mass: {{ char.mass }}</p>

          <p>Hair: {{ char.hair_color }}</p>

          <p>Planet: {{ char.homeworld }}</p>
        </div>
      </div>

      <p class="movies">
        Movies: {{ char.films.join(', ') }}
      </p>
    </Modal>
  </div>
</template>

<script>
  import Modal from '@/components/Modal'
  import Botao from '@/components/Botao'
  import Logo from '@/components/Logo'

  export default {
    data () {
      return {
        answer: this.char.answer
      }
    },
    props: {
      char: {
        type: Object,
        required: true
      }
    },
    components: {
      Modal,
      Botao,
      Logo
    },
    methods: {
      showForm () {
        if (!this.$el.querySelector('button#answer').classList.contains('blocked')) {
          const activeds = document.querySelectorAll('form.show')
          const form = this.$el.querySelector('form')

          activeds.forEach(actived => {
            if(actived !== form)
              actived.classList.remove('show')
          })

          if (!form.classList.contains('show')) {
            form.classList.add('show')

            form.querySelector('input').focus()
          } else {
            form.classList.remove('show')
          }
        }
      },
      showDetails () {
        if (!this.$el.querySelector('button#details').classList.contains('blocked')) {
          const newChar = this.char
          newChar.score = 5

          this.$store.commit('editCharacter', newChar)

          this.$el.querySelector('.modal').classList.add('show')
        }
      },
      addAnswer () {
        const newChar = this.char
        newChar.answer = this.answer

        this.$store.commit('editCharacter', newChar)
        this.$el.querySelector('form').classList.remove('show')

        this.answer = ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  .char {
    box-shadow: 1px 2px 2px rgba(0, 0, 0, .5);
    border-radius: 2px;
    background: $white;
    padding: 10px;
    height: 225px;
    width: 150px;
    color: $blue;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;

    img {
      max-width: 100%;
      height: 160px;
      width: auto;
    }

    button {
      height: 34px;
    }

    form {
      box-shadow: 1px 2px 2px rgba(0, 0, 0, .3);
      background: darken($white, 2.5);
      position: absolute;
      margin-top: 200px;
      padding: 10px;
      width: 150px;
      display: none;
      align-items: center;
      justify-content: center;

      &.show {
        display: flex;
      }

      &:before {
        border-bottom: 10px solid darken($white, 2.5);
        border-right: 10px solid transparent;
        border-left: 10px solid transparent;
        position: absolute;
        content: '';
        left: 30px;
        top: -10px;
      }

      input {
        border: 2px solid darken($white, 7.5);
        transition: all .175s ease-in-out;
        background: $white;
        border-radius: 2px;
        padding: 0 10px;
        height: 35px;
        width: 100%;

        &:focus {
          border-color: darken($white, 12.5);
        }
      }
    }

    .inline {
      width: 100%;
      display: flex;
      justify-content: space-between;

      button {
        border-width: 1px;
        max-width: 100px;

        &:first-child {
          margin-right: 20px;
          width: 40px;
        }

        &:not(:first-child) {
          flex: 1;
        }
      }
    }
  }
</style>
