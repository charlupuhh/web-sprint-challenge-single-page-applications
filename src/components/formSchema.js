import * as Yup from 'yup';

const formSchema = Yup.object().shape({
    size: Yup
        .string()
        .oneOf(['small', 'medium', 'large', 'extra-large'])
        .required('Must select a size'),
    sauce: Yup
        .string()
        .oneOf(['Marinara', 'Alfredo', 'Pesto'])
        .required('Must select a sauce'),
    toppings: Yup
        .boolean()
            .oneOf([true], 'asdf'),
    instructions: Yup
        .string()
        .min(0, 'xd')
        .required('actually not tho')
})

export default formSchema