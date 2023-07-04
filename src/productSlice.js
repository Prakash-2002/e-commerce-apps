import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
export const fetchProducts = createAsyncThunk("fetchProduct", async () => {
  const res = await fetch(
    "https://my-json-server.typicode.com/Prakash-2002/ECOM/Products"
  );
  return res.json();
});

const productSlice = createSlice({
  name: "products",
  initialState: {
    isLoding: false,
    data: [],
    isError: false,
  },
  reducers: {
    addProduct: (state, action) => {
     state.data.push(action.payload);
    },
    removeProduct:(state,action)=>{
      const filterRemove =state.data.filter((item)=>item.id !== action.payload)
       console.log("filterRemove",filterRemove)
        state.data = filterRemove
      // console.log(action.payload); 
    },
    editProduct:(state,action)=>{
      const findElement = state.data.findIndex((item)=>item.id !== action.payload.id)
      state.data[findElement] = action.payload
      console.log("findElement",findElement)
      console.log("action payload",action.payload)
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoding = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoding = false;
      // state.data.push(action.payload)
      state.data = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      console.log("isError", action.payload);
      state.isError = true;
    });
  },
});
export const { addProduct,removeProduct,editProduct} = productSlice.actions;
export default productSlice.reducer;
