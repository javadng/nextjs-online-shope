import classes from './billingDetail.module.scss';

const BillingDetail = props => {
  return (
    <div className={classes.billing}>
      <h1 className={classes.title}>Billing Detail</h1>
      <div className={classes['form-row']}>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
      </div>
      <div className={classes['form-row']}>
        <input type="email" placeholder="Email" />
        <input type="phone" placeholder="Phone" />
      </div>
      <div className={classes['form-row']}>
        <input type="text" placeholder="Post Code" />
        <input type="text" placeholder="City / Town" />
      </div>
      <div className={classes['form-row']}>
        <input type="text" placeholder="Your Country" />
        <input type="text" placeholder="Your City" />
        <textarea placeholder="Your full address" rows={4} cols={50} />
      </div>
    </div>
  );
};

export default BillingDetail;
