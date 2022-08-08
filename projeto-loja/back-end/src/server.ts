import app from './app';

app.on('Conectou', () => app.listen(3055, () => console.log('Escutando na porta 3055')));