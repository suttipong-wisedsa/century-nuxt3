<template>
  <div class="mt-5">
    <v-divider :thickness="4" color="#F2F2F2"></v-divider>
    <div class="my-5 px-5">
      <h3 class="font">ประเภทธุรกิจ *</h3>
      <v-radio-group v-model="radio" inline color="yellow">
        <v-radio label="บุคคลธรรมดา" value="radio-1"></v-radio>
        <v-radio label="นิติบุคคล" value="radio-2"></v-radio>
      </v-radio-group>
    </div>
    <h3 class="px-5">ประเภทธุรกิจ</h3>
    <v-form ref="form" v-model="valid" lazy-validation class="px-5">
      <div v-if="radio == 'radio-1'">
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
                v-model="register.numberid"
                :rules="numberRules"
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
                :rules="textRules"
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
            v-model="register.address"
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
              <v-text-field
                v-model="register.province"
                :rules="nameRules"
                :loading="submit"
                type="text"
                placeholder="Your Name"
                variant="outlined"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="3">
              <p class="text-black font">
                อำเภอ<span class="text-red">*</span>
              </p>
              <v-text-field
                v-model="register.district"
                :rules="numberRules"
                :loading="submit"
                type="text"
                placeholder="Your Number"
                variant="outlined"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="3">
              <p class="text-black font">ตำบล<span class="text-red">*</span></p>
              <v-text-field
                v-model="register.district2"
                :rules="textRules"
                :loading="submit"
                type="text"
                placeholder="Company Name"
                variant="outlined"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="3">
              <p class="text-black font">
                รหัสไปรษณีย์<span class="text-red">*</span>
              </p>
              <v-text-field
                v-model="register.zipcode"
                :rules="emailRules"
                :loading="submit"
                type="email"
                placeholder="Company@email.com"
                variant="outlined"
              ></v-text-field>
            </v-col>
          </v-row>
          <h3 class="font">Business files</h3>
          <!-- <v-file-input
          style="width: 300px; height: 300px"
          placeholder="File input"
          prepend-icon="mdi-camera"
          variant="outlined"
        ></v-file-input> -->
          <div class="d-flex" style="100%">
            <label for="images" class="drop-container mr-10">
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
                  @input="inputFile"
                />
              </v-card>

              <p style="color: #666666" class="text-center">
                สำเนาบัตรประชาชน<br />
                กรรมการผู้มีอำนาจลงนาม
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
              {{ file }}
              <p style="color: #666666" class="text-center">
                สำเนาบัญชีบุ้คแบงค์<br />
              </p>
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
              @click="Create(0)"
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
      <div v-else>
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
              <v-text-field
                v-model="register.name"
                :rules="nameRules"
                :loading="submit"
                type="text"
                placeholder="Your Name"
                variant="outlined"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="3">
              <p class="text-black font">
                อำเภอ<span class="text-red">*</span>
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
            <v-col cols="12" sm="3">
              <p class="text-black font">ตำบล<span class="text-red">*</span></p>
              <v-text-field
                v-model="register.company"
                :rules="textRules"
                :loading="submit"
                type="text"
                placeholder="Company Name"
                variant="outlined"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="3">
              <p class="text-black font">
                รหัสไปรษณีย์<span class="text-red">*</span>
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
          </v-row>
          <h3>Business files</h3>
          <!-- <v-file-input
          style="width: 300px; height: 300px"
          placeholder="File input"
          prepend-icon="mdi-camera"
          variant="outlined"
        ></v-file-input> -->
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
                  @input="inputFile"
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
              @click="Create(0)"
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
      </div>
    </v-form>
  </div>
</template>
<script>
export default {
  emits: ["someEvent"],
  setup(props, { emit }) {
    const form = ref(null);
    const radio = ref("radio-1");
    const file = ref("");
    const valid = ref(true);
    const slide = ref(true);
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
      (v) => (v && v.length <= 12) || "Number must be less than 12 characters",
      (v) =>
        /((\+66|0)(\d{1,2}\-?\d{3}\-?\d{3,4}))|((\+๖๖|๐)([๐-๙]{1,2}\-?[๐-๙]{3}\-?[๐-๙]{3,4}))/.test(
          v
        ) || "Tel required",
    ]);
    const textRules = ref([
      (v) => !!v || "required",
      (v) => (v && v.length <= 50) || "Number must be less than 50 characters",
    ]);
    const submit = ref(false);
    const register = reactive({
      name: "",
      numberid: "",
      numberbank: "",
      email: "",
      tel: "",
      address: "",
      province: "",
      district: "",
      district2: "",
      zipcode: "",
    });
    function cancle() {
      emit("changeB", { name: "sdsdsd" });
    }
    async function inputFile($event) {
      file.value = $event.target.files[0].name;
    }
    async function createForm() {
      form.value.validate();
      if (valid.value) {
        submit.value = true;
        emit("someEvent", register);
        router.push({ path: "/" });
        form.value.resetValidation();
        form.value.reset();
        submit.value = false;
      }
    }
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
