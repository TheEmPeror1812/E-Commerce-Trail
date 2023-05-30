import stripe from "stripe";

const stripeConfig = stripe(process.env.STRIPE_SECRET);

export const processPayment = async (req, res) => {
  try {
    const mypayment = await stripeConfig.paymentIntents.create({
      amount: req.body.amount,
      currency: "inr",
      metadata: { company: "Ecommerce"  },
    });
    res.status(200).json({
      success: true,
      client_secret: mypayment.client_secret,
    });
  
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error,
    });
  }
};

export const sendStripeApiKey = async (req, res) => {
    res.status(200).json({
        stripeApiKey: process.env.STRIPE_API_KEY
    })
  };
  
