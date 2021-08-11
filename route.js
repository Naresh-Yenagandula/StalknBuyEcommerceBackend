const Express = require('express');
const productController = require('./controllers/products.controller');
const userController = require('./controllers/user.controller');

const productRouter = Express.Router();
const userRouter = Express.Router();

productRouter.get('/product/:id', productController.fetchById)
productRouter.get('/categories', productController.fetchProductCategory)
productRouter.get('/new', productController.fetchNewproducts)
productRouter.get('/popular', productController.fetchPopularProducts)
productRouter.get('/distinct', productController.distinctData)
productRouter.get('/popular/categories', productController.fetchProductCategory)
productRouter.get('/new/categories', productController.fetchProductCategory)

userRouter.post('/createAcc', userController.signUp);
userRouter.post('/login',userController.login);

const routes =(app)=>
{
    app.use("/product", productRouter);
    app.use("/user", userRouter);
}
module.exports = routes;