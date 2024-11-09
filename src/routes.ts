import { Router, Request, Response } from 'express';

const router: Router = Router();

router.get('/home', (req: Request, res: Response) => {
  res.send('Home page');
});

router.get('/about', (req: Request, res: Response) => {
  res.send('About page');
});

router.get('/users/:id', (req: Request, res: Response) => {
  res.send(`User ID: ${req.params.id}`);
});

export default router;