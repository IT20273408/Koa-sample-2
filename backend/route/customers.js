const KoaRouter = require('koa-router');

const router = new KoaRouter();

const Customer = require('./../model/customer');

router.post('/customer/add', async (ctx) => {

  //create a new customer

  const customer = new Customer({

      customerId: ctx.request.body.num,

      customerName : ctx.request.body.name,

      phoneNumber: ctx.request.body.phoneNumber,

      email : ctx.request.body.email,    

  });

database

  await customer.save();

  ctx.body = {

      message: 'Customer added successfully'

  };

});

router.get('/customer/view', async (ctx) => {

  const customer = await Customer.find();

  ctx.body = customer;

  }

);

router.put('/customer/edit/:id', async (ctx) => {

    const customer = await Customer.findByIdAndUpdate(ctx.params.id, ctx.request.body);
  
    ctx.body = customer;
  
  });
  
  router.delete('/customer/delete/:id', async (ctx) => {
  
    const customer = await Customer.findByIdAndDelete(ctx.params.id);
  
    ctx.body = customer;
  
  });
  
  module.exports = router;

 