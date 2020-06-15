<template>
    <div class="tw-pt-8 tw-px-8">
      <div class="tw-grid tw-grid-cols-1 text-center ">
        
        <div class="tw-h-2 bg-dark " style="border-top-left-radius:15px; border-top-right-radius:15px"></div>
        <div class="bg-dark tw-py-12">
        </div>
        <div class="tw-h-2 bg-dark " style="border-bottom-left-radius:15px; border-bottom-right-radius:15px"></div>
        
        <div class="tw-py-8">
        </div>

        <div class="tw-flex tw-mb-4">
          <div class="tw-w-full">
            <div class="tw-flex tw-flex-row tw-flex-wrap tw-px-5 tw-mb-5">
              <div v-for="i in 4" :key="i" class="tw-w-3/6 tw-p-3 ">
                <q-intersection once transition="scale">
                    <div class="flex tw-mb-4">
                      <div class="tw-w-full recent_u">
                        <div class="tw-flex tw-flex-row">
                          <div class="tw-justify-center tw-p-6 tw-pt-16">
                            <img src="https://i.ibb.co/YRJrrHr/user-1.png" class="responsive" width="160" height="30">
                          </div>
                          <div class="tw-flex-col">
                            <div class="tw-flex tw-flex-row">
                              <p class="tw-pt-2 tw-px-2 text-white tw-text-lg tw-break-words tw-font-mono">
                                Nombre:
                              </p>
                              <div class="tw-pt-2 text-white tw-text-lg tw-break-words tw-font-mono">
                                xxxx xxxx xxxx
                              </div>
                            </div>

                            <div class="tw-flex tw-flex-row">
                              <p class="tw-pt-2 tw-px-2 text-white tw-text-lg tw-break-words tw-font-mono">
                                Correo:
                              </p>
                              <div class="tw-pt-2 text-white tw-text-lg tw-break-words tw-font-mono">
                                xxxx xxxx xxxx
                              </div>
                            </div>
                            
                            <div class="tw-flex tw-flex-row">
                              <p class="tw-pt-2 tw-px-2 text-white tw-text-lg tw-break-words tw-font-mono">
                                Peso:
                              </p>
                              <div class="tw-pt-2 text-white tw-text-lg tw-break-words tw-font-mono">
                                xxxx xxxx xxxx
                              </div>
                            </div>
                            
                            <div class="tw-flex tw-flex-row">
                              <p class="tw-pt-2 tw-px-2 text-white tw-text-lg tw-break-words tw-font-mono">
                                ALtura:
                              </p>
                              <div class="tw-pt-2 text-white tw-text-lg tw-break-words tw-font-mono">
                                xxxx xxxx xxxx
                              </div>
                            </div>
                            
                            <div class="tw-flex tw-flex-row">
                              <p class="tw-pt-2 tw-px-2 text-white tw-text-lg tw-break-words tw-font-mono">
                                IMC:
                              </p>
                              <div class="tw-pt-2 text-white tw-text-lg tw-break-words tw-font-mono">
                                xxxx xxxx xxxx
                              </div>
                            </div>
                            
                            <div class="tw-flex tw-flex-row">
                              <p class="tw-pt-2 tw-px-2 text-white tw-text-lg tw-break-words tw-font-mono">
                                Objetivo:
                              </p>
                              <div class="tw-pt-2 text-white tw-text-lg tw-break-words tw-font-mono">
                                xxxx xxxx xxxx
                              </div>
                            </div>

                          </div>
                        </div>
                        <div class="tw-h-8 bg-dark" style="border-bottom-left-radius:15px; border-bottom-right-radius:15px"></div>
                      </div>
                    </div>
                </q-intersection>
              </div>
            </div>
          
            <div class="q-pa-lg flex flex-center tw-pt-12">
              <q-pagination v-model="current" :max="3" :direction-links="true">
              </q-pagination>
            </div>
          </div>
        </div> 

      </div>
    </div>
</template>

<script>
  export default {
  name: 'UsarioAdmin',
  data() {
    return {
      left: false,
      current: 1
    }
  }
}
</script>

<style>
.recent_u {
  background-image: linear-gradient(
     550deg, 
     rgba(67,7,143,1) 0%, 
     rgba(108,114,254,1) 50%, 
     rgba(0,139,229,1) 100%
  );
  border-radius: 15px;
  background-size: 200% auto;
  transition: background-position 0.2s;
}
</style>