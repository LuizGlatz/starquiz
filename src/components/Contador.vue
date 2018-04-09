<template>
  <div :class="{counter: true, warning: (this.timer <= this.warning && this.timer > this.danger), danger: this.timer <= this.danger}">
    <span class="far fa-clock"></span>

    {{ this.tempo }}
  </div>
</template>

<script>
  export default {
    data () {
      return {
        timer: 120,
        danger: 10,
        warning: 60,
        interval: null
      }
    },
    methods: {
      counterDown () {
        if (this.timer === 0) {
          clearInterval(this.interval)

          this.$emit('finished')
        } else {
          this.timer--
        }
      }
    },
    computed: {
      tempo () {
        let minute = Math.floor(this.timer / 60)

        let second = this.timer - minute * 60

        if (second.toString().length === 1) {
          second = '0' + second
        }

        return minute + ':' + second
      }
    },
    mounted () {
      this.interval = setInterval(this.counterDown, 1000)
    }
  }
</script>

<style lang="scss" scoped>
  .counter {
    transition: all 1s ease-in-out;
    position: absolute;
    font-weight: bold;
    font-size: 20px;
    right: 20px;
    top: 20px;
    display: flex;
    align-items: center;

    &.warning {
      color: $yellow;
    }

    &.danger {
      color: $red;
    }

    .fa-clock {
      margin-right: 5px;
      font-size: 24px;
    }
  }
</style>
