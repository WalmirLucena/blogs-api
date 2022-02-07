const validateName = async (req, res, next) => {
    const { displayName } = req.body;

    if (typeof displayName !== 'string') {
        return res.status(400).send({ message: '"displayName" must be a string' });
    }

    if (displayName.length < 8) {
        return res.status(400)
        .send({ message: '"displayName" length must be at least 8 characters long' });
    }

    next();
};

const validateEmail = (req, res, next) => {
    const { email } = req.body;
    const regValid = /\S+@\S+\.\S+/;

    if (email === '') {
        return res.status(400).send({ message: '"email" is not allowed to be empty' });
    }

    if (email === undefined) {
        return res.status(400).send({ message: '"email" is required' });
    }

    if (regValid.test(email) === false) {
        return res.status(400).send({ message: '"email" must be a valid email' });
    }

    next();
};

const validatePassword = (req, res, next) => {
    const { password } = req.body;

    if (password === '') {
        return res.status(400).send({ message: '"password" is not allowed to be empty' });
    }

    if (password === undefined) {
        return res.status(400).send({ message: '"password" is required' });
    }

    if (password.length !== 6) {
        return res.status(400).send({ message: '"password" length must be 6 characters long' });
    }

    next();
};

module.exports = {
    validateName,
    validateEmail,
    validatePassword,
};
