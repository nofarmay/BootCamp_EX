import { Router } from 'express';
import { testController } from '../controllers/test.controller.js';

export const testRoute = Router();

testRoute.get('/test', testController);
// testRoute.get('/test', (req, res) => {});
