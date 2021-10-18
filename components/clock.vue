<template>
  <div class="text-center text-9xl mb-4">
    <div class="flex flex-col">
      <div class="py-3">
        {{ formatTime((Number(getCurrTime.getHours()) > 12) ? getCurrTime.getHours() - 12 : getCurrTime.getHours()) }}
        {{ getCurrTime.getSeconds() % 2 ? ":" : ":" }}
        {{ formatTime(getCurrTime.getMinutes()) }}
        <p class="inline font-mono text-6xl">{{ (Number(getCurrTime.getHours()) > 12) ? "P" : "A" }}</p>
      </div>

      <div class="text-3xl font-mono">
        {{ getDay }} {{ formatTime(getCurrTime.getDate()) }} {{ getMonth }} {{ getCurrTime.getFullYear() }}
      </div>

      <div class="text-3xl font-mono">
        {{ getCurrDayData.hijri_date }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'getCurrTime',
      'getCurrDayData'
    ]),
    getDay () {
      const daysOfWeek = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ]
      return daysOfWeek[this.getCurrTime.getDay()]
    },
    getMonth () {
      const monthsOfYear = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'June',
        'July',
        'Aug',
        'Sept',
        'Oct',
        'Nov',
        'Dec'
      ]
      return monthsOfYear[this.getCurrTime.getMonth()]
    }
  },
  methods: {
    formatTime (t) {
      let ret = ''
      if (Number(t) < 10) {
        ret = '0'
      }
      return ret + String(t)
    }
  }
}
</script>
