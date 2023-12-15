import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { InputFile } from "./File";
import { ButtonDemo } from "./Button";

const Noob = ({ selectedTab }) => {
  let content;
  switch (selectedTab) {
    case "Generate":
      content = <p>Content for Generate!</p>;
      break;
      case "Train Voice":
        content = (
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center">
              <InputFile />
            </div>
            <div className="mt-4 flex items-center justify-center">
              {/* Use ButtonDemo with a specific label */}
              <ButtonDemo label="Upload Voice" />
            </div>
          </div>
        );
        break;      
    case "Account":
      content = <p>Content for Account</p>;
      break;
    default:
      content = <p>Default Content</p>;
  }

  return (
    <div className="rectangle mt-20 flex-start justify-center">
      <Card>
        <CardHeader>
          
          <CardTitle></CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent>
          {content}
        </CardContent>
        <CardFooter>
          <p></p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Noob;
