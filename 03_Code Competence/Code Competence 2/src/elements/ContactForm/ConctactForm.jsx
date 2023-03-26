import { useFormik } from 'formik';
import * as Yup from 'yup';

const onSubmit = (values, actions) => {
    console.log(values);
    console.log(actions);
    alert(
        'First Name: ' +
        values.fname +
        '\nLast Name: ' +
        values.lname +
        '\nEmail: ' +
        values.email +
        '\nQuestion: ' +
        values.message
    );
    actions.resetForm();
};

const ContactForm = () => {

    const formik = useFormik({
        initialValues: {
            fname: '',
            lname: '',
            email: '',
            message: '',
        },
        validationSchema: Yup.object({
            fname: Yup.string().required(
                'The first name field must be filled in'
            ),
            lname: Yup.string().required('The last name field must be filled in'),
            email: Yup.string()
                .email('Invalid email address')
                .required('The email field must be filled in'),
            message: Yup.string().required('The question field must be filled in'),
        }),
        onSubmit,
    });

    return (
        <form id="contactForm" onSubmit={formik.handleSubmit}>
            <div className="row">
                <div className="col">
                    <label htmlFor="fname" className="mt-3">
                        First Name
                    </label>
                    <input
                        type="text"
                        id="fname"
                        name="fname"
                        style={{ backgroundColor: "#B9C1C4" }}
                        value={formik.values.fname}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={
                            formik.errors.fname && formik.touched.fname
                                ? 'form-control mt-1 is-invalid'
                                : 'form-control mt-1'
                        }
                    />
                    {formik.errors.fname && formik.touched.fname && (
                        <small className='text-danger'>{formik.errors.fname}</small>
                    )}
                </div>
                <div className="col">
                    <label htmlFor="lname" className="mt-3">
                        Last Name
                    </label>
                    <input
                        type="text"
                        id="lname"
                        name="lname"
                        style={{ backgroundColor: "#B9C1C4" }}
                        value={formik.values.lname}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={
                            formik.errors.lname && formik.touched.lname
                                ? 'form-control mt-1 is-invalid'
                                : 'form-control mt-1'
                        }
                    />
                    {formik.errors.lname && formik.touched.lname && (
                        <small className='text-danger'>{formik.errors.lname}</small>
                    )}
                </div>
            </div>
            <label htmlFor="email" className="mt-4">
                Email
            </label>
            <input
                type="text"
                id="email"
                name="email"
                style={{ backgroundColor: "#B9C1C4" }}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={
                    formik.errors.email && formik.touched.email
                        ? 'form-control mt-1 is-invalid'
                        : 'form-control mt-1'
                }
            />
            {formik.errors.email && formik.touched.email && (
                <small className='text-danger'>{formik.errors.email}</small>
            )}
            <br/>
            <label htmlFor="message" className="mt-4">
                Your Question
            </label>
            <textarea
                type="text"
                id="message"
                name="message"
                rows={3}
                style={{ backgroundColor: "#B9C1C4" }}
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={
                    formik.errors.message && formik.touched.message
                        ? 'form-control md-textarea mt-1 is-invalid'
                        : 'form-control md-textarea mt-1'
                }
            />
            {formik.errors.message && formik.touched.message && (
                <small className='text-danger'>{formik.errors.message}</small>
            )}
            <br/>
            <button type="submit" className="btnSubmit">
                SUBMIT
            </button>
        </form>
    )
}

export default ContactForm