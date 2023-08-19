import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./AddProductForm.css";

const validationSchema = Yup.object().shape({
  productName: Yup.string().required("Product Name is required"),
  chemicalName: Yup.string().required("Chemical Name is required"),
  price: Yup.number().required("Price is required"),
  category: Yup.string().required("Category is required"),
  companyName: Yup.string().required("Company Name is required"),
  expiryDate: Yup.date().required("Expiry Date is required"),
  benefit: Yup.string().required("Benefit is required"),
  targetInsect: Yup.string().required("Target Insect is required"),
  weight: Yup.string().required("Weight is required"),
  image: Yup.string().required("Image is required"),
});

const AddProductForm = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    // Simulate form submission, replace with actual submission logic
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <div className="container">
      <div className="Header">
        <h2>Add Product</h2>
      </div>
      <Formik
        initialValues={{
          productName: "",
          chemicalName: "",
          price: "",
          category: "",
          companyName: "",
          expiryDate: "",
          benefit: "",
          targetInsect: "",
          weight: "",
          image: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="productName">Product Name</label>
              <Field type="text" name="productName" />
              <ErrorMessage
                name="productName"
                component="div"
                className="error-message"
              />

              <label htmlFor="chemicalName">Chemical Name</label>
              <Field type="text" name="chemicalName" />
              <ErrorMessage
                name="chemicalName"
                component="div"
                className="error-message"
              />

              <label htmlFor="companyName">Company Name</label>
              <Field type="text" name="companyName" />
              <ErrorMessage
                name="companyName"
                component="div"
                className="error-message"
              />

              <label htmlFor="catogery">Catogery</label>
              <Field type="text" name="catogery" />
              <ErrorMessage
                name="catogery"
                component="div"
                className="error-message"
              />

              <label htmlFor="expiryDate">Expiry Date</label>
              <Field type="date" name="expiryDate" />
              <ErrorMessage
                name="expiryDate"
                component="div"
                className="error-message"
              />

              <label htmlFor="quantity">Quantity</label>
              <Field type="number" name="quantity" />
              <ErrorMessage
                name="quantity"
                component="div"
                className="error-message"
              />

              <label htmlFor="benefits">Benefits</label>
              <Field type="text" name="benefits" />
              <ErrorMessage
                name="benefits"
                component="div"
                className="error-message"
              />

              <label htmlFor="targetInsect">Target Insect</label>
              <Field type="text" name="targetInsect" />
              <ErrorMessage
                name="targetInsect"
                component="div"
                className="error-message"
              />

              <label htmlFor="price">Price</label>
              <Field type="number" name="price" />
              <ErrorMessage
                name="price"
                component="div"
                className="error-message"
              />

              <label htmlFor="weight">Weight</label>
              <Field type="number" name="weight" />
              <ErrorMessage
                name="weight"
                component="div"
                className="error-message"
              />

              <label htmlFor="addImage">Add Image</label>
              <Field type="file" name="addImage" />
              <ErrorMessage
                name="addImage"
                component="div"
                className="error-message"
              />
            </div>

            {/* Repeat similar Field and ErrorMessage components for other form fields */}

            <button type="submit" disabled={isSubmitting}>
              Add Product
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddProductForm;
