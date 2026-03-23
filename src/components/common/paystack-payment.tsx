import React, { FC } from 'react';
import { PaystackButton } from 'react-paystack';
import { Toaster, toast } from 'sonner';
import { motion } from 'motion/react'

interface PaystackPaymentProps {
  email: string;
  name: string;
  amount: number;
}
const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY as string

const PaystackPayment: FC<PaystackPaymentProps> = ({ email, amount, name }) => {
  const config = {
    reference: new Date().getTime().toString(),
    email,
    name,
    amount: amount * 100,
    publicKey,
    currency: "GHS"
  };

  const notify = (msg: string) => toast('Here is your toast.');

  const handleSuccess = (reference: any) => {

    notify("Here is you taost")
    console.log(reference);
    // Implement what you want to do with the reference on success
  };

  const handleClose = () => {
    console.log('Payment closed');
    // Implement what you want to do when the payment modal is closed
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <PaystackButton
          className=' group h-full w-full inline-flex items-center gap-2 rounded-full bg-linear-to-r from-primary to-primary px-8 py-4 text-base font-semibold text-white shadow-xl shadow-purple-900/20 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-900/30 hover:-translate-y-1'
          {...config}
          text="Continue to payment"
          onSuccess={handleSuccess}
          onClose={handleClose}
        />
      </motion.div>
      <Toaster />

    </div>
  )
};

export default PaystackPayment;
