<template>
  <!-- Uvědomuji si, že by to mělo být v komponentě, ale pro tenhle projekt jebat -->
  <div id="navbar">
    <div class="navbar-logo">
      <a href="#">ALD Project 2022</a>
    </div>
    <div>
      <a class="generate-button" href="javascript:void(0)" @click="start()"> Generate</a>
    </div>

  </div>
  <!-- 
    Pokusy s canvasem
    <div style="width:100%;height:100%">
        <canvas width="1200" height="1200" id="canvas"></canvas>
        :style="{'width':numberOfRows+1, 'height':numberOfColumns+1}"
    </div> -->
  <div class="grid-wrapper">
    <div class="grid">
      <div class="grid-row" v-for="row in grid.grid" v-bind:key="row">
        <div class="grid-item" v-for="item in row" v-bind:key="item">
          <template v-if="item >= 0">
            <img :src="'./tiles/' + item + '.png'" alt="">
          </template>
          <template v-else-if="item == -2">
            <img :src="'./tiles/' + item + '.png'" alt="">
          </template>
        </div>
      </div>
    </div>
  </div>

</template>

<script type="module" src="./TileMap.js"/>

