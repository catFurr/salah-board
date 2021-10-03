<template>
  <div class="flex flex-row">
    <div class="absolute text-center w-full">
      <p class="text-3xl"> مسجد ابراهيم  Masjid Ibrahim </p>
    </div>
    <!-- eslint-disable-next-line max-len -->
    <!-- <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a03a1a4c-fd00-49d3-a15f-f731e712bb74/d2kk29m-956d1d47-0328-44a6-997d-dd4893b9a992.jpg/v1/fill/w_900,h_600,q_75,strp/google_cat_xiii_by_tsu84.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sIm9iaiI6W1t7InBhdGgiOiIvZi9hMDNhMWE0Yy1mZDAwLTQ5ZDMtYTE1Zi1mNzMxZTcxMmJiNzQvZDJrazI5bS05NTZkMWQ0Ny0wMzI4LTQ0YTYtOTk3ZC1kZDQ4OTNiOWE5OTIuanBnIiwid2lkdGgiOiI8PTkwMCIsImhlaWdodCI6Ijw9NjAwIn1dXX0.9X8iblDn0sHKcasAjYvmVXUPgzbhg0pDyiKSyZqPKGc"> -->

    <div class="flex flex-col p-5 px-6 flex-shrink-0">
      <clock />
      <times />
      <div class="text-center font-bold py-4 text-2xl">1st Jumah at <p class="text-red-500 inline">1:30 pm</p> 2nd Jumah at <p class="text-red-500 inline">2:00 pm</p></div>
    </div>

    <div class="p-5 text-4xl text-center flex-grow grid">
      <div class="flex flex-col">
        <div class="flex flex-row">
          <div class="flex-grow" />
          <div>
            <p class="font-mono text-2xl text-center">15188 NW<br />Central Dr, Suite<br />#208 (2nd floor),<br />Portland, OR</p>
          </div>
        </div>

        <div class="justify-center  font-extrabold items-center flex flex-grow">
          {{ getCurrentAd }}
        </div>

        <div class="flex flex-row">
          <div class="flex-grow" />
          <div>
            <img src="~/assets/qrcode_masjid-ibrahim.com.png" width="200"/>
            <p>Donate Here</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      ads: [
        'Daily Quran class for kids Mon to Thurs 5.30 to 7.00 PM',
        'Special Friday Lecture series on Fridays after Asr Jamah',
        'Daily Short Lecture after Isha\'a',
        'Adults and Youth Quran Class Tue and Thurs after Maghrib',
      ]
    }
  },
  computed: {
    ...mapGetters([
      'getCounter'
    ]),

    getCurrentAd () {
      const currIndex = Math.floor(this.getCounter / 30) % this.ads.length
      if (currIndex < 0 || currIndex > this.ads.length) {
        return ''
      }
      return this.ads[currIndex]
    }
  }
}
</script>
