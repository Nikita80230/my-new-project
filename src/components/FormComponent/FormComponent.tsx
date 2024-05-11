import { FC } from 'react';

import InputGroup from '../InputGroup/InputGroup';

import { UserFormData } from '@/types/User';

import { StyledFormComponent } from './Styled';

type TouchesFields = Record<keyof UserFormData, boolean>;
type ErrorsFields = Record<keyof UserFormData, string>;

type Props = {
  touched: Partial<TouchesFields>;
  errors: Partial<ErrorsFields>;
  values: UserFormData;
  formikChange: (e: React.ChangeEvent<any>) => void;
};

const FormComponent: FC<Props> = ({ values, formikChange, errors, touched }) => {
  return (
    <StyledFormComponent className="formComponent">
      <InputGroup
        required
        type="text"
        name="name"
        labelText="name"
        value={values.name}
        onChange={formikChange}
        error={errors.name}
        touched={touched.name}
      />
      <InputGroup
        required
        type="email"
        name="email"
        labelText="email"
        value={values.email}
        onChange={formikChange}
        error={errors.email}
        touched={touched.email}
      />
      <InputGroup
        required
        type="text"
        name="phone"
        labelText="phone"
        value={values.phone}
        onChange={formikChange}
        error={errors.phone}
        touched={touched.phone}
      />
      <InputGroup
        required
        type="text"
        name="address"
        labelText="address"
        value={values.address}
        onChange={formikChange}
        error={errors.address}
        touched={touched.address}
      />
    </StyledFormComponent>
  );
};

export default FormComponent;
