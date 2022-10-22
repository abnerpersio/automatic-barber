import './infra/config/env';
import { logger } from './infra/config/logger';
import { startRunners } from './infra/runners/start';
import { server } from './server';

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => logger.info(`Server running at ${PORT}`));

startRunners();
