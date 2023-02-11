export type FieldsErrors = {
    [field: string]: string[];
}

export default interface ValidatorFieldsInterface<PropsValidated> {
    errors: FieldsErrors;
    validateData: PropsValidated;
    validate(data: any): void;
}