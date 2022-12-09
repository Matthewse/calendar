const getRequiredMessage = (message: string) => {
    return [
        {
            required: true,
            message,
        },
    ];
};

export default getRequiredMessage;
