import { Router } from 'express';
import * as userSvc from '../services/user-services.js';

const userRouter = Router();

userRouter.get('/users-list', 
    userSvc.getAllUsers
);

userRouter.get('/user-by-email/:email', 
    userSvc.userByEmail
);

userRouter.get('/user-by-nombre/:nombre', 
    userSvc.userBynombre
);

userRouter.post('/create-user', 
    userSvc.createUser
);

userRouter.put('/update-user', 
    userSvc.updateUser
);

userRouter.delete('/delete-user/:id', 
    userSvc.deleteUser
);

export default userRouter;