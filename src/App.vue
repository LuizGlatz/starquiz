<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    mounted () {
      const getChars = new Promise((resolve, reject) => {
        const url = this.$store.state.api + 'people/?page='
        const promises = []

        for(let i = 1; i < 10; i++) {
          promises.push(this.$http.get(url + i))
        }

        Promise.all(promises)
          .then(resolves => {
            const chars = []

            resolves.forEach(res => {
              chars.push(...res.body.results)
            })

            resolve(chars)
          })
          .catch(err => {
            reject(err)
          })
      })

      const getSpecies = new Promise((resolve, reject) => {
        const url = this.$store.state.api + 'species/?page='
        const promises = []

        for(let i = 1; i < 5; i++) {
          promises.push(this.$http.get(url + i))
        }

        Promise.all(promises)
          .then(resolves => {
            const species = []

            resolves.forEach(res => {
              species.push(...res.body.results)
            })

            resolve(species)
          })
          .catch(err => {
            reject(err)
          })
      })

      const getPlanets = new Promise((resolve, reject) => {
        const url = this.$store.state.api + 'planets/?page='
        const promises = []

        for(let i = 1; i < 8; i++) {
          promises.push(this.$http.get(url + i))
        }

        Promise.all(promises)
          .then(resolves => {
            const planets = []

            resolves.forEach(res => {
              planets.push(...res.body.results)
            })

            resolve(planets)
          })
          .catch(err => {
            reject(err)
          })
      })

      const getMovies = new Promise((resolve, reject) => {
        const url = this.$store.state.api + 'films/?page='
        const promises = []

        for(let i = 1; i < 2; i++) {
          promises.push(this.$http.get(url + i))
        }

        Promise.all(promises)
          .then(resolves => {
            const films = []

            resolves.forEach(res => {
              films.push(...res.body.results)
            })

            resolve(films)
          })
          .catch(err => {
            reject(err)
          })
      })

      Promise.all([getChars, getSpecies, getPlanets, getMovies])
        .then(res => {
          const chars = res[0]
          const species = res[1]
          const planets = res[2]
          const movies = res[3]

          chars.forEach(char => {
            char.answer = ''
            char.score = 10

            char.species = char.species.map(specieUrl =>
              species.find(specie => specie.url === specieUrl).name
            )

            char.homeworld = planets.find(planet => planet.url === char.homeworld).name

            char.films = char.films.map(filmUrl =>
              movies.find(movie => movie.url === filmUrl).title
            )
          })

          this.$store.commit('setCharacters', chars.sort(() => {
            return Math.round(Math.random())
          }))
          this.$store.commit('setLoaded')
        })
    }
  }
</script>

<style lang="scss">
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  #app {
    font-family: arial, sans-serif;
    background: $black;
    font-size: 16px;
    max-width: 100%;
    color: $white;
  }
</style>
