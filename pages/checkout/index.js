import OrderSection from "../../components/CheckOut/OrderSection";
import BillingDetail from "../../components/CheckOut/BillingDetail";
const Checkout = props => {
  return (
    <div className="orderContainer">
      <OrderSection />
      <BillingDetail />
    </div>
  );
};

export default Checkout;
