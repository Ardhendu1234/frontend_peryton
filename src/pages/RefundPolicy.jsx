import React from 'react';
import StyledHeading from '../components/styledHeading';

const RefundPolicy = () => {
  return (
    <div className="mx-auto px-8 py-8 bg-zinc-950 overflow-hidden">
      <div className='mx-auto'>
        <StyledHeading bg_text="R & R" fg_text="Refund & Returns Policy" />
      </div>
      
      <p className="mb-4"><strong>This is a</strong> Peryton Techs Refund & Returns Policy.</p>

      <h2 className="text-2xl font-semibold text-white mb-4">Overview</h2>

      <ul className="list-disc pl-8 mb-6">
        <li>Our refund and returns policy lasts 30 days. If 30 days have passed since your purchase, we can't offer you a full refund or exchange.</li>
        <li>To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.</li>
        <li>Several types of goods are exempt from being returned. Perishable goods such as food, flowers, newspapers or magazines cannot be returned. We also do not accept products that are intimate or sanitary goods, hazardous materials, or flammable liquids or gases.</li>
      </ul>

      <p className="mb-4">To complete your return, we require a receipt or proof of purchase.</p>
      <p className="mb-4">Please do not send your purchase back to the manufacturer.</p>
      <p className="mb-4">There are certain situations where only partial refunds are granted:</p>

      <ul className="list-disc pl-8 mb-6">
        <li>Book with obvious signs of use</li>
        <li>CD, DVD, VHS tape, software, video game, cassette tape, or vinyl record that has been opened.</li>
        <li>Any item not in its original condition, is damaged or missing parts for reasons not due to our error.</li>
        <li>Any item that is returned more than 30 days after delivery</li>
      </ul>

      <h2 className="text-2xl font-semibold text-white mb-4">Refunds</h2>

      <p className="mb-4">Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.</p>
      <p className="mb-4">If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within a certain amount of days.</p>

      <h3 className="text-xl font-semibold text-white mb-4">Late or missing refunds</h3>

      <p className="mb-4">If you haven't received a refund yet, first check your bank account again.</p>
      <p className="mb-4">Then contact your credit card company, it may take some time before your refund is officially posted.</p>
      <p className="mb-4">Next contact your bank. There is often some processing time before a refund is posted.</p>
      <p className="mb-4">If you've done all of this and you still have not received your refund yet, please contact us at {'{email address}'}.</p>

      <h3 className="text-xl font-semibold text-white mb-4">Sale items</h3>

      <p className="mb-4">Only regular priced items may be refunded. Sale items cannot be refunded.</p>

      <h2 className="text-2xl font-semibold text-white mb-4">Exchanges</h2>

      <p className="mb-4">We only replace items if they are defective or damaged. If you need to exchange it for the same item, send us an email at <strong>info@www.peryton.in</strong> and send your item to: <strong>Innovation center</strong> <strong>Manipal Institute of Technology, MIT Inside Rd, Eshwar Nagar, Manipal, Karnataka 576104</strong>.</p>

      <h2 className="text-2xl font-semibold text-white mb-4">Shipping returns</h2>

      <p className="mb-4">To return your product, you should mail your product to: <strong>Innovation center</strong> <strong>Manipal Institute of Technology, MIT Inside Rd, Eshwar Nagar, Manipal, Karnataka 576104</strong>.</p>
      <p className="mb-4">You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.</p>
      <p className="mb-4">Depending on where you live, the time it may take for your exchanged product to reach you may vary.</p>
      <p className="mb-4">If you are returning more expensive items, you may consider using a trackable shipping service or purchasing shipping insurance. We don't guarantee that we will receive your returned item.</p>

      <h2 className="text-2xl font-semibold text-white mb-4">Need help?</h2>

      <p className="mb-4">Contact us at <strong>info@www.peryton.in</strong> for questions related to refunds and returns.</p>
    </div>
  );
};

export default RefundPolicy;