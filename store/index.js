// export const strict = false

export const state = () => ({
  counter_secs: 0,
  curr_time: new Date(),

  curr_day_data: {
    fajr: {
      athan: 'ERR',
      iqama: 'ERR'
    },
    sunrise: 'ERR',
    dhuhr: {
      athan: 'ERR',
      iqama: 'ERR'
    },
    asr: {
      athan1: 'ERR',
      athan2: 'ERR',
      iqama: 'ERR'
    },
    maghrib: {
      athan: 'ERR',
      iqama: 'ERR'
    },
    isha: {
      athan: 'ERR',
      iqama: 'ERR'
    },
    is_ramadan: false,
    hijri_date: 'ERR'
  }
})

export const mutations = {
  UPDATE_TIME (state) {
    state.counter_secs++
    state.curr_time = new Date()
  },
  UPDATE_TIMES (state, newV) {
    state.curr_day_data.fajr.athan = newV.fajr_begins
    state.curr_day_data.fajr.iqama = newV.fajr_jamah
    state.curr_day_data.sunrise = newV.sunrise

    state.curr_day_data.dhuhr.athan = newV.zuhr_begins
    state.curr_day_data.dhuhr.iqama = newV.zuhr_jamah
  
    state.curr_day_data.asr.athan1 = newV.asr_mithl_1
    state.curr_day_data.asr.athan2 = newV.asr_mithl_2
    state.curr_day_data.asr.iqama = newV.asr_jamah

    state.curr_day_data.maghrib.athan = newV.maghrib_begins
    state.curr_day_data.maghrib.iqama = newV.maghrib_jamah

    state.curr_day_data.isha.athan = newV.isha_begins
    state.curr_day_data.isha.iqama = newV.isha_jamah

    state.curr_day_data.is_ramadan = newV.is_ramadan
    state.curr_day_data.hijri_date = newV.hijri_date
  }
}

export const getters = {
  getCurrTime: state => state.curr_time,
  getCounter: state => state.counter_secs,
  getCurrDayData: state => state.curr_day_data,

  // getTime: state => new Date(state.curr_time).getTime(),
  getDate: state => state.curr_time.getDate(),
  getDay: state => state.curr_time.getDay()

}

export const actions = {
  async onInit({ commit, getters }) {
    function updateTime () {
      commit('UPDATE_TIME')
    }
    setInterval(updateTime, 1000)
    updateTime()

    const fSheet = await this.$content('timings/prayer_schedule')
    .fetch()
    .catch((err) => {
      error({ statusCode: 404, message: 'Spreadsheet not found' + String(err) })
    })

    // console.log(fSheet)
    const today = fSheet.body.filter(row => new Date(row.d_date).getTime() === getters.getCurrTime.setHours(0,0,0,0))
    console.log(today)

    if (today.length > 0) {
      commit('UPDATE_TIMES', today[0])
    }
  }
}
