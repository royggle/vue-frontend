<template>
  <nav class="nav">
    <ul>
      <li><h2><router-link :to="{name: 'Members'}" active-class="active">Members</router-link></h2></li>
      <li><h2><router-link :to="{path: '/search'}" active-class="active">Search</router-link></h2></li>
    </ul>
  </nav>
</template>
