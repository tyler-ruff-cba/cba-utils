```js server
export const config = {
  path: '/login',
  metadata: {
    title: 'CBAUtils',
    description: 'The internal software and documentation hub for CBA office tools.'
  }
};
```
<form id="login-form">
  <label for="email">Email</label>
  <input id="email" type="email" required />

  <label for="password">Password</label>
  <input id="password" type="password" required />

  <button type="submit">Sign in</button>
  <p id="login-error" role="alert"></p>
</form>

<script type="module">
  import {
    auth,
    signInWithEmailAndPassword,
  } from "/src/firebase-auth.js";

  const form = document.querySelector("#login-form");
  const error = document.querySelector("#login-error");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    error.textContent = "";

    try {
      await signInWithEmailAndPassword(
        auth,
        document.querySelector("#email").value,
        document.querySelector("#password").value
      );

      window.location.assign("/");
    } catch {
      error.textContent = "Unable to sign in. Check your credentials.";
    }
  });
</script>