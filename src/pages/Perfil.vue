<template>
  <q-layout>

    <f-header/>
    <div class="tw-flex tw-pt-12 ">
      <div class="tw-w-1/4 tw-h-screen">
        <q-img class="tw-h-full"
               src="https://wallpaperaccess.com/full/1515138.jpg">
          <div class="absolute-full text-subtitle2 text-center tw-py-32">
            <div class="tw-pt-8 tw-pb-4">
              <img src="https://i.ibb.co/YRJrrHr/user-1.png" class="responsive" width="160" height="160">
            </div>
            <q-separator color="white" inset/>
            <q-btn to="/rutinas" class="tw-py-4" color="grey-4" size="12px" stretch flat label="Mis rutinas"/>
            <p></p>
            <q-btn to="/rutinas/crear" class="tw-py-4" color="grey-4" size="12px" stretch flat label="Crear rutina"/>
          </div>
        </q-img>
      </div>
      <div class="tw-w-3/4  tw-h-screen tw-py-12 bg-grey-3">
        <div class="text-right tw-pr-8">
        </div>
        <div class="tw-py-10 tw-w-full">
          <p class="tw-px-12 tw-text-2xl text-bold tw-flex tw-break-words tw-leading-none">
            Mi perfil
          </p>
          <div class="tw-w-1/4 tw-h-2 bg-purple-10"></div>
        </div>
        <div class="tw-pl-24">
          <p class="tw-px-12 tw-mb-10 tw-text-2xl tw-flex tw-break-words tw-leading-none">
           <span class="text-bold text-secondary">Nombre: &nbsp;</span>   {{user.name}}
          </p>
          <p class="tw-px-12 tw-mb-10 tw-text-2xl  tw-flex tw-break-words tw-leading-none">
            <span class="text-bold text-secondary">Apellido paterno:  &nbsp;</span> {{user.paternalName}}
          </p>
          <p class="tw-px-12 tw-mb-10 tw-text-2xl  tw-flex tw-break-words tw-leading-none">
           <span class="text-bold text-secondary">Apellido Materno:  &nbsp;</span>  {{user.maternalName}}
          </p>
          <p class="tw-px-12 tw-mb-10 tw-text-2xl  tw-flex tw-break-words tw-leading-none">
           <span class="text-bold text-secondary">Email:  &nbsp;</span>  {{user.email}}
          </p>
          <!-- <p class="tw-px-12 tw-text-base tw-flex tw-break-words tw-leading-none"> Email: {{user.email}}</p> -->
          <!-- <p><span class="tw-text-xl text-bold  tw-break-words">Peso </span><span
            class="tw-text-xl tw-pl-32 tw-break-words text-purple-3"> {{user.weight}} kg </span></p>
          <p class="tw-pt-6"><span class="tw-text-xl text-bold  tw-break-words">Estatura </span><span
            class="tw-text-xl tw-pl-24 tw-break-words text-purple-3"> {{user.height}} m </span></p>
          <p class="tw-pt-6"><span class="tw-text-xl text-bold  tw-break-words">IMC </span><span class="tw-pl-2"></span>
            <span class="tw-text-xl tw-pl-32 tw-break-words text-purple-3">{{user.imc}}</span></p>
          <p class="tw-pt-6"><span class="tw-text-xl text-bold  tw-break-words">Condición física</span><span
            class="tw-text-xl tw-pl-8 tw-break-words text-purple-3">{{user.condicion}}</span></p>
          <p class="tw-pt-6"><span class="tw-text-xl text-bold  tw-break-words">Objetivo actual</span><span
            class="tw-text-xl tw-pl-10 tw-break-words text-purple-3">{{user.objective}}</span></p> -->
        </div>
      </div>
    </div>

  </q-layout>
</template>

<script>
    import FHeader from "../components/FHeader";

    export default {
        name: 'Perfil',
        components: {FHeader},
        data() {
            return {}
        },
        computed: {
            user() {
                return this.$store.state.user.user
            }
        },
        methods: {
            calculateIMC() {
                this.user.imc = this.user.peso / (Math.pow(this.user.estatura, 2))
                this.user.imc = this.user.imc.toFixed(2)
            },
            calculatePhyCondition() {
                switch (true) {
                    case (this.user.imc < 19):
                        this.user.condicion = 'Bajo peso'
                        break;
                    case (this.user.imc >= 19 && this.user.imc < 25):
                        this.user.condicion = 'Normal'
                        break;
                    case (this.user.imc >= 25 && this.user.imc < 30):
                        this.user.condicion = 'Sobrepeso'
                        break;
                    case (this.user.imc > 30):
                        this.user.condicion = 'Obesidad'
                        break;
                }
            }
        },
        beforeMount() {
            this.calculateIMC()
            this.calculatePhyCondition()
        }
    }
</script>

<style>
  .gr-bg {
    background-image: linear-gradient(
      to right,
      #5C73F2 0%,
      #3E38F2 20%,
      #230A59 70%
    );
    border-radius: 0.3rem;
    background-size: 200% auto;
    transition: background-position 0.2s;
  }
</style>
