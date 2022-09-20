import morgan from 'morgan';

const PORT = 5000;

const logger = morgan('combined');

export {PORT, logger};
