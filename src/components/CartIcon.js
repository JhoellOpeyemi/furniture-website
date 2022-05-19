import React, { useContext } from "react";

import { CartContext } from "../contexts/CartContext";

const CartIcon = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <>
      <svg
        width="55"
        height="55"
        viewBox="0 0 55 55"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M49.5698 37.6997H17.585L19.1909 34.4287L45.8745 34.3804C46.7769 34.3804 47.5503 33.7358 47.7114 32.8442L51.4067 12.1602C51.5034 11.6177 51.3584 11.0591 51.0039 10.6348C50.8287 10.4259 50.6102 10.2577 50.3635 10.1418C50.1167 10.0259 49.8478 9.96498 49.5752 9.96338L15.6299 9.85059L15.3398 8.48633C15.1572 7.61621 14.373 6.98242 13.4814 6.98242H5.18311C4.68026 6.98242 4.198 7.18218 3.84243 7.53775C3.48687 7.89331 3.28711 8.37557 3.28711 8.87842C3.28711 9.38127 3.48687 9.86352 3.84243 10.2191C4.198 10.5747 4.68026 10.7744 5.18311 10.7744H11.9453L13.2129 16.8008L16.3335 31.9097L12.3159 38.4678C12.1073 38.7494 11.9816 39.0837 11.9531 39.433C11.9247 39.7824 11.9945 40.1327 12.1548 40.4443C12.4771 41.0835 13.127 41.4863 13.8467 41.4863H17.2197C16.5006 42.4414 16.1122 43.6048 16.1133 44.8003C16.1133 47.8403 18.584 50.311 21.624 50.311C24.6641 50.311 27.1348 47.8403 27.1348 44.8003C27.1348 43.6025 26.7373 42.437 26.0283 41.4863H34.6812C33.9621 42.4414 33.5737 43.6048 33.5747 44.8003C33.5747 47.8403 36.0454 50.311 39.0854 50.311C42.1255 50.311 44.5962 47.8403 44.5962 44.8003C44.5962 43.6025 44.1987 42.437 43.4897 41.4863H49.5752C50.6172 41.4863 51.4712 40.6377 51.4712 39.5903C51.4681 39.088 51.2664 38.6073 50.9102 38.2531C50.554 37.8989 50.0722 37.7 49.5698 37.6997ZM16.4194 13.5889L47.3462 13.6909L44.3169 30.6528L20.0234 30.6958L16.4194 13.5889ZM21.624 46.4976C20.6895 46.4976 19.9268 45.7349 19.9268 44.8003C19.9268 43.8657 20.6895 43.103 21.624 43.103C22.5586 43.103 23.3213 43.8657 23.3213 44.8003C23.3213 45.2504 23.1425 45.6821 22.8242 46.0004C22.5059 46.3187 22.0742 46.4976 21.624 46.4976ZM39.0854 46.4976C38.1509 46.4976 37.3882 45.7349 37.3882 44.8003C37.3882 43.8657 38.1509 43.103 39.0854 43.103C40.02 43.103 40.7827 43.8657 40.7827 44.8003C40.7827 45.2504 40.6039 45.6821 40.2856 46.0004C39.9673 46.3187 39.5356 46.4976 39.0854 46.4976Z"
          fill="#EEEEEE"
        />
      </svg>
      <div className="number-in-cart">
        <p>{cartItems.length}</p>
      </div>
    </>
  );
};

export default CartIcon;
