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
import axios from 'axios'
var apiURL = 'https://api.github.com/repos/vuejs/vue/commits?access_token=e0c46e3543e2618353bc4d392e4f6016910622d0&per_page=3&sha='

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
      axios.get(apiURL + this.currentBranch).then(response => {
        this.commits = response.data
      })
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
