<template>



  <TileMap :numberOfColumns="15" :numberOfRows="15" />

  <!-- Uvědomuji si, že by to mělo být v komponentě, ale pro tenhle projekt jebat -->
  <footer class="footer" style="margin-top:30vh;">
    <div class="footer__addr">
      <h1 class="footer__logo">TUL ALD Project 2022</h1>

      <h2>Contact</h2>

      <address>
        Liberec, Czech Republic<br>

      </address>
    </div>

    <ul class="footer__nav">
      <li class="nav__item">
        <h2 class="nav__title">Members</h2>

        <ul class="nav__ul">
          <li>
            <a href="#">Pavel Vácha</a>
          </li>

          <li>
            <a href="#">Adam Sucharda</a>
          </li>

          <li>
            <a href="#">Petr Boháč</a>
          </li>
          <li>
            <a href="#">Marcel Horváth</a>
          </li>
        </ul>
      </li>

      <li class="nav__item nav__item--extra">
        <h2 class="nav__title">Technology</h2>

        <ul class="nav__ul ">
          <li>
            <a href="#">:)</a>
          </li>

          <li>
            <a href="https://www.fm.tul.cz/">fm.tul.cz</a>
          </li>

          <li>
            <a href="https://vuejs.org">vue.js</a>
          </li>

        </ul>
      </li>

      <li class="nav__item">
        <h2 class="nav__title">Legal</h2>

        <ul class="nav__ul">
          <li>
            <a href="#">To mrdej</a>
          </li>

        </ul>
      </li>
    </ul>

    <div class="legal">
      <p>&copy; 2022 TUL-ALD-GROUP All rights reserved.</p>

      <div class="legal__links">
        <span>Made with <span class="heart">♥</span> remotely from Home</span>
      </div>
    </div>
  </footer>
</template>


<script>
import TileMap from './components/TileMap/TileMap.vue'

export default {
  name: 'App',
  components: {
    TileMap,
  },
  methods: {
    generate: function () {
      this.$root.$emit('TileMap');

    }
  }
}



</script>


