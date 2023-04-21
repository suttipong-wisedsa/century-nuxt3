<template>
  <div class="mt-5">
    <v-divider :thickness="4" color="#F2F2F2"></v-divider>
    <div class="my-5 px-5">
      <h3 class="font">ประเภทธุรกิจ *</h3>
      <v-radio-group v-model="radio" inline color="yellow">
        <v-radio label="บุคคลธรรมดา" :value="n1"></v-radio>
        <v-radio label="นิติบุคคล" :value="n2"></v-radio>
      </v-radio-group>
    </div>
    <h3 class="px-5">ประเภทธุรกิจ</h3>
    <v-form ref="form" v-model="valid" lazy-validation class="px-5">
      <div>
        <v-container>
          <v-row>
            <v-col cols="12" sm="4">
              <p class="text-black font">
                ชื่อธุรกิจ<span class="text-red">*</span>
              </p>
              <v-text-field
                v-model="register.name"
                :rules="textRules"
                :loading="submit"
                type="text"
                placeholder="Your Name"
                variant="outlined"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <p class="text-black font">
                หมายเลขบัตรประชาชนกรรมการผู้มีอำนาจลงนาม<span class="text-red"
                  >*</span
                >
              </p>
              <v-text-field
                v-model="register.numberid"
                :rules="idCardRules"
                :loading="submit"
                type="text"
                placeholder="Your Number"
                variant="outlined"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <p class="text-black font">
                หมายเลขบุ๊คแบงค์ธุรกิจ<span class="text-red">*</span>
              </p>
              <v-text-field
                v-model="register.numberbank"
                :rules="idCardRules"
                :loading="submit"
                type="text"
                placeholder="Company Name"
                variant="outlined"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <p class="text-black font">
                อีเมล ธุรกิจ<span class="text-red">*</span>
              </p>
              <v-text-field
                v-model="register.email"
                :rules="emailRules"
                :loading="submit"
                type="email"
                placeholder="Company@email.com"
                variant="outlined"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <p class="text-black font">
                เบอร์โทร ธุรกิจ<span class="text-red">*</span>
              </p>
              <v-text-field
                v-model="register.tel"
                :rules="numberRules"
                :loading="submit"
                type="text"
                placeholder="Company Website"
                variant="outlined"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <v-col cols="12" sm="6"
          ><p class="text-black font">ที่อยู่<span class="text-red">*</span></p>
          <v-text-field
            v-model="register.address"
            :rules="textRules"
            :loading="submit"
            type="text"
            placeholder="Your Name"
            variant="outlined"
          ></v-text-field
        ></v-col>
        <v-container>
          <v-row>
            <v-col cols="12" sm="3">
              <p class="text-black font">
                จังหวัด<span class="text-red">*</span>
              </p>
              <v-select
                item-title="province_name_th"
                item-value="province_id"
                :rules="req"
                v-model.number="getprovince"
                :loading="submit"
                label="Select"
                :items="province"
                variant="solo"
              ></v-select>
            </v-col>
            <v-col cols="12" sm="3">
              <p class="text-black font">
                อำเภอ<span class="text-red">*</span>
              </p>
              <v-select
                item-title="district_name_th"
                item-value="district_id"
                :disabled="getprovince ? false : true"
                :rules="req"
                v-model.number="register.district"
                :loading="submit"
                label="Select"
                :items="getdistrict"
                variant="solo"
              ></v-select>
            </v-col>
            <v-col cols="12" sm="3">
              <p class="text-black font">ตำบล<span class="text-red">*</span></p>
              <!-- <v-select
                :disabled="getprovince ? false : true"
                :rules="req"
                v-model.number="register.districtsub"
                :loading="submit"
                label="Select"
                :items="[
                  7913,
                  'Colorado',
                  'Florida',
                  'Georgia',
                  'Texas',
                  'Wyoming',
                ]"
                variant="solo"
              ></v-select> -->
              <v-select
                item-title="district_name_th"
                item-value="district_id"
                :disabled="getprovince ? false : true"
                :rules="req"
                v-model.number="register.districtsub"
                :loading="submit"
                label="Select"
                :items="getdistrict"
                variant="solo"
              ></v-select>
            </v-col>
            <v-col cols="12" sm="3">
              <p class="text-black font">
                รหัสไปรษณีย์<span class="text-red">*</span>
              </p>
              <v-text-field
                :rules="req"
                v-model.number="register.zipcode"
                :loading="submit"
                type="email"
                placeholder="Company@email.com"
                variant="outlined"
              ></v-text-field>
            </v-col>
          </v-row>
          <h3 class="font">Business files</h3>
          <div class="d-flex" style="100%">
            <label
              for="images"
              :class="[
                checkinput ? 'drop-containerfail mr-5' : 'drop-container mr-5',
              ]"
            >
              <v-card width="70%" height="350px" class="card">
                <div
                  class="d-flex justify-center align-center"
                  style="height: 100%"
                >
                  <v-icon size="x-large"> mdi-camera </v-icon>
                </div>
                <input
                  type="file"
                  id="images"
                  accept="image/*"
                  required
                  style="display: none"
                  @input="input1"
                />
              </v-card>
              <!-- {{ filename }} -->
              <p style="color: #666666" class="text-center font">
                สำเนาบัตรประชาชน<br />
                กรรมการผู้มีอำนาจลงนาม1
              </p>
            </label>
            <label
              for="images1"
              :class="[
                checkinput ? 'drop-containerfail mr-5' : 'drop-container mr-5',
              ]"
            >
              <v-card width="70%" height="70%" class="card">
                <div
                  class="d-flex justify-center align-center"
                  style="height: 100%"
                >
                  <v-icon size="x-large"> mdi-camera </v-icon>
                </div>
                <input
                  type="file"
                  id="images1"
                  accept="image/*"
                  required
                  style="display: none"
                  @input="input2"
                />
              </v-card>
              <!-- {{ filename }} -->
              <p style="color: #666666" class="text-center font">
                สำเนาบัญชีบุ้คแบงค์2<br />
              </p>
            </label>
            <label
              for="images1"
              :class="[
                checkinput ? 'drop-containerfail mr-5' : 'drop-container mr-5',
              ]"
            >
              <v-card width="70%" height="70%" class="card">
                <div
                  class="d-flex justify-center align-center"
                  style="height: 100%"
                >
                  <v-icon size="x-large"> mdi-camera </v-icon>
                </div>
                <input
                  type="file"
                  id="images1"
                  accept="image/*"
                  required
                  style="display: none"
                  @input="input3"
                />
              </v-card>
              <!-- {{ filename }} -->
              <p style="color: #666666" class="text-center font">
                หนังสือประชุมของ ทางบริษัท<br />
              </p>
              <div
                class="bg-yellow font"
                style="width: 100%; text-align: center"
              >
                ดารน์โหลด
              </div>
            </label>
          </div>
        </v-container>
        <v-divider :thickness="3"></v-divider>
        <div class="d-flex justify-end pa-5">
          <div>
            <v-btn
              :prepend-icon="
                slide == false ? 'mdi-pencil-outline' : 'mdi-close'
              "
              :variant="slide == false ? 'flat' : 'outlined'"
              :color="slide == false ? 'yellow' : 'red'"
              @click="cancle()"
            >
              <template v-slot:prepend>
                <v-icon color="black"></v-icon>
              </template>

              {{ slide == false ? "Edit" : "Cancle" }}

              <template v-slot:append>
                <v-icon color="warning"></v-icon>
              </template>
            </v-btn>
            <v-btn
              :prepend-icon="
                slide == false
                  ? 'mdi-plus-circle-outline'
                  : 'mdi-plus-circle-outline'
              "
              :color="slide == false ? 'black' : '#00BAFF'"
              class="ml-5"
              @click="createForm()"
            >
              <template v-slot:prepend>
                <v-icon color="white"></v-icon>
              </template>

              {{ slide == false ? "Create Business" : "Create" }}

              <template v-slot:append>
                <v-icon color="warning"></v-icon>
              </template>
            </v-btn>
          </div>
        </div>
      </div>
      <!-- <div v-show="radio == 2">
        <v-container>
          <v-row>
            <v-col cols="12" sm="4">
              <p class="text-black font">
                ชื่อธุรกิจ<span class="text-red">*</span>
              </p>
              <v-text-field
                v-model="register.name"
                :rules="nameRules"
                :loading="submit"
                type="text"
                placeholder="Your Name"
                variant="outlined"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <p class="text-black font">
                หมายเลขบัตรประชาชนกรรมการผู้มีอำนาจลงนาม<span class="text-red"
                  >*</span
                >
              </p>
              <v-text-field
                v-model="register.number"
                :rules="numberRules"
                :loading="submit"
                type="text"
                placeholder="Your Number"
                variant="outlined"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <p class="text-black font">
                หมายเลขทะเบียนบริษัท<span class="text-red">*</span>
              </p>
              <v-text-field
                v-model="register.company"
                :rules="textRules"
                :loading="submit"
                type="text"
                placeholder="Company Name"
                variant="outlined"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <p class="text-black font">
                หมายเลขบุ๊คแบงค์ธุรกิจ<span class="text-red">*</span>
              </p>
              <v-text-field
                v-model="register.email"
                :rules="emailRules"
                :loading="submit"
                type="email"
                placeholder="Company@email.com"
                variant="outlined"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <p class="text-black font">
                อีเมล ธุรกิจ<span class="text-red">*</span>
              </p>
              <v-text-field
                v-model="register.website"
                :rules="textRules"
                :loading="submit"
                type="text"
                placeholder="Company Website"
                variant="outlined"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <v-col cols="12" sm="6"
          ><p class="text-black font">ที่อยู่<span class="text-red">*</span></p>
          <v-text-field
            v-model="register.name"
            :rules="nameRules"
            :loading="submit"
            type="text"
            placeholder="Your Name"
            variant="outlined"
          ></v-text-field
        ></v-col>
        <v-container>
          <v-row>
            <v-col cols="12" sm="3">
              <p class="text-black font">
                จังหวัด<span class="text-red">*</span>
              </p>
              <v-select
                item-title="province_name_th"
                item-value="province_id"
                :rules="req"
                v-model.number="getprovince"
                :loading="submit"
                label="Select"
                :items="province"
                variant="solo"
              ></v-select>
            </v-col>
            <v-col cols="12" sm="3">
              <p class="text-black font">
                อำเภอ<span class="text-red">*</span>
              </p>
              <v-select
                item-title="district_name_th"
                item-value="district_id"
                :disabled="getprovince ? false : true"
                :rules="req"
                v-model.number="register.district"
                :loading="submit"
                label="Select"
                :items="getdistrict"
                variant="solo"
              ></v-select>
            </v-col>
            <v-col cols="12" sm="3">
              <p class="text-black font">ตำบล<span class="text-red">*</span></p>
              <v-select
                item-title="district_name_th"
                item-value="district_id"
                :disabled="getprovince ? false : true"
                :rules="req"
                v-model.number="register.districtsub"
                :loading="submit"
                label="Select"
                :items="getdistrict"
                variant="solo"
              ></v-select>
            </v-col>
            <v-col cols="12" sm="3">
              <p class="text-black font">
                รหัสไปรษณีย์<span class="text-red">*</span>
              </p>
              <v-text-field
                :rules="req"
                v-model.number="register.zipcode"
                :loading="submit"
                type="email"
                placeholder="Company@email.com"
                variant="outlined"
              ></v-text-field>
            </v-col>
          </v-row>
          <h3>Business files</h3>
          <div class="d-flex justify-space-between" style="100%">
            <label for="images" class="drop-container">
              <v-card width="70%" height="70%" class="card">
                <div
                  class="d-flex justify-center align-center"
                  style="height: 100%"
                >
                  <v-icon size="x-large"> mdi-camera </v-icon>
                </div>
                <input
                  type="file"
                  id="images"
                  accept="image/*"
                  required
                  style="display: none"
                  @input="cardbank"
                />
              </v-card>
              {{ file }}
              <p style="color: #666666" class="text-center">
                สำเนาบัตรประชาชน กรรมการผู้มีอำนาจลงนาม<br />
              </p>
            </label>
            <label for="images" class="drop-container">
              <v-card width="70%" height="70%" class="card">
                <div
                  class="d-flex justify-center align-center"
                  style="height: 100%"
                >
                  <v-icon size="x-large"> mdi-camera </v-icon>
                </div>
                <input
                  type="file"
                  id="images"
                  accept="image/*"
                  required
                  style="display: none"
                  @input="inputFile"
                />
              </v-card>
              <p style="color: #666666" class="text-center">
                สำเนาบัญชีบุ้คแบงค์<br />
              </p>
              {{ file }}
            </label>
            <label for="images" class="drop-container">
              <v-card width="70%" height="70%" class="card">
                <div
                  class="d-flex justify-center align-center"
                  style="height: 100%"
                >
                  <v-icon size="x-large"> mdi-camera </v-icon>
                </div>
                <input
                  type="file"
                  id="images"
                  accept="image/*"
                  required
                  style="display: none"
                  @input="inputFile"
                />
              </v-card>
              {{ file }}
              <p style="color: #666666" class="text-center">
                สำเนาหนังสือรับรอง <br />บริษัท
              </p>
            </label>
          </div>
          <label for="images" class="drop-container mt-5">
            <v-card width="70%" height="70%" class="card">
              <div
                class="d-flex justify-center align-center"
                style="height: 100%"
              >
                <v-icon size="x-large"> mdi-camera </v-icon>
              </div>
              <input
                type="file"
                id="images"
                accept="image/*"
                required
                style="display: none"
                @input="inputFile"
              />
            </v-card>
            {{ file }}
            <p style="color: #666666" class="text-center">
              หนังสือประชุมของ<br />
              ทางบริษัท
            </p>
          </label>
        </v-container>
        <v-divider :thickness="3"></v-divider>
        <div class="d-flex justify-end pa-5">
          <div>
            <v-btn
              :prepend-icon="
                slide == false ? 'mdi-pencil-outline' : 'mdi-close'
              "
              :variant="slide == false ? 'flat' : 'outlined'"
              :color="slide == false ? 'yellow' : 'red'"
              @click="cancle()"
            >
              <template v-slot:prepend>
                <v-icon color="black"></v-icon>
              </template>

              {{ slide == false ? "Edit" : "Cancle" }}

              <template v-slot:append>
                <v-icon color="warning"></v-icon>
              </template>
            </v-btn>
            <v-btn
              :prepend-icon="
                slide == false
                  ? 'mdi-plus-circle-outline'
                  : 'mdi-plus-circle-outline'
              "
              :color="slide == false ? 'black' : '#00BAFF'"
              class="ml-5"
              @click="Create(1)"
            >
              <template v-slot:prepend>
                <v-icon color="white"></v-icon>
              </template>

              {{ slide == false ? "Create Business" : "Create" }}

              <template v-slot:append>
                <v-icon color="warning"></v-icon>
              </template>
            </v-btn>
          </div>
        </div>
      </div> -->
    </v-form>
  </div>
</template>
<script>
import { useDisplay } from "vuetify";
import { useStore } from "vuex";
export default {
  emits: ["someEvent", "someEvent1"],
  setup(props, { emit }) {
    const { xs, sm, md, lg, xl, xxl } = useDisplay();
    const store = useStore();
    const route = useRoute();
    const form = ref(null);
    const radio = ref(1);
    const file = reactive({ card: "", bank: "" });
    const filecard = ref("");
    const filenumber = ref("");
    const bookmeeting = ref("");
    const n1 = ref(1);
    const n2 = ref(2);
    const filename = ref("");
    const valid = ref(true);
    const slide = ref(true);
    const checkinput = ref(false);
    const img = ref("");
    const nameRules = ref([
      (v) => !!v || "required",
      (v) => (v && v.length <= 50) || "Name must be less than 50 characters",
      (v) => /^([^0-9]*)$/.test(v) || "Can't use number",
    ]);
    const emailRules = ref([
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ]);
    const numberRules = ref([
      (v) => !!v || "required",
      (v) => (v && v.length <= 10) || "Phone number not true",
      (v) => /((\+66|0)(\d{1,2}\-?\d{3}\-?\d{4,5}))/.test(v) || "Tel required",
    ]);
    const textRules = ref([
      (v) => !!v || "required",
      (v) => (v && v.length <= 50) || "Number must be less than 50 characters",
    ]);
    const zipRules = ref([
      (v) => !!v || "required",
      (v) => (v && v.length == 5) || "zip must be 5 characters",
      (v) => /^[0-9]*$/.test(v) || "Can't use Text",
    ]);
    const idCardRules = ref([
      (v) => !!v || "required",
      (v) => (v && v.length == 13) || "zip must be 13 characters",
      (v) => /^[0-9]*$/.test(v) || "Can't use Text",
    ]);
    const req = ref([(v) => !!v || "required"]);
    const submit = ref(false);
    const getprovince = ref(null);
    const register = reactive({
      name: "",
      numberid: "",
      numberbank: "",
      email: "",
      tel: "",
      address: "",
      country: "",
      district: null,
      districtsub: null,
      zipcode: null,
    });
    async function input1(event) {
      let n = 1;
      inputFile(event, n);
    }
    async function input2(event) {
      let n = 2;
      inputFile(event, n);
    }
    async function input3(event) {
      let n = 3;
      inputFile(event, n);
    }
    async function inputFile(event, n) {
      filename.value = event.target.files[0].name;
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64EncodedImage = reader.result;
        base64(base64EncodedImage, n);
      };
    }
    function base64(item, n) {
      if (n === 1) {
        filecard.value = item;
      } else if (n === 2) {
        filenumber.value = item;
      } else {
        bookmeeting.value = item;
      }
    }
    async function cancle() {
      form.value.resetValidation();
      checkinput.value = false;
      form.value.reset();
      filenumber.value == "";
      filecard.value == "";
      emit("someEvent1", false);
    }
    async function createForm() {
      // let payload = {
      //     company_provider_wesmart_type: 1,
      //     company_provider_wesmart_name: "บ่าวกิต จำกัด ครั้งที่ 2",
      //     company_provider_wesmart_email: "bawkrit@gmail.com",
      //     company_provider_wesmart_tel: "893457218",
      //     company_provider_wesmart_address: "The View Condo สวนหลวง",
      //     company_provider_wesmart_bank_number: "1231231231123123",
      //     company_provider_wesmart_customer_id_card: "123123123123123",
      //     company_provider_wesmart_juristic_id: "123123123123123",
      //     company_provider_wesmart_province_id: 66,
      //     company_provider_wesmart_district_id: 880,
      //     company_provider_wesmart_sub_district_id: 7913,
      //     company_provider_wesmart_zipcode_id: 1004,
      //     company_image_provider_wesmart_customer_id_card: filecard.value,
      //     company_image_provider_wesmart_book_bank: filenumber.value,
      //     company_image_provider_wesmart_company_certificate: filenumber.value,
      //   };
      //   console.log(payload)
      //   emit("someEvent", payload);
      checkinput.value = false;
      form.value.validate();
      if (valid.value && filenumber.value && filecard.value) {
        submit.value = true;
        // let payload = {
        //   company_provider_wesmart_type: radio.value,
        //   company_provider_wesmart_name: register.name,
        //   company_provider_wesmart_email: register.email,
        //   company_provider_wesmart_tel: register.tel,
        //   company_provider_wesmart_address: register.address,
        //   company_provider_wesmart_bank_number: register.numberbank,
        //   company_provider_wesmart_customer_id_card: register.numberid,
        //   company_provider_wesmart_juristic_id: "12122312233",
        //   company_provider_wesmart_province_id: register.province,
        //   company_provider_wesmart_district_id: register.district,
        //   company_provider_wesmart_sub_district_id: register.districtsub,
        //   company_provider_wesmart_zipcode_id: register.zipcode,
        //   company_image_provider_wesmart_customer_id_card: filecard.value,
        //   company_image_provider_wesmart_book_bank: filenumber.value,
        //   company_image_provider_wesmart_company_certificate: "",
        // };
        let payload = {
          company_provider_wesmart_type: 1,
          company_provider_wesmart_name: "บ่าวกิต จำกัด ครั้งที่ 2",
          company_provider_wesmart_email: "bawkrit@gmail.com",
          company_provider_wesmart_tel: "893457218",
          company_provider_wesmart_address: "The View Condo สวนหลวง",
          company_provider_wesmart_bank_number: "1231231231123123",
          company_provider_wesmart_customer_id_card: "123123123123123",
          company_provider_wesmart_juristic_id: "123123123123123",
          company_provider_wesmart_province_id: getprovince.value,
          company_provider_wesmart_district_id: 880,
          company_provider_wesmart_sub_district_id: 7913,
          company_provider_wesmart_zipcode_id: 1004,
          company_image_provider_wesmart_customer_id_card: filecard.value,
          company_image_provider_wesmart_book_bank: filenumber.value,
          company_image_provider_wesmart_company_certificate: bookmeeting.value,
        };
        emit("someEvent", payload);
        filenumber.value = "";
        filecard.value == "";
        checkinput.value = false;
        submit.value = false;
        form.value.resetValidation();
        form.value.reset();
        emit("someEvent1", false);
      } else {
        checkinput.value = true;
      }
    }
    watch(getprovince, () => {
      store.dispatch("getDistrict", getprovince.value);
    });
    const province = computed(() => {
      return store.state.bussiness.getProvince;
    });
    const getdistrict = computed(() => {
      return store.state.bussiness.getDistrict;
    });
    async function GetProvince() {
      await store.dispatch("getProvince");
    }
    onMounted(() => {
      GetProvince();
    });
    return {
      radio,
      register,
      file,
      inputFile,
      submit,
      nameRules,
      emailRules,
      numberRules,
      textRules,
      createForm,
      valid,
      form,
      slide,
      img,
      filename,
      input1,
      input2,
      checkinput,
      cancle,
      n1,
      n2,
      zipRules,
      idCardRules,
      req,
      province,
      xs,
      sm,
      getprovince,
      getdistrict,
      input3,
      bookmeeting,
    };
  },
};
</script>
<style scoped>
.font {
  font-family: "Prompt", sans-serif;
}
.drop-container {
  position: relative;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 30%;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid #d9d9d9;
  color: #444;
  cursor: pointer;
  transition: background 0.2s ease-in-out, border 0.2s ease-in-out;
}
.drop-containerfail {
  position: relative;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 30%;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid red;
  color: #444;
  cursor: pointer;
  transition: background 0.2s ease-in-out, border 0.2s ease-in-out;
}
.card {
  border: 2px dashed #d9d9d9;
  background-color: #f4f4f4;
}
.drop-container:hover {
  background: #eee;
  border-color: #111;
}

.drop-container:hover .drop-title {
  color: #222;
}

.drop-title {
  color: #444;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  transition: color 0.2s ease-in-out;
}
</style>
