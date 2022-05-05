const KoaRouter = require('koa-router');

const router = new KoaRouter();

const Cart = require('./../model/cart');

router.post('/cart/add', async (ctx) => {

  //create a new cart

  const cart = new Cart({

      cartName: ctx.request.body.cartName,

      address : ctx.request.body.address,

      phoneNumber: ctx.request.body.phoneNumber,

      email : ctx.request.body.email,    

  });

database

  await cart.save();

  ctx.body = {

      message: 'Cart added successfully'

  };

});

router.get('/cart/view', async (ctx) => {

  const cart = await Cart.find();

  ctx.body = cart;

  }

);

router.put('/cart/edit/:id', async (ctx) => {

    const cart = await Cart.findByIdAndUpdate(ctx.params.id, ctx.request.body);
  
    ctx.body = cart;
  
  });
  
  router.delete('/cart/delete/:id', async (ctx) => {
  
    const cart = await Cart.findByIdAndDelete(ctx.params.id);
  
    ctx.body = cart;
  
  });
  
  module.exports = router;

 