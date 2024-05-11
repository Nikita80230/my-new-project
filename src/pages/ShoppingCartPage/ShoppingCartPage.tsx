import { CartItemsList, FormComponent } from '@/components';
import { StyledShoppingCartPage } from './Styled';
import { useFormik } from 'formik';
// import { useAppDispatch } from '@/hooks/hooks';

export type UserFormData = {
  name: string;
  email: string;
  phone: string;
  address: string;
};

const ShoppingCartPage = () => {
  // const dispatch = useAppDispatch();

  const formik = useFormik<UserFormData>({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      address: '',
    },
    onSubmit: values => {
      console.log(values);

      // dispatch(login(values));
    },
  });

  return (
    <StyledShoppingCartPage onSubmit={formik.handleSubmit}>
      <FormComponent
        touched={formik.touched}
        errors={formik.errors}
        values={formik.values}
        formikChange={formik.handleChange}
      />
      <CartItemsList />
      <div className="totalContainer">
        <h3 className="totalText"> Total price: $1000</h3>
        <button type="submit" className="totalBtn">
          Submit
        </button>
      </div>
    </StyledShoppingCartPage>
  );
};

export default ShoppingCartPage;
