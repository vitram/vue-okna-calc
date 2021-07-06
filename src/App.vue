<template>
  <div id="app">
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
      rel="stylesheet"
    />
    <div class="container">
      <h2 class="text-center mb-4">Расчет стоимости онлайн</h2>
      <div class="row first_config">
        <div class="col-md-3">
          <button
            type="button"
            class="btn btn-lg w-100"
            :class="{
              'btn-warning': lvl.level === level_type,
              'btn-outline-warning': lvl.level !== level_type,
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
          <div class="okna_container mb-4">
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
            <progress-bar
              bg-color="none"
              bar-color="#FAC755"
              size="small"
              :val="percent"
            ></progress-bar>
          </div>
          <div class="progress_item">
            <p>Безопасность</p>
            <progress-bar
              bg-color="none"
              bar-color="#FAC755"
              size="small"
              :val="percent"
            ></progress-bar>
          </div>
          <div class="progress_item">
            <p>Солнцезащита</p>
            <progress-bar
              bg-color="none"
              bar-color="#FAC755"
              size="small"
              :val="percent"
            ></progress-bar>
          </div>
          <div class="progress_item">
            <p>Энергосбережение</p>
            <progress-bar
              bg-color="none"
              bar-color="#FAC755"
              size="small"
              :val="percent"
            ></progress-bar>
          </div>
        </div>
        <div class="col-md-4 checkbox_col">
          <div class="checkbox_container">
            <div class="checkbox_row">
              <div class="checkbox_item">
                <input
                  type="checkbox"
                  id="dostavka"
                  value="0"
                  @change="setOptions()"
                  v-model="checkedoptions"
                />
                <label for="dostavka">Доставка</label>
              </div>
              <div class="checkbox_item">
                <input
                  type="checkbox"
                  id="montazh"
                  value="1500"
                  @change="setOptions()"
                  v-model="checkedoptions"
                />
                <label for="montazh">Монтаж</label>
              </div>
              <div class="checkbox_item">
                <input
                  type="checkbox"
                  id="setka"
                  value="500"
                  v-model="checkedoptions"
                  @change="setOptions()"
                />
                <label for="setka">Москитная сетка</label>
              </div>
              <div class="checkbox_item">
                <input
                  type="checkbox"
                  id="otlivi"
                  value="1000"
                  @change="setOptions()"
                  v-model="checkedoptions"
                />
                <label for="otlivi">Отливы</label>
              </div>
              <div class="checkbox_item">
                <input
                  type="checkbox"
                  id="podokonniki"
                  value="400"
                  @change="setOptions()"
                  v-model="checkedoptions"
                />
                <label for="podokonniki">Подоконники</label>
              </div>
              <div class="checkbox_item">
                <input
                  type="checkbox"
                  id="otkosi"
                  value="1400"
                  @change="setOptions()"
                  v-model="checkedoptions"
                />
                <label for="otkosi">Откосы</label>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-5">
          <h3 class="text-center">Стоимость всего окна</h3>
          <div class="price_block d-flex">
            <p>Стоимость голого изделия</p>
            <div class="price">{{ summ }} р</div>
          </div>
          <div class="price_block d-flex">
            <p>Стоимость изделия с комплектацией</p>
            <div class="price">{{ summ }} р</div>
          </div>

          <button
            @click="pushtourl()"
            type="button"
            class="btn btn-warning btn-lg w-100 mt-3"
          >
            Вызвать инженера
          </button>
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
          { config: 2, price_low: 6749, price_middle: 7642, price_vip: 8241 },
          { config: 3, price_low: 9028, price_middle: 9777, price_vip: 10284 },
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
      checkedoptions: [],
      options_sum: 0,
    };
  },
  computed: {
    summ() {
      if (this.level_type === 0) {
        return (
          this.okna[this.okna_number][this.okna_config - 1].price_low +
          this.options_sum
        );
      }
      if (this.level_type === 1) {
        return (
          this.okna[this.okna_number][this.okna_config - 1].price_middle +
          this.options_sum
        );
      }
      if (this.level_type === 2) {
        return (
          this.okna[this.okna_number][this.okna_config - 1].price_vip +
          this.options_sum
        );
      }

      return 5000;
    },
    percent() {
      if (this.level_type === 0) {
        return 15;
      }
      if (this.level_type === 1) {
        return 60;
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
    setOptions() {
      this.options_sum = 0;

      this.checkedoptions.forEach((element) => {
        console.log(element);
        this.options_sum += Number(element);
      });
    },
    pushtourl() {
      if (history.pushState) {
        var baseUrl =
          window.location.protocol +
          "//" +
          window.location.host +
          window.location.pathname;

        var params = {
          level: this.level_type,
          okna_number: this.okna_number,
          okna_config: this.okna_config,
        };

        var esc = encodeURIComponent;
        var query = Object.keys(params)
          .map((k) => esc(k) + "=" + esc(params[k]))
          .join("&");

        var newUrl = baseUrl + "?" + query;
        history.pushState(null, null, newUrl);
        var event = new CustomEvent("motomoto");
        window.dispatchEvent(event);
        console.log("Delaem motomoto event");
      } else {
        console.warn("History API не поддерживает ваш браузер");
      }
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
  padding-top: 100px;
  padding-bottom: 100px;
  font-family: "Montserrat", sans-serif;
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
  align-items: center;
}

.progress_item {
  margin-bottom: 25px;
}

.progress_item > p {
  text-align: left;
}
.checkbox_col {
  display: flex;
  justify-content: center;
}
.checkbox_container {
  display: flex;
  justify-content: center;
  width: 100%;
}

.checkbox_row {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.checkbox_item {
  display: flex;
}
.checkbox_item > input {
  margin-right: 32px;
  margin-top: 5px;
}
.checkbox_item > label {
  color: white;
}

.price_block {
  align-items: center;
  justify-content: space-between;
}

.price_block > p {
  max-width: 200px;
  text-align: left;
  margin-top: 15px;
}

.price {
  color: white;
  font-family: Georgia;
  font-style: normal;
  font-weight: normal;
  font-size: 45px;
  line-height: 51px;

  color: #fac755;
}

@media (max-width: 767.98px) {
  .price {
    font-size: 35px;
    line-height: 45px;
  }
  .price_block > p {
    text-align: left;
    margin-top: 15px;
    max-width: 200px;
  }

  .okno_f > img {
    width: 100%;
  }

  .okno_config > img {
    width: 100%;
  }
  .okna_col:last-child {
    margin-right: 0;
  }
  .checkbox_item {
    width: 100%;
    justify-content: space-between;
  }
  .checkbox_container {
    margin-top: 40px;
    margin-bottom: 40px;
    display: block;
  }
}
</style>
