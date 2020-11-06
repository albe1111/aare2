<template>
  <div id="app">
<h1>Aare App</h1>
<HelloWorld :datum="datum" />
    <div class="termocontainer">


      <figure class="image" id="containertermo">
        <svg id="term" viewBox="0 0 75 250">
          <rect  x="18.7" :y="155-4.5*temp" rx="5" ry="5" width="13" :height="220- (155 - 4.5 *temp)"
                :style="colorterm" />
          <circle cx="25.2" cy="227.5" r="16" :style="colorterm" />
          <path d="M 15 210
            A 20 20 0 1 0  35 210
            L 35 20
            A 5 5 0 1 0  15 20
            L 15 210
            "/>
          <path d="M14 226 A 8 8 0 0 1 20 218"/>
          <line x1="40" y1="20" x2="47" y2="20"/>
          <text x="55" y="25" class="small">30</text>

          <line x1="40" y1="24.5" x2="40" y2="24.5"/>
          <line x1="40" y1="29" x2="40" y2="29"/>
          <line x1="40" y1="33.5" x2="40" y2="33.5"/>
          <line x1="40" y1="38" x2="40" y2="38"/>

          <line x1="40" y1="42.5" x2="43" y2="42.5"/>

          <line x1="40" y1="47" x2="40" y2="47"/>
          <line x1="40" y1="51.5" x2="40" y2="51.5"/>
          <line x1="40" y1="56" x2="40" y2="56"/>
          <line x1="40" y1="60.5" x2="40" y2="60.5"/>

          <line x1="40" y1="65" x2="47" y2="65"/>
          <text x="55" y="70" class="small">20</text>

          <line x1="40" y1="69.5" x2="40" y2="69.5"/>
          <line x1="40" y1="74" x2="40" y2="74"/>
          <line x1="40" y1="78.5" x2="40" y2="78.5"/>
          <line x1="40" y1="83" x2="40" y2="83"/>

          <line x1="40" y1="87.5" x2="43" y2="87.5"/>

          <line x1="40" y1="92" x2="40" y2="92"/>
          <line x1="40" y1="96.5" x2="40" y2="96.5"/>
          <line x1="40" y1="101" x2="40" y2="101"/>
          <line x1="40" y1="105.5" x2="40" y2="105.5"/>

          <line x1="40" y1="110" x2="47" y2="110"/>
          <text x="55" y="115" class="small">10</text>

          <line x1="40" y1="114.5" x2="40" y2="114.5"/>
          <line x1="40" y1="119" x2="40" y2="119"/>
          <line x1="40" y1="123.5" x2="40" y2="123.5"/>
          <line x1="40" y1="128" x2="40" y2="128"/>

          <line x1="40" y1="132.5" x2="43" y2="132.5"/>

          <line x1="40" y1="137" x2="40" y2="137"/>
          <line x1="40" y1="141.5" x2="40" y2="141.5"/>
          <line x1="40" y1="146" x2="40" y2="146"/>
          <line x1="40" y1="150.5" x2="40" y2="150.5"/>

          <line x1="40" y1="155" x2="47" y2="155"/>
          <text x="62.3" y="160" class="small">0</text>

          <line x1="40" y1="159.5" x2="40" y2="159.5"/>
          <line x1="40" y1="164" x2="40" y2="164"/>
          <line x1="40" y1="168.5" x2="40" y2="168.5"/>
          <line x1="40" y1="173" x2="40" y2="173"/>

          <line x1="40" y1="177.5" x2="43" y2="177.5"/>

          <line x1="40" y1="182" x2="40" y2="182"/>
          <line x1="40" y1="186.5" x2="40" y2="186.5"/>
          <line x1="40" y1="191" x2="40" y2="191"/>
          <line x1="40" y1="195.5" x2="40" y2="195.5"/>

          <line x1="40" y1="200" x2="47" y2="200"/>
          <text x="50.9" y="205" class="small">-10</text>

        </svg>
      </figure>
    <HelloWorld class="temp" :temp='temp'/>
    </div>




  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    HelloWorld
  },

  data: function () {
    return {
        test: 16,
        temp: 10,
        colorterm: '',
        datum: ''
    }
  },
  mounted () {
          axios
              .get('https://www.wiewarm.ch:443/api/v1/temperature.json/17')
              .then((response) => {
                  this.temp = parseFloat(response.data['52']['temp'])
                  this.datum = (new Date(Date.parse(response.data['52']['date']))).toLocaleDateString('de-CH',{ day: '2-digit', month: '2-digit',year: 'numeric', hour: '2-digit', minute: '2-digit'  })
                  if (this.temp <=14 ) {
                    this.colorterm = "fill:#00FFF7;stroke:none;"
                  }
                  else {
                    this.colorterm = "fill:#FFB600;stroke:none;"
                  }
              })
      }
}
</script>

<style>
#app {

  margin: 50px;
  max-width: 1000px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
.termocontainer{

 display: flex;
  justify-content: center;

}
.temp{
  align-self: flex-end;
  padding-bottom: 5px;
}

#term {height: 45vh; fill: none; stroke: black; stroke-width: 3.8; stroke-linejoin: round; stroke-linecap: round;}
.small { font: bold 13px sans-serif; fill: black; stroke: none }
</style>
