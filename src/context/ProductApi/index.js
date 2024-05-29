import { api } from '../api'

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query({
      query: (params) => ({ 
        url: `/products?limit=8`, 
        params 
      }),
      providesTags:["Product"]
    }),
    createProduct: build.mutation({
      query: (body)=> ({
        url: "/",
        method: "POST",
        body
      }),
      invalidatesTags: ["Product"]
    }),
    updateProduct:build.query({
      query: (id)=> ({
        url: `/products/${id}`,
      }),
    }),
    deleteProduct:build.mutation({
      query: (id)=> ({
        url:`/`,
        method: "DELETE"
      }),
      invalidatesTags: ["Product"]
    })
  }),
})

export const {
    useGetProductsQuery,
    useDeleteProductMutation,
  useCreateProductMutation,
  useUpdateProductQuery
} = productApi