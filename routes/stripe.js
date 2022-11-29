const router = require("express").Router();

const KEY = process.env.STRIPE_KEY;
const stripe = require("stripe")(
  "sk_test_51LaHvlEnTY5UhwQ6WPl8Ek6l8ulAwnWrOywtz3h0d5bkOaD8j3oFBlW1YnfJ416MmDZsCfoWDHVzZcRDYysFrw6Q00fgyaxDHY"
);

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
