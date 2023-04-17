<template>
  <v-app>
    <div class="bg-surface">
      <v-row align="center" style="height: 100vh; overflow: hidden">
        <v-col :cols="12" sm="6">
          <div class="d-flex align-center">
            <v-card flat class="mx-auto">
              <div class="d-flex justify-center pa-10">
                <img src="../assets/images/Group 2.png" />
              </div>
              <div v-if="slide == false">
                <v-card-text class="font">
                  <p class="text-h4 text--primary">Welcome Back</p>
                </v-card-text>
                <v-card-text>
                  <p class="text-black">
                    Welcome Back, Please enter your details
                  </p>
                </v-card-text>
                <div
                  :class="[
                    isActive ? 'input-container_action' : 'input-container',
                  ]"
                >
                  <div class="select-input" v-click-outside="clickoutside">
                    <img src="../assets/images/thailand.png" />
                    <select
                      style="cursor: pointer"
                      name="pets"
                      id="pet-select"
                      v-model="phoneNumber"
                      @click="icon()"
                    >
                      <option value="+66" class="option-input">+66 TH</option>
                      <option value="+77" class="option-input">+77 TH</option>
                      <option value="+88" class="option-input">+88 TH</option>
                      <option value="+66" class="option-input">+66 TH</option>
                      <option value="+66" class="option-input">+66 TH</option>
                    </select>
                    <img
                      src="../assets/images/iconmenu.png"
                      class="icon-menu"
                      :style="{
                        transform:
                          iconToggle == true
                            ? 'rotate(180deg)'
                            : 'rotate(0deg)',
                      }"
                    />
                  </div>
                  <input
                    placeholder="xx xxx xxx"
                    type="tel"
                    name="number"
                    v-model="inputNumber"
                    style="
                      border-left: 1px solid rgba(219, 214, 214, 0.63);
                      width: 100%;
                    "
                  />
                </div>
                <v-btn
                  :loading="loading"
                  color="black"
                  @click="login()"
                  size="x-large"
                  :style="{
                    width: xs || sm ? '130px' : '350px',
                    marginTop: xs || sm ? '10px' : '25px',
                  }"
                >
                  <NuxtLink class="text-surface" style="text-decoration: none"
                    >Continue</NuxtLink
                  >
                </v-btn>
                <small
                  class="text-red text-center my-2"
                  style="display: block"
                  >{{ Errormsg }}</small
                >
              </div>
              <div v-else>
                <div class="container">
                  <h3 class="text-center">OTP Vertification</h3>
                  <div class="userInput">
                    <input
                      v-model="otpInput.input1"
                      class="inputOPT"
                      type="text"
                      id="ist"
                      maxlength="1"
                      onkeyup="clickEvent(this,'sec')"
                    />
                    <input
                      v-model="otpInput.input2"
                      @input="optChange($event)"
                      class="inputOPT"
                      type="text"
                      id="sec"
                      maxlength="1"
                      onkeyup="clickEvent(this,'third')"
                    />
                    <input
                      v-model="otpInput.input3"
                      @input="optChange($event)"
                      class="inputOPT"
                      type="text"
                      id="third"
                      maxlength="1"
                      onkeyup="clickEvent(this,'fourth')"
                    />

                    <input
                      v-model="otpInput.input4"
                      @input="optChange($event)"
                      type="text"
                      id="fifth"
                      maxlength="1"
                      class="inputOPT"
                    />
                    <input
                      v-model="otpInput.input5"
                      @input="optChange($event)"
                      type="text"
                      id="fifth"
                      maxlength="1"
                      class="inputOPT"
                    />
                    <input
                      v-model="otpInput.input6"
                      @input="optChange($event)"
                      type="text"
                      id="fifth"
                      maxlength="1"
                      class="inputOPT"
                    />
                  </div>
                </div>
              </div>
            </v-card>
          </div>
          <div v-if="slide">
            <div class="d-flex justify-center">
              <v-btn
                :loading="loading"
                color="black"
                @click="optLogin()"
                size="x-large"
                :style="{
                  width: xs || sm ? '130px' : '350px',
                  marginTop: xs || sm ? '10px' : '25px',
                }"
              >
                <NuxtLink class="text-surface" style="text-decoration: none"
                  >Continue</NuxtLink
                >
              </v-btn>
            </div>
            <p class="text-center pa-5">
              <v-btn
                flat
                text
                :disabled="time > 0"
                @click="resend()"
                style="text-decoration: none; cursor: pointer"
                >Resend OTP</v-btn
              >
              {{ time > 0 ? time : "0" }}
            </p>
          </div>

          <div class="d-flex justify-cent>er">
            <p style="width: 70%" class="text-center text-font">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              lobortis velit nec ex malesuada rutrum. Curabitur eget justo ac
              mauris tincidunt pretium. Interdum et malesuada
            </p>
          </div>
        </v-col>
        <v-col :cols="12" sm="6">
          <img
            src="../assets/images/Group 1.png"
            style="height: 100vh; width: 100%; object-fit: cover"
          />
        </v-col>
      </v-row>
    </div>
  </v-app>
</template>
<script>
import { useDisplay } from "vuetify";
import { useStore } from "vuex";
export default {
  setup() {
    const { xs, sm, md, lg, xl, xxl } = useDisplay();
    const phoneNumber = ref("+66");
    const inputNumber = ref("");
    const iconToggle = ref(false);
    const userNumber = ref("");
    const tel = ref(null);
    const Errormsg = ref("");
    const router = useRouter();
    const isActive = ref(false);
    const loading = ref(false);
    const store = useStore();
    const slide = ref(false);
    const otp = ref("");
    const time = ref(60);
    const otpChange = ref("");
    const resendNumber = ref("");
    const otpInput = reactive({
      input1: "",
      input2: "",
      input3: "",
      input4: "",
      input5: "",
      input6: "",
    });
    function icon() {
      iconToggle.value = !iconToggle.value;
    }
    function clickoutside() {
      iconToggle.value = false;
    }
    function clickEvent(first, last) {
      if (first.value.length) {
        document.getElementById(last).focus();
      }
    }
    setInterval(displayHello, 1000);
    function displayHello() {
      time.value = time.value - 1;
    }
    async function resend() {
      time.value = 10;
      let payload = {
        country_tel: phoneNumber.value,
        tel: resendNumber.value,
      };
      await store.dispatch("ResentOTPProviderWesmart", payload);
    }
    async function optLogin() {
      let payload = {
        tel: resendNumber.value,
        pin: `${otpInput.input1}${otpInput.input2}${otpInput.input3}${otpInput.input4}${otpInput.input5}${otpInput.input6}`,
      };
      const res = await store.dispatch("OTPVerification", payload);
      if (res.msg == true) {
        localStorage.setItem("userInfo", JSON.stringify(res.data.token));
        router.push({ path: "/" });
      }
    }
    function optChange($event) {
      let number = $event;
      otpChange.value = otpChange.value = number;
    }
    async function login() {
      Errormsg.value = "";
      // if (!userNumber.value.match(/^[0-9]{4}-[0-9]{3}-[0-9]{4}/)) {
      if (!inputNumber.value.match(/^[0-9]{9}/)) {
        Errormsg.value = "Phone Number is incorrect";
        isActive.value = true;
      } else {
        loading.value = true;

        let payload = {
          country_tel: phoneNumber.value,
          tel: inputNumber.value,
        };
        await store.dispatch("login", payload);
        slide.value = true;
        resendNumber.value = inputNumber.value;
        inputNumber.value = "";
        loading.value = false;
        isActive.value = false;
      }
    }
    definePageMeta({
      layout: false,
    });
    useHead({
      title: "Login",
    });
    return {
      tel,
      Errormsg,
      phoneNumber,
      icon,
      iconToggle,
      clickoutside,
      userNumber,
      xs,
      sm,
      md,
      lg,
      xl,
      xxl,
      login,
      isActive,
      loading,
      inputNumber,
      slide,
      otp,
      clickEvent,
      time,
      resend,
      optLogin,
      optChange,
      otpInput,
    };
  },
};
</script>
<style scoped>
.input {
  width: 100%;
  padding: 10px;
  outline: none;
  border: none;
}
.input-container {
  border-radius: 10px;
  display: flex;
  width: 100%;
  margin-bottom: 15px;
  border: 1px solid rgba(219, 214, 214, 0.63);
  box-shadow: -2px 2px 8px 4px rgba(0, 0, 0, 0.1);
}
.input-container_action {
  border-radius: 10px;
  display: flex;
  width: 100%;
  margin-bottom: 15px;
  border: 2px solid rgba(252, 0, 0, 0.63);
  box-shadow: -2px 2px 8px 4px rgba(0, 0, 0, 0.1);
}
.select-input {
  border-radius: 10px;

  width: 40%;
  display: flex;
  padding: 3px;
}
select {
  padding: 2px;
}
.icon-menu {
  width: 15px;
  height: 10px;
  margin-top: 23px;
  margin-left: 5px;
}
.font {
  font-family: "Prompt", sans-serif;
}
::-webkit-input-placeholder {
  padding: 15px;
}

:-ms-input-placeholder {
  padding: 15px;
}

::placeholder {
  padding: 15px;
}

.userInput {
  display: flex;
  justify-content: center;
}

.inputOPT {
  margin: 10px;
  height: 35px;
  width: 65px;
  border: none;
  border-radius: 5px;
  text-align: center;
  font-family: arimo;
  font-size: 1.2rem;
  background: #eef2f3;
}
</style>
