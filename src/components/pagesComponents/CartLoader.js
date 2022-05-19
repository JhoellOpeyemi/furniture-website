const CartLoader = () => {
  return (
    <div className="cart-loader-container">
      <svg
        width="58"
        height="58"
        viewBox="0 0 58 58"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M51.6561 31.7188C49.8436 40.7812 43.0105 49.3145 33.4224 51.2213C28.7461 52.1525 23.8952 51.5847 19.5604 49.5987C15.2256 47.6126 11.6279 44.3096 9.27952 40.1599C6.93115 36.0102 5.95185 31.2253 6.48107 26.4867C7.01029 21.748 9.02104 17.2971 12.227 13.7678C18.8028 6.525 29.9061 4.53125 38.9686 8.15625"
          stroke="#E2BD92"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.8438 28.0938L29.9062 37.1562L51.6562 13.5938"
          stroke="#E2BD92"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <p>Product Added To Cart</p>
    </div>
  );
};

export default CartLoader;
