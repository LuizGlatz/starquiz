<template>
  <div class="modal">
    <div class="frame">
      <header>
        <slot name="header"></slot>

        <span class="fas fa-times" @click="close"></span>
      </header>

      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      close () {
        this.$el.classList.remove('show')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .modal {
    background: rgba($black, .3);
    position: fixed;
    height: 100vh;
    width: 100vw;
    left: 0;
    top: 0;
    display: none;
    align-items: center;
    justify-content: center;

    &.show {
      display: flex;
    }

    .score {
      color: darken($white, 15);
      font-weight: bold;
      display: flex;
      align-items: baseline;

      p {
        margin-right: 5px;
        font-size: 60px;
      }
    }

    .frame {
      box-shadow: 0 0 4px 3px rgba(0, 0, 0, .3);
      border: 1px solid darken($white, 7.5);
      background: $white;
      color: $black;
      height: 350px;
      width: 400px;

      header {
        height: 40px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .title {
          margin-left: 20px;
          font-weight: bold;
          font-size: 24px;
        }

        .fas {
          font-size: 20px;
          height: 40px;
          width: 40px;
          display: flex;
          align-items: center;
          justify-content: center;

          &:hover, &:focus {
            color: lighten($black, 5);
            cursor: pointer;
          }
        }
      }

      form {
        height: calc(100% - 40px);
        padding: 20px;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;

        .form-group {
          margin-bottom: 20px;
          width: 100%;
          display: flex;
          flex-direction: column;

          label {
            margin-bottom: 5px;
            font-weight: bold;
            font-size: 14px;
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

            &.error {
              border-color: $red;
            }
          }
        }

        button {
          width: 100px;
          height: 40px;
        }
      }
    }

    &.details {
      .frame {
        padding-bottom: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .inline {
          padding: 0 20px;
          height: 175px;
          display: flex;
          align-items: center;
          justify-content: space-between;

          img {
            margin-right: 20px;
            max-width: 150px;
            height: 160px;
            width: auto;
          }

          .infos {
            height: 100%;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;

            p:not(:last-child) {
              margin-bottom: 10px;
            }
          }
        }

        .movies, .vehicles {
          padding: 0 20px;
        }
      }
    }
  }

  @media (max-width) {
    .frame {
      max-width: 80%;
    }
  }
</style>
