<template>
  <button @click="evt => $emit('click', evt)">
    <slot></slot>
  </button>
</template>

<script></script>

<style lang="scss" scoped>
  button {
    box-shadow: 1px 2px 2px rgba(0, 0, 0, .3);
    border: 2px solid darken($white, 7.5);
    transition: all .175s ease-in-out;
    border-radius: 2px;
    background: $white;
    font-weight: bold;
    padding: 0 10px;
    color: $black;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover, &:focus {
      background: darken($white, 2.5);
      cursor: pointer;
    }

    &.blocked, &.blocked:hover, &.blocked:focus {
      box-shadow: 1px 2px 2px rgba(0, 0, 0, .2);
      border-color: darken($white, 5);
      color: darken($white, 15);
      cursor: not-allowed;
      background: $white;
    }
  }
</style>
