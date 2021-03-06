import * as c from '../constant';
import _ from 'lodash';

export const productList = (state = c.INIT_STATE, action) => {
    switch(action.type) {
        case c.PRODUCTS:
            return _.assign({}, state, { 
                products: action.data
            })
        case c.ADD_TO_CART:
         	let products = state.products.filter(product => product !== action.product)
         	return _.assign({}, state, {
         		products: products,
         		selectedProducts:  [ action.product, ...state.selectedProducts ],
         		total: [ action.product.price, ...state.total ]
         	})
        case c.REMOVE_TO_CART:
         	let removeproducts = state.selectedProducts.filter(product => product !== action.product)
         	let sum = state.total.filter(product => product !== action.product.price)
         		return _.assign({}, state ,{
         			selectedProducts: removeproducts,
         			products:  [ action.product, ...state.products ],
         			total: sum
        		})
        case c.REMOVE_ALL_TO_CART:
            let arr2 = [...state.selectedProducts]
            let arr1 = [...state.products]
            arr1.push(...arr2)
          
            return _.assign({}, state, {
                products: arr1,
                selectedProducts: [],
                total: []
            })

        

        default:
            return state;
    }
}
//points.sort(function(a, b){return a-b})
