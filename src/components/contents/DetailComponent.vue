<template>
  <div>
    <div class="board-container">
    <h3>Q ＆ A 掲示板</h3>
    <button class="write-button">書き込み</button>
    </div>
    <hr class="d-block" />
    <div>
      <h4>ディテール</h4>
      <table>
        <thead>
          <tr>
            <th>Order</th>
            <th>Title</th>
            <th>Writer</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <!-- <tr v-for="(member, index) in " :key="index"> -->
          <tr>
            <td><input type="text" placeholder="ID" /></td>
            <td><input type="text" placeholder="Name"  /></td>
            <td><input type="password" placeholder="Password" /></td>
            <td><input type="text" placeholder="Date" /></td>
          </tr>
        </tbody>
      </table>
    </div>
    <hr class="d-block" />
    <div>
      <h4>Create</h4>
      <input type="text" placeholder="ID"  />
      <input type="text" placeholder="Name"   />
      <input type="password" placeholder="Password"  />
      <button >Create</button>
    </div>
  </div>
</template>
<script></script>

