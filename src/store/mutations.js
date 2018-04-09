export default {
  setLoaded (state) {
    state.loaded = true
  },
  setCharacters (state, chars) {
    state.characters = chars
  },
  editCharacter (state, newChar) {
    const index = state.characters.findIndex(char => char.name === newChar.name)

    state.characters[index] = newChar
  },
  finished (state) {
    state.finished = true
  }
}
