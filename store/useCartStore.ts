/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import { persist } from "zustand/middleware";

// Định nghĩa cấu trúc 1 món hàng trong giỏ
export interface CartItem {
  _id: string;
  name: string;
  price: number;
  image: any;
  quantity: number;
}

interface CartState {
  cart: CartItem[];
  addToCart: (product: any) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cart: [],

      // Hàm thêm vào giỏ
      addToCart: (product) =>
        set((state) => {
          // Kiểm tra xem sp đã có trong giỏ chưa
          const existingItem = state.cart.find(
            (item) => item._id === product._id
          );
          if (existingItem) {
            // Nếu có rồi thì tăng số lượng
            return {
              cart: state.cart.map((item) =>
                item._id === product._id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          }
          // Nếu chưa có thì thêm mới vào với số lượng là 1
          return { cart: [...state.cart, { ...product, quantity: 1 }] };
        }),

      // Hàm xóa khỏi giỏ
      removeFromCart: (productId) =>
        set((state) => ({
          cart: state.cart.filter((item) => item._id !== productId),
        })),

      // Hàm xóa sạch giỏ
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "mnfilm-cart-storage", // Tên lưu trong Local Storage
    }
  )
);
