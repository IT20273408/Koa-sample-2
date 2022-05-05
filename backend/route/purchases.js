const KoaRouter = require('koa-router');

const router = new KoaRouter();

const Purchase = require('./../model/purchase');

router.post('/purchase/add', async (ctx) => {

  //create a new purchase

  const purchase = new Purchase({

      purchaseId: ctx.request.body.num,

      purchaseName : ctx.request.body.name,

      price: ctx.request.body.price,

      quantity : ctx.request.body.quantity,    

  });

database

  await purchase.save();

  ctx.body = {

      message: 'Purchase added successfully'

  };

});

router.get('/purchase/view', async (ctx) => {

  const purchase = await Purchase.find();

  ctx.body = purchase;

  }

);

router.put('/purchase/edit/:id', async (ctx) => {

    const purchase = await Purchase.findByIdAndUpdate(ctx.params.id, ctx.request.body);
  
    ctx.body = purchase;
  
  });
  
  router.delete('/purchase/delete/:id', async (ctx) => {
  
    const purchase = await Purchase.findByIdAndDelete(ctx.params.id);
  
    ctx.body = purchase;
  
  });
  
  module.exports = router;

 