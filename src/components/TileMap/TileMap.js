
import { Grid } from './Grid';

export default {
    name: 'TileMap',
    props: {
        numberOfColumns: Number,
        numberOfRows: Number
    },

    data() {
        return {
            grid: new Grid(this.numberOfRows, this.numberOfColumns),
        };
    },

    // Sticky navbar
    mounted() {
        window.onscroll = function () { myFunction() };

        var navbar = document.getElementById("navbar");
        var sticky = navbar.offsetTop;

        function myFunction() {
            if (window.pageYOffset >= sticky) {
                navbar.classList.add("sticky")
            } else {
                navbar.classList.remove("sticky");
            }
        }
    },

    methods: {
        start: async function () {
            this.grid = new Grid(this.numberOfRows, this.numberOfColumns)

            while (!this.grid.isFull()) {
                const position = this.grid.getNeighbor();
                const tile = this.grid.getTile(position);

                this.grid.setTile(position, tile);
                this.grid.addAllAdjacent(position);

                await new Promise(resolve => setTimeout(resolve, 1));
            }
        },

    },


}