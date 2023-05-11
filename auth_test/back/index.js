// 필요한 패키지 임포트
const express = require("express");
const session = require("express-session");

// Express 앱 생성
const app = express();

// 세션 미들웨어 설정
app.use(
  session({
    secret: "mySecretKey", // 세션에 사용될 암호화 키
    resave: false,
    saveUninitialized: false,
  })
);

app.get("/", (req, res) => {
  res.status(200).send("200 ok");
});
// 로그인 라우트
app.post("/login", (req, res) => {
  // 사용자 인증 로직
  // ...

  // 세션에 사용자 정보 저장
  req.session.user = { id: "user123", name: "John" };

  res.status(200).send("Logged in successfully");
});

// 로그아웃 라우트
app.post("/logout", (req, res) => {
  // 세션 삭제
  req.session.destroy();

  res.status(200).send("Logged out successfully");
});

// 인증된 라우트
app.get("/protected", (req, res) => {
  // 세션에서 사용자 정보 가져오기
  const user = req.session.user;

  // 사용자 인증 체크
  if (user) {
    res.status(200).json({ message: "Authorized", user });
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
});

// Express 서버 시작
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
