document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 't8a' && password === 't88a') {
        document.getElementById('message').textContent = '로그인 성공!';
        document.getElementById('message').style.color = 'green';
    } else {
        document.getElementById('message').textContent = '아이디 또는 비밀번호가 잘못되었습니다.';
    }
});
