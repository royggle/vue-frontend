<template>
  <div>
    <h3>Q ＆ A 掲示板</h3>
    <hr class="d-block" />
    <div>
      <h4>Read</h4>
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
            <td>
              <button >Update</button>
              <button >Delete</button>
            </td>
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

