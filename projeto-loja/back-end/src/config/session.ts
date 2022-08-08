import session from 'express-session';

export const sessionOptions = session({
  secret: `segredoDaSessao$1s4asc%#`,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 10, // 10 minutos
    httpOnly: true
  }
})