<template>
  <div id="app">
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
    <div class="container">
      <h2 class="text-center">Рассчет стоимости онлайн</h2>
      <div class="row first_config">
        <div class="col-md-3">
          <button
            type="button"
            class="btn btn-outline-warning btn-lg w-100"
            :class="{
              active_button: lvl.level === level_type,
            }"
            v-for="lvl in levels"
            :key="lvl.level"
            @click="setLevel(lvl.level)"
          >
            {{ lvl.name }}
          </button>
        </div>
        <div class="col-md-4">
          <div class="image_container">
            <template v-if="okna_number === 0">
              <img src="https://i.ibb.co/chY6KY3/okno-1.png" alt="" />
            </template>
            <template v-if="okna_number === 1">
              <img src="https://i.ibb.co/YjB5r8N/okno-2.png" alt="" />
            </template>
            <template v-if="okna_number === 2">
              <img src="https://i.ibb.co/6HgQqnc/okno-3.png" alt="" />
            </template>
            <template v-if="okna_number === 3">
              <img src="https://i.ibb.co/PGRR8Kw/balkon.png" alt="" />
            </template>
          </div>
        </div>
        <div class="col-md-5 d-flex">
          <div class="okna_container">
            <div class="okna_col" v-for="(okno_configs, i) in okna" :key="i">
              <div class="okno_f" @click="setOknaNumber(i)">
                <img
                  :src="
                    'https://raw.githubusercontent.com/vitram/vue-okna-calc/master/src/assets/svg/' +
                    (i + 1) +
                    '_f.svg'
                  "
                  alt=""
                />
              </div>
              <img
                class="triangle"
                src="https://raw.githubusercontent.com/vitram/vue-okna-calc/master/src/assets/svg/triangle.svg"
                alt=""
              />
              <div
                class="okno_config"
                v-for="okno_config in okno_configs"
                :key="okno_config.config"
                @click="setOknaConfig(i, okno_config.config)"
                :class="{
                  active_okno:
                    okno_config.config === okna_config && i === okna_number,
                }"
              >
                <img
                  :src="
                    'https://raw.githubusercontent.com/vitram/vue-okna-calc/master/src/assets/svg/' +
                    (i + 1) +
                    '_' +
                    okno_config.config +
                    '.svg'
                  "
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row second_config">
        <div class="col-md-3">
          <div class="progress_item">
            <p>Шумоизоляция</p>
            <progress-bar size="small" :val="percent"></progress-bar>
          </div>
          <div class="progress_item">
            <p>Безопасность</p>
            <progress-bar size="small" :val="percent"></progress-bar>
          </div>
          <div class="progress_item">
            <p>Солнцезащита</p>
            <progress-bar size="small" :val="percent"></progress-bar>
          </div>
          <div class="progress_item">
            <p>Энергосбережение</p>
            <progress-bar size="small" :val="percent"></progress-bar>
          </div>
        </div>
        <div class="col-md-4 checkbox_col">
          <div class="checkbox_container">
            <div class="checkbox_item">
              <input type="checkbox" id="dostavka" value="dostavka" />
              <label for="dostavka">Доставка</label>
            </div>
            <div class="checkbox_item">
              <input type="checkbox" id="montazh" value="montazh" />
              <label for="montazh">Монтаж</label>
            </div>
            <div class="checkbox_item">
              <input type="checkbox" id="setka" value="setka" />
              <label for="setka">Москитная сетка</label>
            </div>
            <div class="checkbox_item">
              <input type="checkbox" id="otlivi" value="otlivi" />
              <label for="otlivi">Отливы</label>
            </div>
            <div class="checkbox_item">
              <input type="checkbox" id="podokonniki" value="podokonniki" />
              <label for="podokonniki">Подоконники</label>
            </div>
            <div class="checkbox_item">
              <input type="checkbox" id="otkosi" value="otkosi" />
              <label for="otkosi">Откосы</label>
            </div>
          </div>
        </div>
        <div class="col-md-5">
          <h3 class="text-center">Стоимость окна</h3>
          <div class="price_block d-flex">
            <p>Стоимость голого изделия</p>
            <div class="price">{{ summ }} р.</div>
          </div>
          <div class="price_block d-flex">
            <p>Стоимость изделия с комплектацией</p>
            <div class="price">{{ summ }} р.</div>
          </div>
          <a href="/button-inzhiner">
            <button type="button" class="btn btn-warning btn-lg w-100">
              Вызвать инженера
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressBar from "vue-simple-progress";
export default {
  name: "App",
  components: {
    ProgressBar,
  },
  data() {
    return {
      level_type: 1,
      levels: [
        { name: "Эконом", level: 0 },
        { name: "Стандарт", level: 1 },
        { name: "Элит", level: 2 },
      ],
      okna_number: 0,
      okna_config: 1,
      okna: [
        [
          { config: 1, price_low: 100, price_middle: 200, price_vip: 300 },
          { config: 2, price_low: 100, price_middle: 200, price_vip: 300 },
          { config: 3, price_low: 100, price_middle: 200, price_vip: 300 },
        ],
        [
          { config: 1, price_low: 6749, price_middle: 7642, price_vip: 8241 },
          { config: 2, price_low: 9028, price_middle: 9777, price_vip: 10284 },
        ],
        [
          { config: 1, price_low: 9100, price_middle: 10531, price_vip: 11586 },
          {
            config: 2,
            price_low: 11400,
            price_middle: 12697,
            price_vip: 13657,
          },
          {
            config: 3,
            price_low: 11900,
            price_middle: 13165,
            price_vip: 14125,
          },
        ],
        [
          {
            config: 1,
            price_low: 11400,
            price_middle: 13249,
            price_vip: 14546,
          },
          {
            config: 2,
            price_low: 14900,
            price_middle: 16432,
            price_vip: 17565,
          },
        ],
      ],
    };
  },
  computed: {
    summ() {
      if (this.level_type === 0) {
        return this.okna[this.okna_number][this.okna_config - 1].price_low;
      }
      if (this.level_type === 1) {
        return this.okna[this.okna_number][this.okna_config - 1].price_middle;
      }
      if (this.level_type === 2) {
        return this.okna[this.okna_number][this.okna_config - 1].price_vip;
      }

      return 5000;
    },
    percent() {
      if (this.level_type === 0) {
        return 15;
      }
      if (this.level_type === 1) {
        return 40;
      }
      if (this.level_type === 2) {
        return 90;
      }
      return 100;
    },
  },
  methods: {
    setLevel(id) {
      this.level_type = id;
      console.log("lvl", this.level_type);
    },
    setOknaNumber(i) {
      this.okna_number = i;
      this.okna_config = 1;
    },
    setOknaConfig(i, config) {
      this.setOknaNumber(i);
      this.okna_config = config;
      console.log("config", this.okna_config);
    },
  },
};
</script>

<style>
#app {
  background: #191e29;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 140px;
  padding-bottom: 150px;
}

h2 {
  color: white;
}

h3 {
  color: white;
}

p {
  color: white;
}

.btn {
  margin-bottom: 20px;
}

.active_button {
  background: #fac755 !important;
}

.active_okno {
  background: #fac65541;
  box-shadow: 0 0 10px #fac65541;
}

.first_config {
  align-items: center;
}

.image_container {
  display: flex;
  justify-content: center;
}

.image_container > img {
  height: 400px;
}

.okna_container {
  display: flex;
  justify-content: space-between;
}
.okna_col {
  margin-right: 25px;
}

.okno_f {
  cursor: pointer;
}

.triangle {
  margin-top: 18px;
  margin-bottom: 18px;
}

.okno_config {
  cursor: pointer;
  margin-bottom: 12px;
}

.second_config {
}
.checkbox_col {
  display: flex;
  justify-content: center;
}
.checkbox_container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
}

.checkbox_item {
  display: flex;
  align-items: center;
}
.checkbox_item > input {
  margin-right: 32px;
}
.checkbox_item > label {
  color: white;
}

.price_block {
  justify-content: space-between;
}

.price {
  font-size: 30px;
  color: white;
}
</style>
