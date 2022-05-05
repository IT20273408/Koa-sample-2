const KoaRouter = require('koa-router');

const router = new KoaRouter();

const Trader = require('./../model/trader');

router.post('/trader/add', async (ctx) => {

  //create a new trader

  const trader = new Trader({

    traderId: ctx.request.body.num,

    traderName : ctx.request.body.name,

      phoneNumber: ctx.request.body.phoneNumber,

      email : ctx.request.body.email,    

  });

database

  await trader.save();

  ctx.body = {

      message: 'Trader added successfully'

  };

});

router.get('/trader/view', async (ctx) => {

  const trader = await Trader.find();

  ctx.body = trader;

  }

);

router.put('/trader/edit/:id', async (ctx) => {

    const trader = await Trader.findByIdAndUpdate(ctx.params.id, ctx.request.body);
  
    ctx.body = trader;
  
  });
  
  router.delete('/trader/delete/:id', async (ctx) => {
  
    const trader = await Trader.findByIdAndDelete(ctx.params.id);
  
    ctx.body = trader;
  
  });
  
  module.exports = router;

 