const validators = formData => {
    let errors = {}
    if (!formData.name) {
        errors.name = 'Name is required'
    }
    if (!formData.email) {
        errors.email = 'Email address is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = 'Email address is invalid'
    }
    if (!formData.number) {
        errors.number = 'Phone number is required'
    } else if (
        !/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(formData.number)
    ) {
        errors.number = 'Phone number is invalid'
    }
    if (!formData.subject) {
        errors.subject = 'Subject is required'
    }
    return errors
}
export default validators