import { create } from "zustand";

export const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({ products }),
    createProducts: async (newProduct) => {
        if (!newProduct.name || !newProduct.price || !newProduct.image) {
            return { success: false, message: "Please fill in the details" };
        }

        const res = await fetch("http://localhost:5000/api/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newProduct)
        })
        const data = await res.json();
        set((state) => ({ products: [...state.products, data.data] }));
        return { success: true, message: "Product created", data: data.data };
    },
    fetchProducts: async () => {
        const res = await fetch('http://localhost:5000/api/products/getall');
        const data = await res.json();
        set({ products: data.data });
    },
    deleteProducts: async (id) => {
        const res = await fetch(`http://localhost:5000/api/products/${id}`, {
            method: "DELETE"
        });

        const data = await res.json();
        if (!data.success) {
            return { success: false, message: data.message };
        };
        set((state) => ({ products: state.products.filter((product) => product._id !== id) }));
        return { success: true, message: data.message };
    },
    updateProducts: async (id, updatedProduct) => {
        const res = await fetch(`http://localhost:5000/api/products/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedProduct)
        });

        const data = await res.json();
        if (!data.success) {
            return { success: false, message: data.message };
        }
        set((state) => ({ products: state.products.map((product) => product._id === id ? data.data : product) }));
        return { success: true, message: data.message, data: data.data };
    }
}
));