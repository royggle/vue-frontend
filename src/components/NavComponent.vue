<template>
  <nav class="nav">
    <ul>
      <li><h2><router-link :to="{name: 'Members'}" active-class="active">Member</router-link></h2></li>
      <li><h2><router-link :to="{path: '/board'}" active-class="active">Q & A</router-link></h2></li>
    </ul>
  </nav>
</template>
