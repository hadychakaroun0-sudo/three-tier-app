const API = "http://localhost:5000/login";  // ثابت على localhost

document.getElementById('login-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  try {
    const res = await fetch(API, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });
    const data = await res.json();
    document.getElementById('result').textContent = res.ok
      ? "Welcome, " + data.student_name
      : data.error;
  } catch (err) {
    document.getElementById('result').textContent = "Error: " + err;
  }
});
