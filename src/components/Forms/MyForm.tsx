import { FieldValues,  FormProvider,  SubmitHandler, useForm } from "react-hook-form";
type TFormConfig = {
  resolver?: any;
  defaultValues?: Record<string, any>
}
type TProps = {
  children: React.ReactNode;
  onSubmit: SubmitHandler<FieldValues>;

} & TFormConfig;

const MyForm = ({ children, onSubmit, resolver, defaultValues }: TProps) => {

  const formConfig: TFormConfig = {};
  if (resolver) {
    formConfig["resolver"] = resolver
  }
  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues
  }
  const methods = useForm(formConfig);
  const { handleSubmit, reset } = methods;
  const submit = (values: FieldValues) => {
    // console.log(values);
    onSubmit(values);
    reset();
  }
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(submit)} className="space-y-6  px-8 pt-6 pb-8 mb-4 bg-white  rounded">
        {children}
      </form>
    </FormProvider>
  );
};

export default MyForm;