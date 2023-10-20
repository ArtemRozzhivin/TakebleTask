import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className='app'>
      <h2 className='font-bold text-4xl mb-5'>Referrals - 345</h2>
      <table className='table'>
        <thead className='table_head'>
          <tr className=''>
            <th className='table_h'>Referal event</th>
            <th className='table_h'>Advocate</th>
            <th className='table_h'>Friend</th>
            <th className='table_h'>Referral status</th>
          </tr>
        </thead>
        <tbody>
          {/* First row */}
          <tr className='pt-5 border-t border-t-gray-300'>
            <td className='table_firstRow'>Purchase</td>
            <td className='table_firstRow'>autouser23926@gmail.com</td>
            <td className='table_firstRow'>fr58272@gmail.com</td>
            <td className='table_firstRow'>Pending</td>
          </tr>
          <tr>
            <td className='table_date'>06/17/2020 at 17.13 PM PDT</td>
            <td>Advocate</td>
            <td>Friend</td>
            <td className='table_status'>Passed fraud checks</td>
          </tr>
          <tr>
            <td className='table_price'>$120.00</td>
          </tr>

          {/* Second row */}
          <tr className='pt-5 border-t border-t-gray-300'>
            <td className='table_firstRow'>Purchase</td>
            <td className='table_firstRow'>ad0379118142@gmail.com</td>
            <td className='table_firstRow'>fr0379118142@gmail.com</td>
            <td className='table_firstRow'>Flegged</td>
          </tr>
          <tr>
            <td className='table_date'>07/10/2020 at 4:05 AM PDT</td>
            <td>Advocate</td>
            <td>Friend</td>
            <td className='table_status-red'>Marked as fraud</td>
          </tr>
          <tr>
            <td className='table_price'>$100.00</td>
          </tr>

          {/* Third row */}
          <tr className='pt-5 border-t border-t-gray-300'>
            <td className='table_firstRow'>Purchase</td>
            <td className='table_firstRow'>ad56991@gmail.com</td>
            <td className='table_firstRow'>fr94250@gmail.com</td>
            <td className='table_firstRow'>Approved</td>
          </tr>
          <tr>
            <td className='table_date'>06/09/2020 at 12:42 PM PDT</td>
            <td>Advocate</td>
            <td>Friend</td>
            <td className='table_status'>Passed fraud checks</td>
          </tr>
          <tr>
            <td className='table_price'>$28.00</td>
          </tr>

          {/* Fourth row */}
          <tr className='pt-5 border-t border-t-gray-300'>
            <td className='table_firstRow'>Purchase</td>
            <td className='table_firstRow'>user.to.be.blocked92187</td>
            <td className='table_firstRow'>user.to.be.blocked2682</td>
            <td className='table_firstRow'>Blocked</td>
          </tr>
          <tr>
            <td className='table_date'>08/07/2020 at 4:20 AM PDT</td>
            <td>Advocate</td>
            <td>Friend</td>
            <td className='table_status-red'>Marked as fraud</td>
          </tr>
          <tr>
            <td className='table_price'>$100.00</td>
          </tr>

          {/* Fifth row */}
          <tr className='pt-5 border-t border-t-gray-300'>
            <td className='table_firstRow'>Purchase</td>
            <td className='table_firstRow'>ad0693677382@gmail.com</td>
            <td className='table_firstRow'>fr0693677382@gmail.com</td>
            <td className='table_firstRow'>Voided</td>
          </tr>
          <tr>
            <td className='table_date'>06/09/2020 at 2:08 AM PDT</td>
            <td>Advocate</td>
            <td>Friend</td>
            <td className='table_status-red'>Marked as fraud</td>
          </tr>
          <tr>
            <td className='table_price'>$100.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default App;
