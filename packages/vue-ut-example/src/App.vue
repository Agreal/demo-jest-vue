<template>
  <div>
    <h1>Latest Vue.js Commits</h1>
    <div class="branches" v-for="(branch, index) in branches" :key="index">
      <input type="radio"
             :id="branch"
             :value="branch"
             name="branch"
             v-model="currentBranch">
      <label :for="branch">{{ branch }}</label>
    </div>
    <p>vuejs/vue@{{ currentBranch }}</p>
    <ul>
      <li v-for="(record, ii) in commits" :key="ii">
        <a :href="record.html_url" target="_blank" class="commit">{{ record.sha.slice(0, 7) }}</a>
        - <span class="message">{{ record.commit.message | truncate }}</span><br>
        by <span class="author"><a :href="record.author.html_url"
                                   target="_blank">{{ record.commit.author.name }}</a></span>
        at <span class="date">{{ record.commit.author.date | formatDate }}</span>
      </li>
    </ul>
  </div>
</template>
<script>
var apiURL = 'https://api.github.com/repos/vuejs/vue/commits?access_token=fc6707ef1317bd65e605173045efe20f7108b0c0&per_page=3&sha='

export default {
  data: function () {
    return {
      branches: ['master', 'dev'],
      currentBranch: 'master',
      commits: null
    }
  },

  created: function () {
    this.fetchData()
  },

  watch: {
    currentBranch: 'fetchData'
  },

  filters: {
    truncate: function (v) {
      var newline = v.indexOf('\n')
      return newline > 0 ? v.slice(0, newline) : v
    },
    formatDate: function (v) {
      return v.replace(/T|Z/g, ' ')
    }
  },

  methods: {
    fetchData: function () {
      var xhr = new XMLHttpRequest()
      var self = this
      xhr.open('GET', apiURL + self.currentBranch)
      xhr.onload = function () {
        self.commits = JSON.parse(xhr.responseText)
        console.log(self.commits[0].html_url)
      }
      xhr.send()
    }
  }
}
</script>
<style>
  body {
    font-family: 'Helvetica', Arial, sans-serif;
  }

  a {
    text-decoration: none;
    color: #f66;
  }

  li {
    line-height: 1.5em;
    margin-bottom: 20px;
  }

  .branches {
    display: inline-block;
  }

  .author, .date {
    font-weight: bold;
  }
</style>
