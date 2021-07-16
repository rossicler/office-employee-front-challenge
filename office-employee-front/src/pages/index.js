import Card from "../ui/components/Card/Card";
import Stepper from "../ui/components/Stepper/Stepper";
import Step from "../ui/components/Step/Step";

export default function Home() {
  return (
    <Card>
      <h2>SIGN UP OFFICE EMPLOYEE ACCOUNT</h2>
      <Stepper>
        <Step iconName="ti-user" title="Personal" active={true} />
        <Step iconName="ti-email" title="Contact" />
        <Step iconName="ti-star" title="Official" />
        <Step iconName="ti-credit-card" title="Payment" />
      </Stepper>
    </Card>
  );
}
