const KoaRouter = require('koa-router');

const router = new KoaRouter();

const Promotion = require('./../model/promotion');

router.post('/promotion/add', async (ctx) => {

  //create a new Promotion

  const promotion = new Promotion({

    promotionId: ctx.request.body.num,

    promotionName : ctx.request.body.name,

    promotionPercentage: ctx.request.body.promotionPercentage,

    price : ctx.request.body.price,    

  });

database

  await promotion.save();

  ctx.body = {

      message: 'Promotion added successfully'

  };

});

router.get('/promotion/view', async (ctx) => {

  const promotion = await Promotion.find();

  ctx.body = promotion;

  }

);

router.put('/promotion/edit/:id', async (ctx) => {

    const promotion = await Promotion.findByIdAndUpdate(ctx.params.id, ctx.request.body);
  
    ctx.body = promotion;
  
  });
  
  router.delete('/customer/delete/:id', async (ctx) => {
  
    const promotion = await Promotion.findByIdAndDelete(ctx.params.id);
  
    ctx.body = promotion;
  
  });
  
  module.exports = router;
