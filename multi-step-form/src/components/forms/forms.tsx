import PersonalDetails from "./PersonalDetails";

interface IForms {
  header: string;
  description: string;
  form: JSX.Element;
}

export const forms: IForms[] = [
  {
    header: "Personal Info",
    description: "Please provide your name, email address, and phone number.",
    form: <PersonalDetails />,
  },
];

export const steps = forms.length;
