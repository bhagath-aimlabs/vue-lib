<template>
  <div id="clock">
    <p class="date">{{ date }}</p>
    <p class="time">{{ time }}</p>
</div>
</template>

<script>
export default {
  name: 'Clock',
  data: () => ({
    time: '',
    date: '',
    week: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
  }),
  mounted: function () {
    this.$options.interval = setInterval(this.updateTime, 1000)
    // setInterval(this.updateTime(), 1000)
  },
  methods: {
    zeroPadding: function zeroPadding (num, digit) {
      var zero = ''
      for (var i = 0; i < digit; i++) {
        zero += '0'
      }
      return (zero + num).slice(-digit)
    },
    updateTime: function updateTime () {
      var cd = new Date()
      this.time = this.zeroPadding(cd.getHours(), 2) + ':' + this.zeroPadding(cd.getMinutes(), 2) + ':' + this.zeroPadding(cd.getSeconds(), 2)
      this.date = this.zeroPadding(cd.getFullYear(), 4) + '-' + this.zeroPadding(cd.getMonth() + 1, 2) + '-' + this.zeroPadding(cd.getDate(), 2) + ' ' + this.week[cd.getDay()]
    },
    timer: function () {
      setInterval(this.updateTime(), 1000)
    }
  }
}
</script>

<style></style>
