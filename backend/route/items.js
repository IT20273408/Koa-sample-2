const KoaRouter = require('koa-router');

const router = new KoaRouter();

const Item = require('./../model/item');

router.post('/item/add', async (ctx) => {

  //create a new item

  const item = new Item({

      itemId: ctx.request.body.num,

      itemrName : ctx.request.body.name,

      description : ctx.request.body.description, 

      price: ctx.request.body.price,
 

  });

database

  await item.save();

  ctx.body = {

      message: 'Item added successfully'

  };

});

router.get('/item/view', async (ctx) => {

  const item = await Item.find();

  ctx.body = item;

  }

);

router.put('/item/edit/:id', async (ctx) => {

    const item = await Item.findByIdAndUpdate(ctx.params.id, ctx.request.body);
  
    ctx.body = item;
  
  });
  
  router.delete('/item/delete/:id', async (ctx) => {
  
    const item = await Item.findByIdAndDelete(ctx.params.id);
  
    ctx.body = item;
  
  });
  
  module.exports = router;

 