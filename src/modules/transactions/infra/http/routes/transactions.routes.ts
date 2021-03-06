import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import TransactionsController from '../controllers/TransactionsController';

const transactionsRouter = Router();
const transactionsController = new TransactionsController();

transactionsRouter.use(ensureAuthenticated);
transactionsRouter.get('/', transactionsController.index);
transactionsRouter.post('/', transactionsController.create);

export default transactionsRouter;
