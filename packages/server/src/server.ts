import httpServer from './app';

const PORT = 6060;
httpServer.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
