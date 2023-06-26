import PersonalDetails from "./PersonalDetails";
import Plan from "./Plan";

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
  {
    header: "Select your plan",
    description: "You have the option of monthly or yearly billing.",
    form: <Plan />,
  },
];

export const steps = forms.length;
