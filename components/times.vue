<template>
  <div>
    <div class="rounded-xl shadow-md bg-white grid grid-rows-7 p-4 text-5xl divide-y divide-black">
      <div class="grid grid-cols-3 gap-x-4 bg-red-200 font-bold">
        <div class="text-center">Prayer</div>
        <div class="text-center">Begins</div>
        <div class="text-center">Iqama</div>
      </div>

      <div class="grid grid-cols-3 gap-4 py-6 divide-x divide-black">
        <div>Fajr</div>
        <div class="text-center">{{ getTime(getCurrDayData.fajr.athan) }}</div>
        <div class="text-center">{{ getTime(getCurrDayData.fajr.iqama) }}</div>
      </div>

      <div class="grid grid-cols-3 gap-4 py-6 divide-x divide-black">
        <div>Sunrise</div>
        <div class="text-center col-span-2">{{ getTime(getCurrDayData.sunrise) }}</div>
      </div>

      <div class="grid grid-cols-3 gap-4 py-6 divide-x divide-black">
        <div>Dhuhr</div>
        <div class="text-center">{{ getTime(getCurrDayData.dhuhr.athan) }}</div>
        <div class="text-center">{{ getTime(getCurrDayData.dhuhr.iqama) }}</div>
      </div>

      <div class="grid grid-cols-3 grid-rows-2 py-6 gap-x-3 divide-x divide-black">
        <div class="row-span-2">Asr</div>
        <div class="text-center">{{ getTime(getCurrDayData.asr.athan1) }}</div>
        <div class="text-center">{{ getTime(getCurrDayData.asr.iqama) }}</div>
        <!-- <div class="text-right text-sm">Hanafi</div> -->
        <div class="col-span-2 px-5">{{ getTime(getCurrDayData.asr.athan2) }}<p class="text-2xl font-mono inline">Hanafi</p></div>
      </div>

      <div class="grid grid-cols-3 gap-4 py-6 divide-x divide-black">
        <div>Maghrib</div>
        <div class="text-center">{{ getTime(getCurrDayData.maghrib.athan) }}</div>
        <div class="text-center">{{ getTime(getCurrDayData.maghrib.iqama) }}</div>
      </div>

      <div class="grid grid-cols-3 gap-4 py-6 divide-x divide-black">
        <div>Isha'a</div>
        <div class="text-center">{{ getTime(getCurrDayData.isha.athan) }}</div>
        <div class="text-center">{{ getTime(getCurrDayData.isha.iqama) }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      some: 'Maghrib   '
    }
  },
  computed: {
    ...mapGetters([
      'getCurrTime',
      'getCounter',
      'getCurrDayData'
    ])
  },
  methods: {
    getTime (tTime) {
      const hours = this.formatTime(String(tTime).split(":")[0])
      const mins = this.formatTime(String(tTime).split(":")[1])
      return hours + " : " + mins
    },
    formatTime (t) {
      let ret = ''
      if (Number(t) < 10 && Number(t) >0 ) {
        ret = '0'
      }
      return ret + String(t)
    }
  }
}
</script>
