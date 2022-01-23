import controller from '../controllers/calculator';
import express from 'express';
import { validateRequestSchema } from '../middleware/validate-request-schema';

const calculatorRoute = express.Router();

calculatorRoute.post(
    '/calculator',
    controller.validate,
    validateRequestSchema,
    controller.calculate
);

export default calculatorRoute;