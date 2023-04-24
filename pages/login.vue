<template>
  <v-app>
    <div class="bg-surface">
      <v-row align="center" style="height: 100vh; overflow: hidden">
        <v-col :cols="12" sm="6">
          <div class="d-flex align-center">
            <v-card flat class="mx-auto">
              <div class="d-flex justify-center pa-10">
                <img
                  src="../assets/images/Group 2.png"
                  style="width: 212px; height: 60px"
                />
              </div>
              <div v-if="slide == false">
                <v-card-text class="pa-10">
                  <p class="text-h5 text-center font" style="font-weight: bold">
                    Welcome Back
                  </p>
                  <p class="text-font">
                    Welcome Back, Please enter your details
                  </p>
                </v-card-text>
                <div
                  :class="[
                    isActive ? 'input-container_action' : 'input-container',
                  ]"
                >
                  <div class="select-input" v-click-outside="clickoutside">
                    <img
                      src="../assets/images/thailand.png"
                      style="width: 30px"
                    />
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
                  <div class="pa-5">
                    <h3 class="text-center">OTP Vertification</h3>
                    <p class="text-center text-font">
                      OTP has send by sms to number{{ phoneNumber }}
                      {{ resendNumber }}
                    </p>
                  </div>
                  <div class="userInput">
                    <div>
                      <div class="otp-container">
                        <input
                          :class="[sm || xs ? 'inputOPTMB' : 'inputOPT']"
                          v-for="(value, index) in otpValues"
                          :key="index"
                          type="password"
                          maxlength="1"
                          :value="value"
                          @input="handleInput(index, $event.target.value)"
                          @keydown.backspace="handleBackspace(index)"
                          ref="otpFields"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </v-card>
          </div>
          <div v-if="slide" style="position: relative">
            <div class="d-flex justify-center">
              <v-btn
                :disabled="lock == false"
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
            <p class="text-red text-center">
              {{ errormsg }}
            </p>
            <p class="text-center pa-5 mt-5">
              <v-btn
                :loading="loading"
                flat
                text
                :disabled="time > 0"
                @click="resend()"
                style="text-decoration: none; cursor: pointer"
                >Resend OTP</v-btn
              >
              {{ time > 0 ? time : "0" }} sec
            </p>
          </div>
          <div class="d-flex justify-center mt-15">
            <p style="width: 70%" class="text-center text-font">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              lobortis velit nec ex malesuada rutrum. Curabitur eget justo ac
              mauris tincidunt pretium. Interdum et malesuada
            </p>
          </div>
        </v-col>
        <v-col :cols="12" sm="6">
          <img
            v-if="xs || sm === false"
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
    const lock = ref(false);
    const otp = ref("");
    const time = ref(60);
    const errormsg = ref("");
    const resendNumber = ref("");
    const otpValues = ref(["", "", "", "", "", ""]);
    const otpFields = ref(null);
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
        pin: `${otpValues.value[0]}${otpValues.value[1]}${otpValues.value[2]}${otpValues.value[3]}${otpValues.value[4]}${otpValues.value[5]}`,
      };
      loading.value = true;
      const res = await store.dispatch("OTPVerification", payload);
      // try {
      //   let response = await auth.loginWith("local", {
      //     data: payload,
      //   });
      //   console.log(response);
      // } catch (err) {
      //   console.log(err);
      // }
      if (res.msg == true) {
        localStorage.setItem(
          "userInfo",
          JSON.stringify(res.data.token.token_access)
        );
        router.push({ path: "/" });
        loading.value = false;
      } else {
        errormsg.value = "OTP Incorrect, please try again";
      }
    }
    function handleInput(index, value) {
      if (value.length > 1) {
        return;
      }
      otpValues.value[index] = value;
      if (value.length === 1 && index < otpValues.value.length - 1) {
        otpFields.value[index + 1].focus();
      }
    }
    function handleBackspace(index) {
      if (otpValues.value[index] !== "") {
        otpValues.value[index] = "";
      } else if (index > 0) {
        otpFields.value[index - 1].focus();
      }
    }
    async function login() {
      Errormsg.value = "";
      // if (!userNumber.value.match(/^[0-9]{4}-[0-9]{3}-[0-9]{4}/)) {
      if (
        !inputNumber.value.match(/^[0-9]{9}/) ||
        !inputNumber.value.length === 9
      ) {
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
        await setInterval(displayHello, 1000);
        resendNumber.value = inputNumber.value;
        inputNumber.value = "";
        loading.value = false;
        isActive.value = false;
      }
    }
    watch(otpValues.value, () => {
      let pin = `${otpValues.value[0]}${otpValues.value[1]}${otpValues.value[2]}${otpValues.value[3]}${otpValues.value[4]}${otpValues.value[5]}`;
      if (pin.length == 6 && /^[0-9]+$/.test(pin)) {
        errormsg.value = "";
        lock.value = true;
      } else if (pin.length == 6) {
        errormsg.value = "* OTP incorrect, please try again";
        lock.value = false;
      } else {
        errormsg.value = "";
        lock.value = false;
      }
    });
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
      otpValues,
      handleInput,
      handleBackspace,
      otpFields,
      lock,
      errormsg,
      resendNumber,
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
  border: 2px solid rgba(219, 214, 214, 0.63);
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
  padding: 9px;
}
select {
  padding: 2px;
}
.icon-menu {
  width: 13px;
  height: 8px;
  margin-top: 14px;
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
  height: 55px;
  width: 70px;
  border: none;
  border-radius: 5px;
  text-align: center;
  font-family: arimo;
  font-size: 1.2rem;
  border: 3px solid #e5e5e5;
}
.inputOPTMB {
  margin: 5px;
  height: 55px;
  width: 50px;
  border: none;
  border-radius: 5px;
  text-align: center;
  font-family: arimo;
  font-size: 1.2rem;
  border: 3px solid #e5e5e5;
}
</style>
