export function updateProductRequest(data) {
  return {
    type: '@product/UPDATE_PRODUCT_REQUEST',
    payload: { data },
  }
}

export function updateProductSuccess(product) {
  return {
    type: '@product/UPDATE_PRODUCT_SUCCESS',
    payload: { product },
  };
}

export function updateProductFailure() {
  return {
    type: '@product/UPDATE_PRODUCT_FAILURE',
  };
}