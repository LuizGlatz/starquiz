<template>
  <main>
    <section>
      <Logo></Logo>

      <h1>StarQuiz</h1>

      <Botao @click="$router.push('/jogando/1')">Jogar</Botao>
    </section>

    <section>
      <h2>StarQuiz</h2>
      <p>
        O <b>StarQuiz</b> é um jogo para fãs da saga de Star wars. Com este jogo, você desafiará seus conhecimentos sobre
        os personagens deste universo. Mostre que você é um grande fã.
      </p>

      <h3>Desafio</h3>
      <p>Você tem <b>dois minutos</b> para acertar o maior número de personagens possíveis.</p>
      <p></p>
    </section>
  </main>
</template>

<script>
  import Logo from '@/components/Logo'
  import Botao from '@/components/Botao'

  export default {
    components: {
      Logo,
      Botao
    }
  }
</script>

<style lang="scss" scoped>
  main {
    section {
      text-align: justify;
      padding: 20px 10%;
      height: 100vh;
      width: 100vw;
      display: flex;
      align-items: center;
      flex-direction: column;

      > * {
        margin-bottom: 20px;
      }

      &:first-child {
        box-shadow: 0 4px 3px rgba(0, 0, 0, .25);
        align-items: center;
        justify-content: center;
      }

      h1 {
        font-size: 50px;
        color: $yellow;
      }

      h2 {
        font-size: 32px;
        color: $yellow;
      }

      h3 {
        font-size: 26px;
        color: $yellow;
      }

      p {
        width: 100%;
      }

      b {
        font-size: 1.2em;
      }

      button {
        font-size: 18px;
        color: $black;
        width: 100px;
      }

      #Logo {
        width: 200px;
      }
    }
  }
</style>
