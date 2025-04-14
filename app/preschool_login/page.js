<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Login</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      display: flex;
      height: 100vh;
      justify-content: center;
      align-items: center;
      background-color: #f2f2f2;
    }
    .login-container {
      background-color: #fff;
      padding: 30px;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      width: 300px;
    }
    .login-container h2 {
      margin-bottom: 20px;
      text-align: center;
    }
    .login-container input {
      width: 100%;
      padding: 10px;
      margin: 8px 0;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    .login-container button {
      width: 100%;
      padding: 10px;
      background-color: #4CAF50;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    .login-container button:hover {
      background-color: #45a049;
    }
    .error {
      color: red;
      margin-top: 10px;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="login-container">
    <h2>Login</h2>
    <input type="text" id="username" placeholder="Username" />
    <input type="password" id="password" placeholder="Password" />
    <button onclick="checkLogin()">Login</button>
    <div class="error" id="error-message"></div>
  </div>

  <script>
    function checkLogin() {
      const user = document.getElementById("username").value;
      const pass = document.getElementById("password").value;
      const errorMessage = document.getElementById("error-message");

      if (user === "throughchildvision" && pass === "Mamta#1") {
        window.location.href = "/throughchildvision";
      } else {
        errorMessage.textContent = "Invalid username or password.";
      }
    }
  </script>
</body>
</html>
