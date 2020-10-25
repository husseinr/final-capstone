const express = require("express");
require('dotenv').config()
const router = express.Router();
const bodyParser = require('body-parser')
const fs = require('fs');
router.use(bodyParser.json());
const axios = require('axios');
const Stripe = require('stripe');
const stripe = new Stripe(process.env.STRIPE_KEY)

router.post("/", async (req, res) => { 

        const {id, amount} = req.body;
    
        try {
            const payment = await stripe.paymentIntents.create({
                amount,
                currency: 'CAD',
                description: '',
                payment_method: id,
                confirm: true
            });
    
            console.log(payment)
    
            return res.status(200).json({
                confirm: 'payment confirmed'
            })
        }
        catch(error) {
            console.log(error);
            return res.status(400).json({
              message: error.message
            });
        }
    });
    
    
    module.exports = router; 