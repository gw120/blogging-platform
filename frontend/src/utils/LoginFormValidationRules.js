export default function validate(values) {
    let errors = {};
    if (!values.email) {
        errors.email = 'email address is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'email address is invalid';
    }
    if (!values.password) {
        errors.password = 'password is required';
    }
    return errors;
}