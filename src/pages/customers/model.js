import { getCustomers, queryCustomers } from './service';
const initialFilter = {
  name: '',
  orders_count: '',
};
const CustomersModel = {
  namespace: 'customers',
  state: {
    Customers: [],
    filter: initialFilter,
  },
  effects: {
    *fetch({}, { call, put, select }) {
      const { customers } = yield select();
      let parameters = '?';
      if (customers.filter.orders_count !== '') {
        parameters = parameters + 'orders_count=' + customers.filter.orders_count + '&';
      }
      const res_customers = yield call(queryCustomers, parameters);
      yield put({
        type: 'changeCustomers',
        payload: res_customers.data.customers,
      });
    },
    *byname({}, { call, put, select }) {
      const { customers } = yield select();
      let parameters = '?';
      if (customers.filter.name !== '') {
        parameters = parameters + 'query=' + customers.filter.name + '&';
      }
      const request = yield call(getCustomers, parameters);
      yield put({
        type: 'changeCustomers',
        payload: request.data.customers,
      });
    },
  },

  reducers: {
    changeCustomers(state, { payload }) {
      //获取数据
      return {
        ...state,
        Customers: payload,
      };
    },
    query_Customers(state, action) {
      //通用过滤器
      return {
        ...state,
        filter: {
          ...state.filter,
          [action.payload.name]: action.payload.value,
        },
      };
    },
    resetFilter(state, action) {
      //重置过滤器
      return {
        ...state,
        filter: initialFilter,
      };
    },
  },
};
export default CustomersModel;
